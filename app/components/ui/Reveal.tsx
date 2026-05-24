"use client"

import { motion } from "framer-motion"

interface RevealProps {
    children: React.ReactNode
}

export default function Reveal({
                                   children,
                               }: RevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}

            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.div>
    )
}