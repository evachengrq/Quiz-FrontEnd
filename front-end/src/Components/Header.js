import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#">商城</a></li>
                    <li><a href="#">订单</a></li>
                    <li><a href="#">添加商品</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header;