'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    href?: string
    target?: string
    rel?: string
    as?: 'button' | 'a'
    strength?: number
}

export function MagneticButton({
    children,
    className = '',
    onClick,
    href,
    target,
    rel,
    as = 'button',
    strength = 20,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / (rect.width / 2)
        const deltaY = (e.clientY - centerY) / (rect.height / 2)
        x.set(deltaX * strength)
        y.set(deltaY * strength)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    const Component = as === 'a' ? motion.a : motion.button

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
            style={{ padding: '20px', margin: '-20px' }}
        >
            <Component
                style={{ x: springX, y: springY }}
                whileTap={{ scale: 0.95 }}
                className={className}
                onClick={onClick}
                {...(as === 'a' ? { href, target, rel } : {})}
            >
                {children}
            </Component>
        </div>
    )
}
