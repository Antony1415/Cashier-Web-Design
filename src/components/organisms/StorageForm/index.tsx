import React, { useState } from 'react'
import styles from './StorageForm.module.css'

const StorageForm = () => {
    const [storageRequest, setStorageRequest] = useState({
        productName: '',
        productPrice: '',
        productStock: ''
    })

    const submitFormHandler = () => {
        fetch('http://localhost:8000/product', {
            method: 'Post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(storageRequest)
        }).then(res => res.json()).then(data => console.log("dataPost", data))
    }

    const onChangeHandler = (event: any, type: string) => {
        switch(type) {
            case 'productName':
                return setStorageRequest((prevData) => {
                    return {
                        productName: event.target.value,
                        productPrice: prevData.productPrice,
                        productStock: prevData.productStock
                    }
                })

            case 'productPrice':
                return setStorageRequest((prevData) => {
                    return {
                        productName: prevData.productName,
                        productPrice: event.target.value,
                        productStock: prevData.productStock
                    }
                })
                
            case 'productStock':
                return setStorageRequest((prevData) => {
                    return {
                        productName: prevData.productName,
                        productPrice: prevData.productPrice,
                        productStock: event.target.value
                    }
                })

        }
    }

    return (
        <div className={styles.form_wrapper}>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="product_name">Product Name</label>
                    <br />
                    <input style={{ border: '1px solid black' }} id='product_name' onChange={(e) => onChangeHandler(e, 'productName')}/>
                </div>
                <br />

                <div>
                    <label htmlFor="product_price">Product Price</label>
                    <br />
                    <input style={{ border: '1px solid black' }} id='product_price' onChange={(e) => onChangeHandler(e, 'productPrice')}/>
                </div>
                <br />

                <div>
                    <label htmlFor="product_stock">Product Stock</label>
                    <br />
                    <input style={{ border: '1px solid black' }} id='product_stock' onChange={(e) => onChangeHandler(e, 'productStock')}/>
                </div>
                <br />
                
                <center>
                    <button type='submit' style={{backgroundColor: 'blue', padding: '10px 25px', borderRadius: '5px'}}>Submit</button>
                </center>
            </form>
        </div>
    )
}

export default StorageForm
