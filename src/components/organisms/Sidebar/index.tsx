import React from 'react'
import styles from './Sidebar.module.css'
import { BsFillHouseFill } from 'react-icons/bs'

const Sidebar = () => {
  
  return (
    <div className={styles.sidebar}>
      <p className={styles.sidebar_title}>Sidebar Menu Title</p>

      <ul>
        <li>
          <BsFillHouseFill />
          <a href="/">Dashboard</a>
        </li>
        <li>
          <BsFillHouseFill />
          <a href="/product-sales">Product Sales</a>
        </li>
        <li>
          <BsFillHouseFill />
          <a href="/storage-management">Storage Management</a>
        </li>
        <li>
          <BsFillHouseFill />
          <a href="/income">Income</a>
        </li>
        <li>
          <BsFillHouseFill />
          <a href="/">Human Resource System</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
