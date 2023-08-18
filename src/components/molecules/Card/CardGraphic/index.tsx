"use client"

import React from 'react'
import styles from './CardGraphic.module.css'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, BarElement, LinearScale} from 'chart.js'

ChartJS.register(CategoryScale, BarElement, LinearScale);

const CardGraphic = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: ['red', 'blue', 'aqua', 'salmon', 'yellow', 'gold', 'gray'],
          }
        ],
      };

    return (
        <div className={styles.container}>
            <div style={{display: 'flex', backgroundColor: 'white'}}>
                <Bar
                    data={data}
                    width={400}
                    height={200}
                />
            </div>
        </div>
    )
}

export default CardGraphic
