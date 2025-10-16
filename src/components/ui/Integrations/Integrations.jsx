import { useEffect, useRef } from "react"
import { Label } from "../../shared/Label/Label"
import styles from './integration.module.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Integrations = () => {
  const circles = Array.from({ length: 10 })
  const circle = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let mm = gsap.matchMedia();

    mm.add('(min-width: 850px', () => {
      gsap.to(circle.current, {
        rotate: 145,
        ease: 'linear',
        scrollTrigger: {
        trigger: circle.current,
        scrub: 1, 
        start: 'top bottom',
        end: 'bottom top'
      }
      })
    })
  }, [])

  return (
    <div className={styles.container}>
      <Label children={'Integrations'}/>
      <h4 className="subtitle">
        Powerful integrations, effortless setup
      </h4>
      <div className={styles.figure}>
        <div ref={circle} className={styles.circle}>
          {
            circles.map((_, i) => (
              <div key={`box-${i}`} style={{'--i': i}} className={styles.box}></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
