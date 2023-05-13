'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/atoms/Button/Button'
import FloatingCard from '@/molecules/FloatingCard/FloatingCard'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'

import image from '/public/images/image_01.png'
import heroImage from '/public/images/hero-1.png'

import './Hero.scss'

export default function Hero() {

  const clipPath = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.fromTo('.hero__image', {
        ClipPath: 'inset(0% -100% 10% 100% round 440px 440px 440px 440px)',
      },
      {
        ClipPath: 'inset(0% -60% 10% 40% round 440px 440px 440px 440px)',
        duration: 1,
        delay: 1,
        ease: 'ease-in'
      })

      const scroll = () => {
        gsap.fromTo('.hero__image', {
          ClipPath: 'inset(0% -60% 10% 40% round 440px 440px 440px 440px)',
        },
        {
          ClipPath: 'inset(0% 200% 10% -200% round 440px 440px 440px 440px)',
          scrollTrigger: {
            trigger: 'body',
            start: '0%',
            end: '40%',
            scrub: true
          }
        })
      }

      gsap.delayedCall(2, scroll)
  
      const tl = gsap.timeline()
  
      tl.to('.hero__content h1', {
        opacity: 1,
        ease: 'ease',
        duration: 0.5,
        delay: 0.5
      })

      tl.to('.hero__content p', {
        opacity: 1,
        ease: 'ease',
        duration: 0.5
      })

      tl.to('.hero__content a', {
        opacity: 1,
        ease: 'ease',
        duration: 0.5
      })

      tl.to('.hero__floating-card', {
        y: 0,
        opacity: 1,
        ease: 'ease',
        duration: 0.4
      })

    })

    return () => ctx.revert()

  }, [])

  return (
    <div className="hero">
      <div className='hero__content'>
        <h1>
          Vaše úspěšná
          <br/>
          cesta k miminku
          <br/>
          začíná u nás.
        </h1>
        <p className="big">
          Děti našich spokojených pacientů jsou důkazem kvality naší péče. Pomohli jsme na svět již více než 16 000 dětí.
        </p>
        <Button
          type='primary'
          size='big'
          label='Chci se objednat'
        />
        <div className="hero__floating-card">
          <FloatingCard
            image={image.src}
            description='Reprofit online se zkušenou doktorkou Patrícií Nižníkovou'
            href=''
          />
        </div>
      </div>
      <div
        className="hero__image"
        ref={clipPath}
      >
        <Image
          src={heroImage.src}
          alt="hero image"
          width={1600}
          height={960}
        />
      </div>
    </div>
  )
}
