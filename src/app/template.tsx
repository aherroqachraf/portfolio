"use client"
import ParticlesContainer from '@/components/particles-container.component';
import TransitionEffect from '@/components/transition-effect.component';
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import ThemeContext from './theme.context'

const Template = ({children}: Readonly<{
    children: React.ReactNode;
  }>)  => {
    
  const path = usePathname()
  console.log(path)
    
  return (
    <>

      {/* <AnimatePresence mode='wait'>
        <TransitionEffect/>
      </AnimatePresence> */}
      
        {children}
   
    </>
  )
}

export default Template
