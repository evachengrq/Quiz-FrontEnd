import React, { Component } from 'react';
import './Product.css'
import pic from '../logo.svg';

class Product extends Component {
    render() {
        return (
            <div className = "product">
                <img src = {pic}></img>
                <p className = "productName">可乐1</p>
                <p className = "productPrice">单价：一元/瓶</p>
                <button> + </button>
            </div>
        )
    }
}

export default Product;