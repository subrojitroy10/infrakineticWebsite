'use client'

import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Deterministic canvas sizing + off-screen render pausing.
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

    const apply = (w: number, h: number) => {
      if (w <= 0 || h <= 0) return
      if (w === last.w && h === last.h) return
      last = { w, h }
      setSize(w, h)
      gl.setSize(w, h, true)
      if ((camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
        ;(camera as THREE.PerspectiveCamera).aspect = w / h
        ;(camera as THREE.PerspectiveCamera).updateProjectionMatrix()
      }
      invalidate()
    }

    const fit = () => apply(parent.clientWidth, parent.clientHeight)

    let frames = 0
    let rafId: number
    const poll = () => {
      fit()
      if (++frames < 120) rafId = requestAnimationFrame(poll)
    }
    poll()

    window.addEventListener('resize', fit)

    let ro: ResizeObserver | undefined
    let io: IntersectionObserver | undefined
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
