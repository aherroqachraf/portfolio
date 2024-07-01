import React, { useRef } from 'react';
import {motion, useScroll} from 'framer-motion'
import LiIcon from './lilcon.component';

type DetailProps = {
    position: string,
    company: string,
    companyLink: string,
    time: string,
    address: string,
    work: string,

}
const Details = ({position, company, companyLink, time, address, work} : DetailProps) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div 
            initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: 'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>{position}&nbsp;
            <a 
                href={companyLink} 
                className='text-primary capitalize dark:text-primaryDark' 
                target='_blank'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>)
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] '/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
                position="Licence en Éducation Secondaire en Informatique"
                company='ENS-Rabat'
                companyLink='http://ens.um5.ac.ma'
                time='2020-Present'
                address="Rabat"
                work="J'ai obtenu une Licence en Éducation Secondaire en Informatique à l'École Normale Supérieure de Rabat. Ce programme m'a permis d'acquérir une formation solide en informatique, couvrant la programmation, les bases de données, les architectures réseau, et l'administration système, tout en me préparant à enseigner au niveau secondaire. J'ai développé des compétences techniques et pédagogiques essentielles, avec pour objectif de devenir un éducateur compétent et passionné, capable d'inspirer la prochaine génération d'informaticiens."
            />
            <Details
                position='Fullstack'
                company='Gestion des PFE'
                companyLink='www.google.com'
                time='2023'
                address="Rabat"
                work="Pour mon projet de fin d'études, j'ai réalisé une plateforme qui permet la gestion des Projets de Fin d'Études (PFE). Cette plateforme facilite la gestion et le suivi des projets des étudiants, offrant une solution intégrée et efficace pour les enseignants et les étudiants. Elle inclut des fonctionnalités pour le dépôt des projets, la révision, la validation, et le suivi des progrès, tout en assurant une gestion sécurisée et centralisée des données."
            />
         
        </ul>
      </div>
    </div>
  )
}

export default Experience
