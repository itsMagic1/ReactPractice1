import { useEffect, useRef } from "react"
import { BaseCard } from "./BaseCard"
import styles from './CardContainer.module.css'

export const CardContainer = ({ cards, animationFn, cols = null, rows = 'auto'}) => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    if (animationFn) {
      const cardElements = containerRef.current.querySelectorAll(`.${styles.cards} > *`)
      animationFn(cardElements)
    }
  }, [animationFn])

  return (
    <div style={{gridTemplateColumns: cols !== null && cols, gridTemplateRows: rows !== null && rows}} ref={containerRef} className={styles.cards}>
      {
        cards.map((card) => ( 
          <BaseCard key={`card-${card.id}`} card={card}/>
        ))
      }
    </div>
  )
}
