import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
export default function Login() {
    const router = useRouter()
    const [loginData, setLoginData] = React.useState({login: "", passwd: ""})
    const handleChange = (event) => {
        setLoginData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    const submit = () => {
        router.push('/')
    }
    const [isVisible, setIsVisible] = React.useState(false)
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    >
        <div className='flex justify-center items-center h-screen w-screen '>
            <div>
                <h1 className='font-bold text-3xl'>Sign in</h1>
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
                    <button onClick={submit}>Log in</button>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
