"use client"
import Provider from '@/app/providers'
import ThemeContext from '@/app/theme.context'
import React, {useCallback, useContext, useEffect, useState} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'

const ParticlesContainer = () => {
    const [isDark, setIsDark] = useState<boolean>(true)
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('ChildComponent must be used within a MyProvider');
      }
    
    const { contextValue, } = context;

    useEffect(() => {
        setIsDark(contextValue === 'dark')
    }, [contextValue])

    const particlesInit = useCallback(async (engine : any) => {
         console.log(engine)
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback(async () => {
        
    }, [])


    // if(typeof window != 'undefined'){
    //     const element = window.document.documentElement;

    //     const handleClassChange = () => {
           
    //         setIsDark(element.classList.contains('dark'))
    //     }
    
    //     const observer = new MutationObserver((mutationsList) => {
    //         for (const mutation of mutationsList) {
    //             if (mutation.attributeName === 'class') {
    //                 handleClassChange();
    //             }
    //         }
    //     });
    
    //     observer.observe(element, { attributes: true });
    // }
    
    
  return (
    <>

    <Particles 
        className='w-full h-full absolute translate-z-0'
        id='tsparticles'
        init={particlesInit}
        // particlesInit={particlesInit}
        loaded={particlesLoaded}
        options={{
        fullScreen: { enable: false },
        background: {
            color: {
                value: ''
            }
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 90,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                }
            }
        },
        particles: {
            color: {
                value: isDark ? '#58E6D9' :"#B63E96"  //
            },
            links: {
                color: isDark ? '#B7F4FF': "#D49CE5",
                distance: 150,
                enable: true,
                opacity: 0.8,
                width: 1
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle'
            },
            size: {
                value: {
                    min: 1,
                    max: 5
                }
            },
        },
        detectRetina: true,
    }}
    />
    </>
  )
}

export default ParticlesContainer
