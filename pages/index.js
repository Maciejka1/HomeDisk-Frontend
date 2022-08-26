import { motion } from "framer-motion"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
export default function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 2}}}
      exit={{opacity: 0}}
      className="min-h-[95vh]"
    >
      <div className="h-[80vh] pt-20 w-screen flex flex-wrap items-center justify-center gap-10 px-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl text-[#ff3c83]">
            Welcome to <br/> HomeDisk!
          </h1>
          <p>
            HomeDisk is an <span className="font-bold">extremely</span> fast and <span className="font-bold">lightweight</span> local cloud for your data written in rust
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="/login">
            <a className="border-[1px] border-[#51b74f] rounded-xl p-16">
              <div className="flex flex-col gap-0 hover:gap-2">
                <p className="font-bold flex items-center gap-2 hover:gap-4 text-xl">Sign in <FaArrowRight/></p>
                <p>Log in to your account</p>
              </div>
            </a>
          </Link>
          <Link href="/register">
            <a className="border-[1px] border-sky-700 rounded-xl p-16">
              <div className="flex flex-col gap-0 hover:gap-2">
                <p className="font-bold flex items-center gap-2 hover:gap-4 text-xl">Register <FaArrowRight/></p>
                <p>Create a new account</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
       
    </motion.div>
  )
}
