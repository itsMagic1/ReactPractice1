import { Label } from "../../shared/Label/Label"
import styles from './features.module.css'
import { CardContainer } from "../../shared/Cards/CardContainer"
import img1 from './../../../assets/images/cards/card1.png'
import img2 from './../../../assets/images/cards/card2.png'
import img3 from './../../../assets/images/cards/card3.png'
import img4 from './../../../assets/images/cards/card4.png'
import img5 from './../../../assets/images/cards/card5.png'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Features = () => {
  
  const animationFn = (elements) => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set(elements, { autoAlpha: 0, y: 60 });
  
    ScrollTrigger.batch(elements, {
      start: 'top 75%',
      onEnter: batch => gsap.to(batch, {
        autoAlpha: 1,
        stagger: 0.15,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }

  return (
    <div id="featuresSection" className={styles.container}>
      <Label children='Features' />
      <h4 className='subtitle'>Streamline Finances with Smart Features</h4>
      <CardContainer animationFn={animationFn} cards={featuresCards} />
    </div>
  )
}

const featuresCards = [
  {
    id: 1,
    title: 'Real-Time Analytics',
    text: 'Monitor your finances live with clear intuitive dashboards',
    img: img1,
    position: 'vertical'
  },
  {
    id: 2,
    title: 'Automated Reports',
    text: 'Generate summaries instantly &mdash; no manual work needed.',
    img: img2,
    position: 'vertical'
  },
  {
    id: 3,
    title: 'Smart Budgeting',
    text: 'Plan and adjust with AI-powered budget suggestions.',
    img: img3,
    position: 'vertical'
  },
  {
    id: 4,
    title: 'Secure Syncing',
    text: 'Link accounts safely with real-time data syncing.',
    img: img4,
    position: 'horizontal'
  },
  {
    id: 5,
    title: 'Growth Score',
    text: 'View key metrics and trends at a glance.',
    img: img5,
    position: 'horizontal'
  }
]