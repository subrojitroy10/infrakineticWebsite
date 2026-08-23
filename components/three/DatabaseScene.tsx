'use client'

import React, { Suspense, useMemo, useRef } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Float, Html, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import Resizer from './Resizer'

const ACCENT = '#D8B56A'
const SECONDARY_COLOR = '#8C6F99'
extend({ LineSegments: THREE.LineSegments })

function DatabaseCore() {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.25
  })
  return (
    <group ref={ref}>
      {[0.62, 0, -0.62].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <cylinderGeometry args={[1.05, 1.05, 0.42, 48]} />
          <meshStandardMaterial
            color="#B89452"
            emissive={ACCENT}
            emissiveIntensity={0.35}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      ))}
      <mesh>
        <cylinderGeometry args={[1.16, 1.16, 1.9, 48, 1, true]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  )
}

function ConnectedNode({ position, label }: { position: [number, number, number]; label: string }) {
  const lineRef = useRef<THREE.Line>(null!)
  const points = useMemo(
    () => [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...position)],
    [position],
  )
  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])

  useFrame((_, delta) => {
    if (lineRef.current?.material) {
      ;(lineRef.current.material as THREE.LineBasicMaterial).opacity = 0.28 + Math.sin(Date.now() * 0.003) * 0.12
      lineRef.current.rotation.z += delta * 0.03
    }
  })

  return (
    <group>
      {/* @ts-ignore line element in R3F */}
      <line ref={lineRef} geometry={geo}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.48} />
      </line>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.4}>
        <mesh position={position}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={2}
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
          <div className="whitespace-nowrap rounded-full border border-gold-400/30 bg-ink-900/80 px-3 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur">
            {label}
          </div>
        </Html>
      </Float>
    </group>
  )
}

function Constellation({ nodes }: { nodes: string[] }) {
  const ref = useRef<THREE.Group>(null!)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2
      ref.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.08
    }
  })
  const positioned = useMemo(() => {
    const r = 3
    return nodes.map((label, i) => {
      const a = (i / nodes.length) * Math.PI * 2
      const y = i % 2 === 0 ? 0.6 : -0.6
      return { label, position: [Math.cos(a) * r, y, Math.sin(a) * r] as [number, number, number] }
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

export default function DatabaseScene({ nodes = ['CRM', 'HR', 'Payroll', 'Dashboard'] }: { nodes?: string[] }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 1.5, 8], fov: 45 }}
    >
      <Suspense fallback={null}>
        <Resizer />
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 5, 5]} intensity={3} color={ACCENT} />
        <pointLight position={[-5, -3, 2]} intensity={2} color={SECONDARY_COLOR} />
        <DatabaseCore />
        <Constellation nodes={nodes} />
        <Sparkles count={70} scale={9.5} size={2.8} speed={0.55} color={ACCENT} opacity={0.9} />
      </Suspense>
    </Canvas>
  )
}
