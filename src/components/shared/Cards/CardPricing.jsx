import { Label } from '../Label/Label'
import styles from './cardPricing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './../../shared/button/Button'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export const CardPricing = ({ card }) => {

  const { title, icon, pricePerM, description, button, features, dealStatus = false } = card;
  const color = dealStatus ? '70, 134, 254' : '0,0,0'
  console.log(color);
  return (
    <div className={`${styles.card} ${dealStatus && styles.bestDeal}`} style={{'--color': color}}>
      {
        dealStatus && <div className={styles.bg}>Best Deal</div>
      }
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={icon} size='lg'/>
          </div>
          <p>{title}</p>
        </div>
        <p className={styles.price}>
          ${pricePerM} <span>/mo</span>
        </p>
        <p className={styles.description}>{description}</p>
        <Button children={button} variant={dealStatus ? 'primary' : 'secondary'}/>
      </div>

      <ul className={styles.features}>
        {
          features.map((feature, i) => (
            <li key={`feature-${i}`}>&#10003; {feature}</li>
          ))
        }
      </ul>
    </div>
  )
}
