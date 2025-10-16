import styles from './hero.module.css';
import heroImg from './../../../assets/images/hero_phone.avif'
import { Button } from '../../shared/button/Button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Hero = () => {
  const img = useRef(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(img.current, {
    y: -200,
    duration: 2,
    ease: 'power.in',
    scrollTrigger: {
      trigger: img.current,
      scrub: 1, 
      start: 'top 25%',
      end: '80% top',
    }
  });


  const tl = gsap.timeline();
  gsap.utils.toArray('.hero-animate').forEach((el, i) => {
    tl.fromTo(el, {
      y: 10,
      opacity: 0,
      scale: .5,
    }, {
      opacity: 1,
      scale: 1,
      duration: .5,
      ease: 'power2.inOut',
      y: 0
    }, i * 0.2)
  })

}, []);

  return (
    <section className={styles.container}>
      <div className={styles.texts}>
      <h1 className={`${styles.title} hero-animate`}>Grow smarter, <br/> invest with confidence</h1>
        <div className={styles.content}>
          <p className={`${styles.text} hero-animate`}>Smarter tools design to help you grow your health effortlessly and take control of your financial future.</p>
          <Button className='hero-animate' children='Get Started' variant='primary'/>
        </div>
      </div>
      <div className={styles.image}>
            <div ref={img} className={styles.heroImg}>
              <img src={heroImg} className='hero-animate'/>
          </div>
      </div>
    </section>
  )
}
