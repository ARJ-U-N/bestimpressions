'use client'

import { useEffect, useRef, useState } from 'react'

const DOT_SIZE = 2
const DOT_SPACING = 30
const FLASHLIGHT_RADIUS = 200

interface Dot {
  x: number
  y: number
  id: string
}

interface DotState {
  scale: number
  color: string
}

export function InteractiveDotGrid() {
  const [dots, setDots] = useState<Dot[]>([])
  const [dotStates, setDotStates] = useState<Map<string, DotState>>(new Map())
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  // Generate grid of dots on mount
  useEffect(() => {
    const generateDots = () => {
      const generatedDots: Dot[] = []
      let id = 0

      const width = typeof window !== 'undefined' ? window.innerWidth : 1024
      const height = typeof window !== 'undefined' ? window.innerHeight : 768

      const cols = Math.ceil(width / DOT_SPACING) + 1
      const rows = Math.ceil(height / DOT_SPACING) + 1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          generatedDots.push({
            x: col * DOT_SPACING,
            y: row * DOT_SPACING,
            id: `dot-${id}`,
          })
          id++
        }
      }

      setDots(generatedDots)
    }

    generateDots()

    const handleResize = () => {
      generateDots()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track mouse movement and update dot states
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newMousePos = { x: e.clientX, y: e.clientY }

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const newStates = new Map<string, DotState>()

        dots.forEach((dot) => {
          const dx = dot.x - newMousePos.x
          const dy = dot.y - newMousePos.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let scale = 1
          let color = '#1a1a1a'

          if (distance < FLASHLIGHT_RADIUS) {
            const influence = 1 - distance / FLASHLIGHT_RADIUS
            scale = 1 + influence * 3
            // Interpolate from dark gray to Safety Yellow (#FFF200)
            const r = Math.round(26 + (255 - 26) * influence * 0.85)
            const g = Math.round(26 + (242 - 26) * influence * 0.85)
            const b = Math.round(26 + (0 - 26) * influence * 0.85)
            color = `rgb(${r}, ${g}, ${b})`
          }

          newStates.set(dot.id, { scale, color })
        })

        setDotStates(newStates)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dots])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        backgroundColor: '#020202',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {dots.map((dot) => {
        const state = dotStates.get(dot.id) || { scale: 1, color: '#1a1a1a' }
        return (
          <div
            key={dot.id}
            className="absolute rounded-full transition-all duration-150"
            style={{
              left: dot.x,
              top: dot.y,
              width: DOT_SIZE * state.scale,
              height: DOT_SIZE * state.scale,
              backgroundColor: state.color,
              transform: `translate(-50%, -50%)`,
            }}
          />
        )
      })}
    </div>
  )
}
