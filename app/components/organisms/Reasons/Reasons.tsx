'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from "@/atoms/Heading/Heading"
import Paragraph from '@/atoms/Paragraph/Paragraph'
import Bubbles from "@/molecules/Bubbles/Bubbles"
import { useLayoutEffect } from 'react'

import './Reasons.scss'

export default function Reasons() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
  
      const tl = gsap.timeline()
  
      tl.from('.reasons h2', {
        y: '15px',
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.reasons',
          start: '-80%',
          end: '-75%',
          scrub: true
        }
      })

      tl.from('.reasons p', {
        y: '15px',
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.reasons',
          start: '-75%',
          end: '-70%',
          scrub: true
        }
      })

      tl.from('.reasons .bubbles', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.reasons',
          start: '-50%',
          end: '-40%',
          scrub: true
        }
      })

    })

    return () => ctx.revert()

  })

  return (
    <div className="reasons">
      <Heading
        title="Proč Reprofit"
      />
      <Paragraph
        text="Díky naší profesionální péči jsme pomohli klientkám z více než 90 zemí světa. Zároveň provádíme nejvíce výkonů asistované reprodukce v ČR."
      />
      <Bubbles />
    </div>
  )
}
