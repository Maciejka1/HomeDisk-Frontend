import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
export default function Nav() {
    const router = useRouter()
    const [navControl, setNavControl] = React.useState("-15rem")
    const [width, setWidth] = React.useState()
    const [login, setLogin] = React.useState(false)

    React.useEffect(()=>{
        setWidth(window.screen.availWidth)
        setLogin(localStorage.getItem("isLoggedIn"))
    }, [])
    
    let shouldResize = width <= 768 ? () => setNavControl('-100%') : undefined

    return (
    <>
        <div onClick={() => setNavControl('0')}>
            <div className="fixed m-5 text-4xl right-0 md:hidden" >
                <FaBars/>
            </div>
        </div>
        <nav className="flex flex-col justify-between items-center px-5  bg-[#222] h-screen fixed md:px-0 md:pr-2 md:justify-between md:left-0 md:w-full md:h-12 md:flex-row md:border-b-[1px] border-[#444]" style={{right: navControl}}> 
            <Link href="/">
                <a className="md:h-full md:flex items-center">
                    <img src="/images/icons/favicon.svg" alt="logo" className="h-20 md:h-full p-1"/>
                    <h1 className="md:ml-2 text-lg">HomeDisk</h1>
                </a>
            </Link>
            <ul className="flex flex-col gap-5 font-semibold text-lg md:flex-row">
                <Link href="/">
                    <a onClick={shouldResize}>
                        <li>Home</li>
                    </a>
                </Link>
                <Link href="/dashboard">
                    <a onClick={shouldResize}>
                        <li>Dashboard</li>
                    </a>
                </Link>
                {
                    login === "logged" ? 
                    <a onClick={() => {
                        localStorage.removeItem("isLoggedIn")
                        router.reload("/")
                    }}>
                        <li>Log out</li>
                    </a>
                    : 
                    <Link href="/login">
                        <a onClick={shouldResize}>
                            <li>Log in</li>
                        </a>
                    </Link>
                }
            </ul>
            <div className="text-4xl md:hidden text-white mb-20 md:mb-0" onClick={() => setNavControl('-100%')}>
                <FaTimes/>
            </div>
        </nav>
    </>
  );
}
