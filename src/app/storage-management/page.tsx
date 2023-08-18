"use client"

import React, { useEffect, useState } from 'react'
import styles from './StorageManagement.module.css'
import { BsSearch, BsPlusSquare } from 'react-icons/bs'
import StorageForm from '@/components/organisms/StorageForm'

type Product = {
  id: string;
  productName: string;
  productPrice: string;
  productStock: string;
}

const page = () => {
  const [productApi, setProductApi] = useState<Product[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/product').then((res) => res.json()).then((data) => setProductApi(data))
  }, [])

  const showFormHandler = (e: any) => {
      const box = document.getElementById('storage-form')
      
      if (e.target === box) {
          setShowCreateForm(false)
      }
  }

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 35px', marginTop: '40px' }}>
        <h1 style={{ margin: 0 }}>Header</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BsSearch />
            <div style={{ width: '200px', borderRadius: 10, border: '1px solid black', height: '25px' }}></div>
          </div>

          <div onClick={() => setShowCreateForm(true)} className='cursor-pointer'>
            <BsPlusSquare />
          </div>
        </div>
      </div>

      <div style={{ padding: '0 25px' }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td style={{ width: '25px' }}>Id</td>
              <td style={{ width: '400px' }}>Name</td>
              <td style={{ width: '175px' }}>Price</td>
              <td style={{ width: '175px' }}>Stock</td>
            </tr>
          </thead>
          <tbody>
            {productApi.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                  <td>{item.productStock}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {showCreateForm && (
        <div id='storage-form' className={`box ${styles.form_wrapper}`} onClick={(e) => showFormHandler(e)}>
          <StorageForm />
        </div>
      )}

    </div>
  )
}

export default page
