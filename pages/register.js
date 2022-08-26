import React from 'react'
import { motion } from 'framer-motion'
export default function Register() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    >

    </motion.div>
  )
}
