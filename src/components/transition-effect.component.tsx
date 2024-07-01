'use client'
import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionEffect = () => {
  const path = usePathname()

  return (
    <>
        <motion.div key={path} className='fixed top-0 bottom-0 right-full w-screen z-30 bg-primary dark:bg-primaryDark '
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        exit={{x : ['0%', '100%'], width : ['0%', '100%']}}
        transition={{duration: 0.8, ease: 'easeInOut'}}
        />

    {/* <motion.div className='fixed top-0 bottom-0 right-full w-screen z-20 bg-light ' 
    initial={{x: '100%', width: '100%'}}
     animate={{x: '0%', width: '0%'}}
     transition={{delay: 0.2, duration: 0.8, ease: 'easeInOut'}}
     />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen z-10 bg-dark ' 
    initial={{x: '100%', width: '100%'}}
     animate={{x: '0%', width: '0%'}}
     transition={{delay: 0.4, duration: 0.8, ease: 'easeInOut'}} 
     />*/}
    </>
  )
}

export default TransitionEffect
