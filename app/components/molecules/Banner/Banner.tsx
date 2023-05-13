'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/atoms/Button/Button'
import Image from 'next/image'
import image from '/public/images/banner.png'
import { useLayoutEffect } from 'react'

import './Banner.scss'

export default function Banner() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.fromTo('.banner__image__wrapper', {
        clipPath: `inset(0% 25% 0% 0% round 440px 440px 440px 440px)`
      },
      {
        clipPath: `inset(0% 0% 0% 0% round 440px 440px 440px 440px)`,
          scrollTrigger: {
            trigger: '.banner',
            start: '-160%',
            end: '-130%',
            scrub: true
          }
      })
  
      const tl = gsap.timeline()
  
      tl.from('.banner__content h3', {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.banner',
          start: '-140%',
          end: '-130%',
          scrub: true
        }
      })

      tl.from('.banner__content p', {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.banner',
          start: '-130%',
          end: '-120%',
          scrub: true
        }
      })

      tl.from('.banner__content a', {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.banner',
          start: '-120%',
          end: '-110%',
          scrub: true
        }
      })

    })

    return () => ctx.revert()

  })

  return (
    <div className="banner">
      <div
        className="banner__image__wrapper"
        // style={{ maskImage: `url('#pill-horizontal-small')` }}
      >
        <div className="banner__image"></div>
        {/* <Image
          src={image.src}
          alt='banner image'
          width={520}
          height={371}
        /> */}
      </div>
      <div className="banner__content">
        <h3>První krok k rodičovství z pohodlí domova</h3>
        <p>Naši lékaři jsou tu pro Vás i on-line. Konzultace poskytujeme zdarma, objednáme Vás bez čekání a nutnosti předložení žádanky.</p>
        <Button
          type='primary'
          size='big'
          label='Chci se objednat'
        />
      </div>
    </div>
  )
}
