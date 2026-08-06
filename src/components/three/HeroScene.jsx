import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from '@react-three/drei'
import * as THREE from 'three'
import Resizer from './Resizer'

const NODE_COLOR = '#E6D3A3'
const CORE_COLOR = '#9A8F6A'

/* A ring of glowing "module" nodes orbiting the core. */
function OrbitingNodes({ count = 8, radius = 3.45, speed = 0.28 }) {
  const group = useRef()
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2
        return {
          angle,
          y: Math.sin(angle * 2) * 0.5,
          scale: 0.16 + (i % 3) * 0.04,
        }
      }),
    [count],
  )

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * speed
  })

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <group
          key={i}
          position={[Math.cos(n.angle) * radius, n.y, Math.sin(n.angle) * radius]}
        >
          <Float speed={2} rotationIntensity={1.4} floatIntensity={1.2}>
            <mesh scale={n.scale}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color={NODE_COLOR}
                emissive={NODE_COLOR}
                emissiveIntensity={2.4}
                roughness={0.25}
                metalness={0.4}
              />
            </mesh>
          </Float>
        </group>
      ))}
    </group>
  )
}

/* Faint wireframe rings around the core, like data orbits. */
function OrbitRings() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.05
      ref.current.rotation.x += delta * 0.02
    }
  })
  return (
    <group ref={ref}>
      {[3.1, 3.9, 4.7].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.35, i * 0.4, 0]}>
          <torusGeometry args={[r, 0.006, 16, 120]} />
          <meshBasicMaterial color="#7C3AED" transparent opacity={0.42 - i * 0.07} />
        </mesh>
      ))}
    </group>
  )
}

/* The glowing distorted central core â€” the "operating system". */
function Core() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.15
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.15
    }
  })
  return (
    <group ref={ref}>
      <Icosahedron args={[1.7, 6]}>
        <MeshDistortMaterial
          color={CORE_COLOR}
          emissive={CORE_COLOR}
          emissiveIntensity={0.9}
          roughness={0.15}
          metalness={0.6}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>
      {/* Wireframe shell */}
      <Icosahedron args={[1.95, 2]}>
        <meshBasicMaterial color="#E6D3A3" wireframe transparent opacity={0.3} />
      </Icosahedron>
    </group>
  )
}

/* Gentle mouse-parallax on the whole rig. */
function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const x = state.pointer.x * 0.4
    const y = state.pointer.y * 0.25
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x, 0.04)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y, 0.04)
  })
  return <group ref={ref}>{children}</group>
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 9], fov: 45 }}
    >
      <Suspense fallback={null}>
        <Resizer />
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={3.3} color="#E6D3A3" />
        <pointLight position={[-6, -4, 2]} intensity={2.4} color="#7C3AED" />
        <Stars radius={60} depth={40} count={3200} factor={3.6} saturation={0} fade speed={0.9} />
        <Rig>
          <Core />
          <OrbitRings />
          <OrbitingNodes />
        </Rig>
        <Sparkles count={90} scale={12} size={3.2} speed={0.55} color="#E6D3A3" opacity={0.95} />
      </Suspense>
    </Canvas>
  )
}
