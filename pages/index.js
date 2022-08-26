import { motion } from "framer-motion"
export default function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 2}}}
      exit={{opacity: 0}}
    >
      <div className="h-screen w-screen flex items-center justify-center">
        <div>
          <h1 className="font-bold text-8xl text-[#ff3c83]">Welcome to HomeDisk!</h1>
          <p>HomeDisk is a <span>extremely</span> fast and <span>lightweight</span> local cloud for your data written in rust</p>
        </div>
      </div>
       
    </motion.div>
  )
}
