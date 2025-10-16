import { CardContainer } from '../../shared/Cards/CardContainer'
import { Label } from '../../shared/Label/Label'
import styles from './workFlow.module.css'
import img1 from './../../../assets/images/cards/card1.png'
import img3 from './../../../assets/images/cards/card3.png'
import img6 from './../../../assets/images/cards/card6.png'
import { faPlugCircleBolt, faClock, faChartLine } from '@fortawesome/free-solid-svg-icons'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { BaseCard } from '../../shared/Cards/BaseCard'

export const WorkFlow = () => {
  const containerRef = useRef(null);
  // let top = 6;
  // const animationFn = (elements) => {
  //   elements.forEach(el => {
  //     el.style.position = 'sticky';
  //     el.style.top = `${top}rem`;
  //     top += 1;
  //   })
  // };

  return (
    <div style={{ minHeight: '100vh' }} className={styles.container}>
      <div className={styles.header}>
       <div>
        <Label children={'How It Works'} />
         <h4 className="subtitle">From Setup to insight &mdash;&mdash; just three simple steps.</h4>
       </div>
      </div>
      <div ref={containerRef} className={styles.cards}>
        {
          cards.map((card) => ( 
            <BaseCard key={`card-${card.id}`} card={card}/>
          ))
        }
      </div>
    </div>
  )
}

const cards = [
  {
    id: 1,
    title: 'Connect Accounts',
    text: 'Securely link your bank and business tools in minutes',
    img: img1,
    icon: faPlugCircleBolt,
    position: 'vertical'
  },
  {
    id: 2,
    title: 'Schedule Tasks',
    text: 'Automate your workflow with intelligent scheduling',
    img: img6,
    icon: faClock,
    position: 'vertical'
  },
  {
    id: 3,
    title: 'Analyze Data',
    text: 'Get insights with powerful analytics dashboards',
    img: img3,
    icon: faChartLine,
    position: 'vertical'
  },
];
