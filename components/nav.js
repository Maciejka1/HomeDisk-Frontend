import Link from 'next/link';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
export default function Nav() {
    const [navControl, setNavControl] = React.useState("-15rem")
    const [width, setWidth] = React.useState()
    React.useEffect(()=>{
        setWidth(window.screen.availWidth)
    }, [])
    let shouldResize = width <= 768 ? () => setNavControl('-100%') : undefined

    return (
    <>
        <div onClick={() => setNavControl('0')}>
            <div className="fixed m-5 text-4xl right-0 md:hidden" >
                <FaBars/>
            </div>
        </div>
        <nav className="pr-2 flex flex-col items-center bg-[#222] h-screen fixed md:justify-between md:w-full md:h-12 md:right-0 md:left-0 md:flex-row md:border-b-[1px] border-[#444]" style={{right: navControl}}> 
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
                <Link href="/login">
                    <a onClick={shouldResize}>
                        <li>Login</li>
                    </a>
                </Link>
            </ul>
            <div className="text-4xl md:hidden text-white" onClick={() => setNavControl('-100%')}>
                <FaTimes/>
            </div>
        </nav>
    </>
  );
}
