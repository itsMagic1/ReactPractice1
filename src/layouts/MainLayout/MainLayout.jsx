import { Outlet } from "react-router-dom"
import { Header } from "../../components/ui/Header/Header"
import styles from './mainLayout.module.css'

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}
