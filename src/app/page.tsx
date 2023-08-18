import styles from './page.module.css'
import CardItem from '@/components/Card/CardItem'
import CardGraphic from '@/components/Card/CardGraphic'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <CardItem />

      <CardGraphic />
    </div>
  )
}
