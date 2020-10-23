import React, { Component } from 'react';
import Product from './Product';
import './Products.css'

class Products extends Component {
    state = {
        products: [
            {id: 1, name: '可乐1', price: 1},
            {id: 2, name: '可乐2', price: 1},
            {id: 3, name: '可乐3', price: 1},
            {id: 4, name: '可乐4', price: 1},
            {id: 5, name: '可乐5', price: 1},
            {id: 6, name: '可乐6', price: 1}
        ]
    }
    render() {
        return (
            <section className = "all-products">
                <section className="products">
                {this.state.products.map((item) => (
                <Product key={item.id} name={item.name} price={item.price} />
                ))}
                </section>
            </section>
        )
    }
}

export default Products;