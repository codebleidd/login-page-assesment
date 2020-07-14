import React from 'react'
import { motion } from 'framer-motion'

interface MountTransitionProps {
  children: React.ReactNode
  slide?: number
  slideUp?: number
  className?: string
}

export const MountTransition = ({
  children,
  slide = 30,
  slideUp = 0,
  className,
}: MountTransitionProps) => (
  <motion.div
    exit={{ opacity: 0, x: slide, y: slideUp }}
    initial={{ opacity: 0, x: slide, y: slideUp }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.15 }}
    className={className}
  >
    {children}
  </motion.div>
)

export default MountTransition
