import styles from './label.module.css'
export const Label = ({ children }) => {
  return (
    <div className={styles.label}>
      {children}
    </div>
  )
}
