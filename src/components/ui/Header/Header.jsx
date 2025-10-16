import styles from './header.module.css';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Lunera</div>
      <ul className={styles.links}>
        <li><a href="#featuresSection">Features</a></li>
        <li><a href="#pricingSection">Pricing</a></li>
        <li><a href="#faqSection">FAQ</a></li>
      </ul>
    </nav>
  )
}
