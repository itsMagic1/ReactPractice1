import styles from './button.module.css'

export const Button = ({className, variant = 'primary', children, onCLick}) => {
  return (
    <button onCLick={onCLick} className={`${styles.base} ${styles[variant]} ${className}`}>      
      {children}
    </button>
  )
}
 