import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { getToken, setToken } from './api/utils/token'
export default function Login() {
    const router = useRouter()
    const [loginData, setLoginData] = React.useState({login: "", passwd: "", repeatPasswd: ""})
    const handleChange = (event) => {
        setLoginData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    React.useEffect(() => {

        const checkLogin = localStorage.getItem("isLoggedIn")
        if (checkLogin === "logged"){
            router.push("/")
        }

    })
    const submit = () => {
      if(loginData.passwd === loginData.repeatPasswd && loginData.passwd){
        router.push('/')
      } else{
        setError("Passwords aren't the same")
      }
      loginData.login === "" && setError("Email is empty") 
    }
    const [isVisible, setIsVisible] = React.useState(false)
    const [error, setError] = React.useState()
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
        <div className='flex justify-center items-center h-screen w-screen '>
            <div>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl text-[#ff3c83] mb-5">Register</h1>
                <div className='flex flex-col gap-2 text-xl'>
                    <input 
                        type="email"
                        className='text-black'
                        placeholder="Email"
                        name="login"
                        value={loginData.login}
                        onChange={handleChange}
                    />
                    <div className='flex items-center gap-2'>
                        <input 
                            type={isVisible ? "text" : "password"}
                            className='text-black'
                            placeholder="Password"
                            name="passwd"
                            value={loginData.passwd}
                            onChange={handleChange}
                        />
                        <div onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? <AiFillEyeInvisible/> : <AiFillEye/>}
                        </div>
                    </div>
                    <p>Repeat your password</p>
                    <div className='flex items-center gap-2'>
                        <input 
                            type="password"
                            className='text-black'
                            placeholder="Password"
                            name="repeatPasswd"
                            value={loginData.repeatPasswd}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <button onClick={submit}>Log in</button>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
