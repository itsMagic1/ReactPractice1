import { useEffect, useRef } from 'react';
import { CardPricing } from '../../shared/Cards/CardPricing';
import { Label } from '../../shared/Label/Label';
import styles from './pricing.module.css';
import { faStar, faCube, faBolt } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Pricing = () => {
  const cardsRef = useRef(null)

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const elements = cardsRef.current?.children;
  gsap.set(elements, { autoAlpha: 0, y: 30 });

  ScrollTrigger.batch(elements, {
    onEnter: batch => gsap.to(batch, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: .2
    }),
    start: 'top 80%',
    once: true
  });
  }, []);

  return (
    <div id='pricingSection' className={styles.container}>
      <Label children={'Pricing'}/>
      <h4 className="subtitle">Flexible Plans for Every Stage</h4>
      
      <div ref={cardsRef} className={styles.cards}>
        {
          cards.map(card => (
            <CardPricing key={`card-${card.id}`} card={card}/>
          ))
        }
      </div>
    </div>
  )
}

const cards = [
  {
    id: 1,
    title: 'Starter',
    icon: faStar,
    pricePerM: 0,
    description: 'Perfect solo founders and early-stage projects.',
    button: 'Get Started',
    features: [
      '1 connected account',
      'Real-time dashboard access',
      'Basic reporting',
      'Email support',
      'Up to 2 team members',
    ],
    dealStatus: false
  },
  {
    id: 2,
    title: 'Growth',
    icon: faCube,
    pricePerM: 25,
    description: 'Ideal for growing teams who need deeper insights.',
    button: 'Get Started',
    features: [
      'Up to 5 connected accounts',
      'Advanced analytics',
      'Automated reports',
      'Priority email support',
      'Up to 10 team members',
    ],
    dealStatus: true
  },
  {
    id: 3,
    title: 'Scale',
    icon: faBolt,
    pricePerM: 75,
    description: 'For estabished teams readi to maximize performance.',
    button: 'Contact Us',
    features: [
      'Unlimited connected accounts',
      'Custom dashboards',
      'Exportable reports',
      'Dedicated support',
      'Unlimited team members',
    ],
    dealStatus: false
  },
]