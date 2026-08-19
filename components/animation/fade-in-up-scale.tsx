"use client"

import { motion } from "framer-motion"

function FadeInUpScale({
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
            initial={{ opacity: 0, y: 48, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.9 }}
            viewport={{ once: false }}
            transition={{
                delay: delay,
                duration: 1.2, 
                ease: [.16,1,.3,1]
            }}
        >
            {children}
        </motion.div>
    )
}

export { FadeInUpScale }