import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import Resizer from './Resizer'

const ACCENT = '#2dd4bf'

/* Stacked disks that read as a database cylinder, softly glowing. */
function DatabaseCore() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.25
  })
  return (
    <group ref={ref}>
      {[0.62, 0, -0.62].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <cylinderGeometry args={[1.05, 1.05, 0.42, 48]} />
          <meshStandardMaterial
            color="#0d9488"
            emissive={ACCENT}
            emissiveIntensity={0.35}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      ))}
      <mesh>
        <cylinderGeometry args={[1.16, 1.16, 1.9, 48, 1, true]} />
        <meshBasicMaterial color="#5eead4" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  )
}

/* A line from the core out to a node, plus the node itself. */
function ConnectedNode({ position, label }) {
  const points = useMemo(
    () => [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...position)],
    [position],
  )
  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])

  return (
    <group>
      <line geometry={geo}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.4} />
      </line>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.4}>
        <mesh position={position}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={1.4}
            roughness={0.25}
            metalness={0.4}
          />
        </mesh>
        <Html
          position={position}
          center
          distanceFactor={9}
          className="pointer-events-none select-none"
        >
          <div className="whitespace-nowrap rounded-full border border-teal-400/30 bg-ink-900/80 px-3 py-1 text-[11px] font-semibold text-teal-300 backdrop-blur">
            {label}
          </div>
        </Html>
      </Float>
    </group>
  )
}

function Constellation({ nodes }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12
  })
  const positioned = useMemo(() => {
    const r = 3
    return nodes.map((label, i) => {
      const a = (i / nodes.length) * Math.PI * 2
      const y = i % 2 === 0 ? 0.6 : -0.6
      return { label, position: [Math.cos(a) * r, y, Math.sin(a) * r] }
    })
  }, [nodes])

  return (
    <group ref={ref}>
      {positioned.map((n, i) => (
        <ConnectedNode key={i} position={n.position} label={n.label} />
      ))}
    </group>
  )
}

export default function DatabaseScene({ nodes = ['CRM', 'HR', 'Payroll', 'Dashboard'] }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 1.5, 8], fov: 45 }}
    >
      <Suspense fallback={null}>
        <Resizer />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#5eead4" />
        <pointLight position={[-5, -3, 2]} intensity={1.2} color="#22d3ee" />
        <DatabaseCore />
        <Constellation nodes={nodes} />
        <Sparkles count={40} scale={9} size={2} speed={0.3} color="#67e8f9" opacity={0.6} />
      </Suspense>
    </Canvas>
  )
}
