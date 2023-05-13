'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import Heading from '@/atoms/Heading/Heading'
import Paragraph from '@/atoms/Paragraph/Paragraph'
import CareCard from '@/molecules/CareCard/CareCard'

import image1 from 'public/images/care-card_1.png'
import image2 from 'public/images/care-card_2.png'
import image3 from 'public/images/care-card_3.png'

import './Care.scss'

export default function Care() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.fromTo('.care .care-card:nth-child(1) .care-card__image', {
        clipPath: `inset(0% 0% 25% 0% round 440px 440px 440px 440px)`,
      },
      {
        clipPath: `inset(0% 0% 2% 0% round 440px 440px 440px 440px)`,
        scrollTrigger: {
          trigger: '.care',
          start: '-40%',
          end: '-10%',
          scrub: true
        }
      })

      gsap.fromTo('.care .care-card:nth-child(2) .care-card__image', {
        clipPath: `inset(0% 0% 25% 0% round 440px 440px 440px 440px)`,
      },
      {
        clipPath: `inset(0% 0% 2% 0% round 440px 440px 440px 440px)`,
        scrollTrigger: {
          trigger: '.care',
          start: '-35%',
          end: '-5%',
          scrub: true
        }
      })

      gsap.fromTo('.care .care-card:nth-child(3) .care-card__image', {
        clipPath: `inset(0% 0% 25% 0% round 440px 440px 440px 440px)`,
      },
      {
        clipPath: `inset(0% 0% 2% 0% round 440px 440px 440px 440px)`,
        scrollTrigger: {
          trigger: '.care',
          start: '-30%',
          end: '-0%',
          scrub: true
        }
      })
  
      const tl = gsap.timeline()
  
      tl.from('.care h2', {
        opacity: 0,
        ease: 'ease',
        scrollTrigger: {
          trigger: '.care',
          start: '-90%',
          end: '-85%',
          scrub: true
        }
      })

      tl.from('.care > p', {
        opacity: 0,
        ease: 'ease',
        scrollTrigger: {
          trigger: '.care',
          start: '-85%',
          end: '-80%',
          scrub: true
        }
      })

      tl.from('.care .care-card:nth-child(1) h4', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.care',
          start: '-20%',
          end: '-18%',
          scrub: true
        }
      })

      tl.from('.care .care-card:nth-child(1) p', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.care',
          start: '-18%',
          end: '-16%',
          scrub: true
        }
      })

      tl.from('.care .care-card:nth-child(2) h4', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.care',
          start: '-16%',
          end: '-14%',
          scrub: true
        }
      })

      tl.from('.care .care-card:nth-child(2) p', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.care',
          start: '-14%',
          end: '-12%',
          scrub: true
        }
      })

      tl.from('.care .care-card:nth-child(3) h4', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.care',
          start: '-12%',
          end: '-10%',
          scrub: true
        }
      })

      tl.from('.care .care-card:nth-child(3) p', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.care',
          start: '-10%',
          end: '-8%',
          scrub: true
        }
      })

    })

    return () => ctx.revert()

  })

  return (
    <div className='care'>
      <Heading
        title='Najdeme pro vás to nejúčinnější řešení'
      />
      <Paragraph
        text='Na klinice REPROFIT jsme dokázali pomoci většině párů k vytouženému dítěti. Používáme moderní metody léčby neplodnosti včetně léčby darovanými vajíčky. Najdeme pro vás nejsnadnější možnou cestu k otěhotnění.'
      />
      <div className='care__cards-wrapper'>
        <CareCard
          image={image1.src}
          title='IVF s vlastními vajíčky'
          description='Neplodnost trápí velké množství párů. Víme jak pomoci.'
        />
        <CareCard
          image={image2.src}
          title='IVF s darovanými vajíčky'
          description='Nedaří se vám počít dítě přirozenou cestou? Obraťte se na naši kliniku.'
        />
        <CareCard
          image={image3.src}
          title='IVF s darovanými embryi'
          description='Díky dlouholetým zkušenostem dosahujeme v léčbě IVF vysoké úspěšnosti.'
        />
      </div>
    </div>
  )
}
