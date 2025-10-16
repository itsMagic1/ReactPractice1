import styles from './baseCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BaseCard = ({ card: {title, text, img, position, icon = null} }) => {
  console.log(title, text, img);
  return (
    <div className={`${styles.card} ${styles[position]}`}>
      <div className={styles.content}>
        {
          icon !== null &&
            <div className={styles.icon}>
              <FontAwesomeIcon icon={icon} size='2x'/>
            </div>
        }
        <h4 className={styles.title}>{ title }</h4>
        <p className={styles.text}>{ text }</p>
      </div>
      <div className={styles.img}>
        <img src={img} />
      </div>
    </div>
  )
}
