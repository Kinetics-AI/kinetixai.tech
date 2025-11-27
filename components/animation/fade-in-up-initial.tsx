"use client"

import { motion } from "framer-motion"

function FadeInInitial({
    children,
    delay = 0,
    className,
    ...props
}: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    return (
        <motion.div 
            {...props}
            className={className}
            initial={{ opacity: 0, y: '1rem' }}
            animate={{ opacity: 1, y: '0' }} 
            transition={{
                delay: delay,
                duration: 1.2, 
                ease: [0.5, 0, 0, 1]
            }}
        >
            {children}
        </motion.div>
    )
}

export { FadeInInitial }