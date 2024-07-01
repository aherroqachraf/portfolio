'use client'
import Layout from "@/components/layout.component";
import NavBar from "@/components/nav-bar.component";
import Image from "next/image";
import ProfilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from "@/components/animated-text.component";
import Link from "next/link";
import { LinkArrow } from "@/components/icons.component";
import HireMe from "@/components/hire-me.component";
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from "@/components/transition-effect.component";
import ParticlesContainer from "@/components/particles-container.component";
import { motion } from "framer-motion";
import ostadati from '../../public/images/profile/Eddarouich.jpg'

const FramerImage = motion(Image)
export default function Home() {
  return (
    <>
      <ParticlesContainer/>
      <main className=" z-40 flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8 !bg-transparent">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={ProfilePic} alt='CodeBucks' className="w-full h-auto lg:hidden md:inline-block md:w-full p-20 md:p-16 xs:p-10 rounded-full "/>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText 
                text='Portfolio'
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              Bonjour et bienvenue sur mon portfolio en ligne ! Je suis Achraf EL MOUNAFIH, actuellement en formation au Centre Régional des Métiers d'Enseignement et de Formation, ce portfolio est une vitrine de mes compétences, de mes projets et de mes réalisations.

              Vous y découvrirez les différents travaux que j'ai accomplis au cours de ma formation et de mes expériences professionnelles. Mon objectif est de partager avec vous mon parcours et mes aspirations professionnelles tout en démontrant mon expertise et ma créativité

              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href='/cv.pdf' target="_blank" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light md:p-2 md:px-4 md:text-base '
                download={true}>Resume
                <LinkArrow className="w-6 ml-1"/>
                </Link>
                <Link href='mailto:mhachraf79@gmail.com' target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>              
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe/>  */}
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt='Codebucks' className="w-full h-auto md:hidden"/>
        </div>
      </main>
      <div className='w-full flex flex-wrap justify-center text-center mb-16 gap-5'>
        <div className='col-span-3 relative rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 w-96 h-[30rem]'>
                      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                      
                      <Image src={ostadati} alt='Codebucks'
                      priority
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                      className='w-full h-full rounded-2xl bg-[#000] object-cover' />
        </div>
        <div className=" w-[30rem] flex flex-col justify-center align-center">
          <h1 className='font-bold'>Souad Eddarouich </h1>
        Currently works in, Centre Régional des Métiers de l'Education et de la Formation de la Région de Rabat (CRMEF). Souad does research in Data Mining, Artificial Intelligence and Artificial Neural Network. Their current project is 'la reconnaissance d'Iris'.
        </div>
      </div>
      </>
  );
}
