import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './faq.module.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Faq = ({ question: { question, answer, id }, setToggle, toggle}) => {

  const onClick = () => {
    setToggle(toggle === id ? null : id)
  }

  return (
    <div onClick={() => onClick()} className={`${styles.question } ${toggle === id ? styles.active : ''}`}>
      <div className={styles.toggle}>
        <div>{ question }</div>   
        <span>
          <FontAwesomeIcon icon={faXmark}/>
        </span>
      </div>
      <div className={styles.answer}>{ answer }</div>
    </div>
  )
}
