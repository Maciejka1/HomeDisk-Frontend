import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import axios from "axios"
export default function Home() {

  const [login, setLogin] = React.useState()
  React.useEffect(() => {
    setLogin(localStorage.getItem("isLoggedIn"))

  })
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="min-h-[95vh]"
    >
      <div className="h-[80vh] pt-20 w-screen flex flex-wrap items-center justify-center gap-10 px-2">
        <motion.div className="flex flex-col gap-2"
        initial={{x: -100}}
        animate={{x: 0, transition: {duration: 1}}}
        exit={{opacity: 0}}
        >
          <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl text-[#ff3c83]">
            Welcome to <br/> HomeDisk!
          </h1>
          <p>
            HomeDisk is an <span className="font-bold">extremely</span> fast and <span className="font-bold">lightweight</span> local cloud for your data written in rust
          </p>
        </motion.div>
        <div className="flex flex-col gap-5">
          {
            login === "logged" ? 
            <Link href="/dashboard">
              <motion.a className="border-[1px] border-sky-700 rounded-xl p-16"
              initial={{y: 50, opacity: 0}}
              animate={{y: 0, opacity: 1, transition: {duration: 1, delay: 1}}}
              exit={{y: 50, opacity: 0}}
              >
                <div className="flex flex-col gap-0 hover:gap-2">
                  <p className="font-bold flex items-center gap-2 hover:gap-4 text-xl">Dashboard <FaArrowRight/></p>
                  <p>Manage your storage</p>
                </div>
              </motion.a>
            </Link>
            : 
            <>
             <Link href="/login">
               <motion.a className="border-[1px] border-[#51b74f] rounded-xl p-16"
               initial={{y: -50, opacity: 0}}
               animate={{y: 0, opacity: 1, transition: {duration: 1, delay: 0.5}}}
               exit={{y: -50, opacity: 0}}
               >
                 <div className="flex flex-col gap-0 hover:gap-2">
                   <p className="font-bold flex items-center gap-2 hover:gap-4 text-xl">Sign in <FaArrowRight/></p>
                   <p>Log in to your account</p>
                 </div>
               </motion.a>
             </Link>
             <Link href="/register">
               <motion.a className="border-[1px] border-sky-700 rounded-xl p-16"
               initial={{y: 50, opacity: 0}}
               animate={{y: 0, opacity: 1, transition: {duration: 1, delay: 1}}}
               exit={{y: 50, opacity: 0}}
               >
                 <div className="flex flex-col gap-0 hover:gap-2">
                   <p className="font-bold flex items-center gap-2 hover:gap-4 text-xl">Register <FaArrowRight/></p>
                   <p>Create a new account</p>
                 </div>
               </motion.a>
             </Link>
           </>
          }
        </div>
      </div>
       
    </motion.div>
  )
}
