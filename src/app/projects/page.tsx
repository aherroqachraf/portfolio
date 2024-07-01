"use client"
import AnimatedText from '@/components/animated-text.component'
import Layout from '@/components/layout.component'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { GithubIcon } from '@/components/icons.component'
import gameOfLife from '../../../public/images/projects/game_of_life.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/transition-effect.component'
import { usePathname } from 'next/navigation'

type ProjectProps = {
    type: string,
    title: string,
    img: StaticImageData,
    link: string,
    github: string,
}

interface FeaturedProject extends ProjectProps {
    summary: string,
}

const FramerImage = motion(Image)

const FeaturedProject : React.FC<FeaturedProject> = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-b-3xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
       
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                    <div className="text-blue-500 bg-blue-500/10 border border-blue-500 rounded-md px-2 py-[2px] text-sm cursor-pointer flex shrink-0 ml-4">
                        NextJS
                    </div>
                    <button className="text-yellow-500 bg-yellow-500/10 border border-yellow-500 rounded-md px-2 py-[2px] text-sm cursor-pointer flex shrink-0 ml-4">
                        Tailwind
                    </button>
                    
  {/* <button class="text-yellow-500 bg-yellow-500/10 border border-yellow-500 rounded-md px-2 py-[2px] text-sm cursor-pointer flex shrink-0">
    Yellow Button
  </button>
  
  <button class="text-green-500 bg-green-500/10 border border-green-500 rounded-md px-2 py-[2px] text-sm cursor-pointer flex shrink-0">
    Green Button
  </button>
 
  <button class="text-red-500 bg-red-500/10 border border-red-500 rounded-md px-2 py-[2px] text-sm cursor-pointer flex shrink-0">
    Red Button
  </button> */}
                </div>
            </div>
        </article>
    )
}

const Project : React.FC<ProjectProps> = ({title, type, img ,link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}



const Projects = () => {

   
  return (
    <>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text='My Touches At World' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject
                        title='Game Of Life Application'
                        img={gameOfLife}
                        link='https://gameoflife-next.vercel.app/'
                        github='https://github.com/Soufiane-coder/gameoflife_next'
                        type='Featured Project'
                        summary='Introducing our innovative web application that revolutionizes goal tracking by breaking down aspirations into manageable daily habits, empowering users to achieve continuous self-improvement with a user-friendly interface and robust features.'
                    />
                </div>
                {/* <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title='Crypto Screener Application'
                        img={project1}
                        link='/'
                        github='/'
                        type='Featured Project'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                        title='Crypto Screener Application'
                        img={project1}
                        link='/'
                        github='/'
                        type='Featured Project'
                    />
                </div>
                <div className='col-span-12'>
                <FeaturedProject
                        title='Crypto Screener Application'
                        img={project1}
                        link='/'
                        github='/'
                        type='Featured Project'
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                        title='Crypto Screener Application'
                        img={project1}
                        link='/'
                        github='/'
                        type='Featured Project'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title='Crypto Screener Application'
                        img={project1}
                        link='/'
                        github='/'
                        type='Featured Project'
                    />
                </div> */}
            </div>
        </Layout>
    </main>
    </>
  )
}

export default Projects
