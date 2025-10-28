"use client"

import { motion } from "framer-motion"

function FadeInUp({
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
            whileInView={{ opacity: 1, y: '0' }}
            exit={{ opacity: 0, y: '1rem' }}
            viewport={{ once: true }}
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

export { FadeInUp }