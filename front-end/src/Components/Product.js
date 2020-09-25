import React, { Component } from 'react';
import pic from '.../logo.svg'

class Product extends Component {
    state = {
        products : [ 
            {
                product: '可乐1',
                price: '1元/瓶'
            },
            {
                product: '可乐2',
                price: '1元/瓶'
            },
            {
                product: '可乐3',
                price: '1元/瓶'
            },
            {
                product: '可乐4',
                price: '1元/瓶'
            },
            {
                product: '可乐5',
                price: '1元/瓶'
            },
            {
                product: '可乐6',
                price: '1元/瓶'
            },
        ],
        count: 0,
    }

    render() {
        return (
            <div>
                <img src = {pic} />
                <strong></strong>
            </div>
        )

    }
}
