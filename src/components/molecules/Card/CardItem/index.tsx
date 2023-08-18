import React from 'react'
import styles from './CardItem.module.css'

const CardItem = () => {
  return (
    <div className={styles.cardItem}>
        <div className={styles.cardItem_wrapper}>
          <p className={styles.cardItem_title}>Product Sales</p>
          <p className={styles.cardItem_quantity}>100</p>
        </div>

        <div className={styles.cardItem_wrapper}>
          <p className={styles.cardItem_title}>Earnings</p>
          <p className={styles.cardItem_quantity}>Rp. 3.000.000</p>
        </div>

        <div className={styles.cardItem_wrapper}>
          <p className={styles.cardItem_title}>Inventory Alerts</p>
          <p className={styles.cardItem_quantity}>5 Products</p>
        </div>
      </div>
  )
}

export default CardItem
