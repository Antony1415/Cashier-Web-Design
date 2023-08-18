import CardItem from '@/components/molecules/Card/CardItem'
import styles from './page.module.css'
import CardGraphic from '@/components/molecules/Card/CardGraphic'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <CardItem />

      <CardGraphic />
    </div>
  )
}
