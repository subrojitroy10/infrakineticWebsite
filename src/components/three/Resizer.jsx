import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

/**
 * Deterministic canvas sizing + off-screen render pausing.
 *
 * R3F's built-in sizing relies on ResizeObserver (via react-use-measure), which
 * silently no-ops in some embedded/headless browsers — leaving the canvas stuck at
 * the 300x150 HTML default. This measures the container directly and drives both
 * R3F's size state and the renderer/camera, with a short rAF poll so it works even
 * where ResizeObserver never fires. It also pauses the render loop when the canvas
 * scrolls out of view (IntersectionObserver, a progressive enhancement).
 */
export default function Resizer() {
  const gl = useThree((s) => s.gl)
  const camera = useThree((s) => s.camera)
  const setSize = useThree((s) => s.setSize)
  const setFrameloop = useThree((s) => s.setFrameloop)
  const invalidate = useThree((s) => s.invalidate)

  useEffect(() => {
    const canvas = gl.domElement
    const parent = canvas.parentElement
    if (!parent) return

    let last = { w: 0, h: 0 }

    const apply = (w, h) => {
      if (w <= 0 || h <= 0) return
      if (w === last.w && h === last.h) return
      last = { w, h }
      // R3F store (keeps raycasting/events correct in normal browsers)
      setSize(w, h)
      // Direct renderer + camera update (works even when R3F's observer is dormant)
      gl.setSize(w, h, true)
      if (camera.isPerspectiveCamera) {
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      invalidate()
    }

    const fit = () => apply(parent.clientWidth, parent.clientHeight)

    // Poll for the first ~2s to catch late layout / font loads without an observer.
    let frames = 0
    let rafId
    const poll = () => {
      fit()
      if (++frames < 120) rafId = requestAnimationFrame(poll)
    }
    poll()

    window.addEventListener('resize', fit)

    // These are progressive enhancements — harmless where they don't fire.
    let ro, io
    try {
      ro = new ResizeObserver(fit)
      ro.observe(parent)
    } catch (e) { /* unsupported */ }
    try {
      io = new IntersectionObserver(
        ([entry]) => setFrameloop(entry.isIntersecting ? 'always' : 'never'),
        { threshold: 0.01 },
      )
      io.observe(canvas)
    } catch (e) { /* unsupported */ }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', fit)
      ro?.disconnect()
      io?.disconnect()
    }
  }, [gl, camera, setSize, setFrameloop, invalidate])

  return null
}
