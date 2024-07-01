"use client"
import AnimatedText from '@/components/animated-text.component'
import Layout from '@/components/layout.component'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../../public/images/articles/create modal component in react using react portals.png'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/transition-effect.component'

type Article = {
    img ?: StaticImageData,
    title: string,
    time: string,
    link: string,
}

interface FeaturedArticle extends Article{
    summary: string,
}

const FramerImage = motion(Image)

const FeaturedArticle : React.FC<FeaturedArticle> = ({img, title, time, summary, link}) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            <Link
                href={link}
                target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                    {img && <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}/>}
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark '>{time}</span>
        </li>
    )
}

const MovingImg : React.FC<any> = ({title, img, link}) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef<HTMLInputElement>(null)

    const handleMouse = (event : any) => {
        if(!imgRef.current) return;

        imgRef.current.style.display = 'inline-block'
        x.set(event.pageX)
        y.set(-10)
    }

    const hanldeMouseLeave = (event : any) => {
        if(!imgRef.current) return;

        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }
    
    return(
        <Link href={link} target="_blank" onMouseMove={handleMouse}
        onMouseLeave={hanldeMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            { img && <FramerImage style={{x, y}} ref={imgRef} src={img} alt={title} 
            initial={{opacity: 0}}
            whileInView={{opacity: 1, transition: {duration: 0.2}}}
            className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>}
        </Link>
    )
}

const Article : React.FC<Article> = ({img, title, time, link}) => {
    return (
        <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
        initial={{y: 200}}
        whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
        viewport={{once: true}}>
        
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{time}</span>
        </motion.li>
    )
}

const Articles = () => {

    // return (<h1>Under construction</h1>)
  return (
    <>
    
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text='Words Can Change The World' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
            <FeaturedArticle
                title='GestionPFE'
                summary="Pour mon projet de fin d'études, j'ai réalisé une plateforme qui permet la gestion des Projets de Fin d'Études (PFE). Cette plateforme facilite la gestion et le suivi des projets des étudiants, offrant une solution intégrée et efficace pour les enseignants et les étudiants. Elle inclut des fonctionnalités pour le dépôt des projets, la révision, la validation, et le suivi des progrès, tout en assurant une gestion sécurisée et centralisée des données."
                time=''
                link='/'
                img={article1}
            />
            <FeaturedArticle
                title='Créez un composant de pagination personnalisé en ReactJS à partir de zéro'
                summary='Apprenez à créer un composant de pagination personnalisé en ReactJS à partir de zéro. Suivez ce guide étape par étape pour intégrer un composant de pagination dans votre projet ReactJS.'
                time=''
                link='/'
                img={article2}
            />
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Producations</h2>
        <h3 className='font-bold text-2xl w-full text-center my-16 mt-32'>Evaluation</h3>
        <ul>
            <Article
                title='Test de connaissance auto-correctif 1er niveau'
                time='juin 2024'
                link='/evaluation/1er-niv.odt'
            />
            <Article
                title='Test de connaissance auto-correctif du 2ème niveau'
                time='juin 2024'
                link='/evaluation/2eme-niv.odt'
            />
            <Article
                title='Test de connaissance auto-correctif du 3ème niveau'
                time='juin 2024'
                link='/evaluation/3eme-niv-.odt'
            />
            <Article
                title='Les erreurs systématiques'
                time='juin 2024'
                link='/evaluation/erreurs-systematiques.odt'
            />
            <Article
                title='Test de maîtrise à un seul objectif'
                time='juin 2024'
                link='/evaluation/maitrise-GÉNÉRALITÉS SUR SYSTEM INFO.odt'
            />
            <Article
                title='Test de maîtrise à plusieurs objectifs'
                time='juin 2024'
                link='/evaluation/METRISE-Algorithmiques.odt'
            />
            
        </ul>
        <h3 className='font-bold text-2xl w-full text-center my-16 mt-32'>Planification des apprentissages</h3>
        <ul>
            <Article
                title='Fiche Pédagogique Programmation'
                time='mars 2024'
                link='/planning/prog 1.docx'
            />
            <Article
                title="Fiche Pédagogique Notion d'Algorithme"
                time='mars 2024'
                link='/planning/NotionAlgorithme.docx'
            />
            <Article
                title='Fiche Pédagogique (word, Excel)'
                time='mars 2024'
                link='/planning/Fiche_Pédagogique(Word-Excel).docx'
            />
        </ul>
        <h3 className='font-bold text-2xl w-full text-center my-16 mt-32'>Rapport de stage</h3>
        <ul>
            <Article
                title='Rapport stage CRMEF'
                time='juin 2024'
                link='/Rapport_Stage_CRMEF.pdf'
            />
        </ul>
        <h3 className='font-bold text-2xl w-full text-center my-16 mt-32'>Recherche Action</h3>
        <ul>
            <Article
                title='Recherche action'
                time='juin 2024'
                link='/Rapport.docx'
            />
        </ul>
      </Layout>
    </main>
    </>
  )
}

export default Articles
