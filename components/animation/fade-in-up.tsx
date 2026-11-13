"use client"

import { motion } from "framer-motion"

function FadeInUp({
    children,
    delay = 0,
    className,
    ...props
}: {
    /** 可选：内容来自 CMS 富文本时改用 dangerouslySetInnerHTML 注入 */
    children?: React.ReactNode
    delay?: number
    className?: string
    /** 直接注入 HTML（如后台下发的富文本标题） */
    dangerouslySetInnerHTML?: { __html: string }
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