"use client"

import { motion } from "framer-motion"


function FadeIn({
    children,
    className,
    ...props
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <motion.div 
            {...props}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3, duration: .6 }}
        >
            {children}
        </motion.div>
    )
}

export { FadeIn }
