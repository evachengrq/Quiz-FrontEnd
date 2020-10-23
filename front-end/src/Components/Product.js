import React, { Component } from 'react';
import coke from '../Utils/coke.png';
import './Product.css'

class Product extends Component {
    render() {
        const {name, price} = this.props;
        return (
            <section className = "product">
                <img src = {coke} />
                <p className = "productName">{name}</p>
                <p className = "productPrice">{price}元/瓶</p>
                <button> + </button>
            </section>
        );
    
    }
}

export default Product;