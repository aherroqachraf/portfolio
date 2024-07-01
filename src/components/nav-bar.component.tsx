"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Logo from './logo.component'
import {usePathname, useRouter} from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons.component'
import {motion} from 'framer-motion'
import UseThemeSwitcher from './hooks/use-theme-switcher.hook'
import ThemeContext from '@/app/theme.context'
import Provider from '@/app/providers'

const CustomLink : React.FC<{href: string, title: string, className?: string,}> = 
    ({href, title, className=''} ) => {
    const path = usePathname()
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${path === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink : React.FC<{href: string, title: string, className?: string, toggle : () => void}> = 
    ({href, title, className='', toggle} ) => {
    const path = usePathname()
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return(
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`h-[1px] inline-block absolute bg-light left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${path === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = UseThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const context = useContext(ThemeContext)

    if (!context) {
      throw new Error('ChildComponent must be used within a MyProvider');
    }
    const {contextValue, setContextValue} = context 

    useEffect(() => {
        setContextValue(mode)
        console.log('mode', mode)
    }, [mode])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`'bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5' ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45' : 'translate-y-0.5'}`}></span>
        </button>
        <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href='/' title='Accueil' className='mr-4'/>
                <CustomLink href='/about' title='A propos' className='mx-4'/>
                <CustomLink href='/articles' title='Projets' className='mx-4'/>
                {/* <CustomLink href='/articles' title='Article' className='ml-4'/> */}
            </nav>
            
            <nav className='flex items-center justify-center flex-wrap'>
                {/* <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='https://twitter.com'
                    className='w-6 mr-3 sm:mx-1'
                    target={"_blank"}>
                    <TwitterIcon/>
                </motion.a> */}
                {/* </motion.a> */}
                <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='https://www.linkedin.com/in/achraf-el-mounafih/'
                    target={"_blank"} className='w-6 mr-3'>
                    <LinkedInIcon/>
                </motion.a>
                {/* <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='/'
                    target={"_blank"}
                    className='w-6 mr-3'>
                    <PinterestIcon/>
                </motion.a> */}
                {/* <motion.a
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='/'
                    target={"_blank"}
                    className='w-6 mr-3'>
                    <DribbbleIcon/>
                </motion.a> */}
                <button
                    className='ml-3 flex items-center justify-center rounded-full p-1 
                    text-light bg-dark dark:text-dark dark:bg-light'
                    onClick={() => setMode(mode === 'light' ? 'dark': 'light')}
                >
                    {mode === 'dark' ? <SunIcon className='fill-dark'/> : <MoonIcon className='fill-dark'/>}
                </button>
            </nav>
        </div>

        {
            isOpen && <motion.div className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 ' initial={{scale : 0, opacity: 0, x: '-50%', y: '-50%'}}
            animate={{scale: 1, opacity: 1}}>
            <nav className='flex items-center flex-col justify-center'>
                <CustomMobileLink href='/' title='Home' toggle={handleClick}/>
                <CustomMobileLink href='/about' title='About' toggle={handleClick}/>
                <CustomMobileLink href='/projects' title='Project' toggle={handleClick}/>
                {/* <CustomMobileLink href='/articles' title='Article' toggle={handleClick}/> */}
            </nav>
            
            <nav className='flex items-center justify-center flex-wrap mt-2'>
                <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='https://twitter.com'
                    className='w-6 mr-3 sm:mx-1'
                    target={"_blank"}>
                    <TwitterIcon/>
                </motion.a>
                <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='/'
                    target={"_blank"}
                    className='w-6 mr-3 sm:mx-1 bg-light rounded-full dark:bg-dark'>
                    <GithubIcon/>
                </motion.a>
                <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='/'
                    target={"_blank"} className='w-6 mr-3 sm:mx-1'>
                    <LinkedInIcon/>
                </motion.a>
                <motion.a 
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='/'
                    target={"_blank"}
                    className='w-6 mr-3 sm:mx-1'>
                    <PinterestIcon/>
                </motion.a>
                <motion.a
                    whileHover={{y: -2}}
                    whileTap={{scale: 0.9}}
                    href='/'
                    target={"_blank"}
                    className='w-6 mr-3 sm:mx-1'>
                    <DribbbleIcon/>
                </motion.a>
                <button
                    className='ml-3 flex items-center justify-center rounded-full p-1 
                    text-light bg-dark dark:text-dark dark:bg-light'
                    onClick={() => setMode(mode === 'light' ? 'dark': 'light')}
                >
                    {mode === 'dark' ? <SunIcon className='fill-dark'/> : <MoonIcon className='fill-dark'/>}
                </button>
            </nav>
        </motion.div>
        }
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
      </header>
      
    </div>
  )
}

export default NavBar
