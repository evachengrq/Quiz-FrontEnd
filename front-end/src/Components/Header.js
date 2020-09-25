import React, { Component } from 'react';
import './Header.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Product from './Product';
import Orders from './Orders';
import AddProducts from './AddProducts';


class Header extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to = "/">商城</Link></li>
                        <li><Link to = "/orders">订单</Link></li>
                        <li><Link to = "/addProducts">添加商品</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path = "/" component = {Product} />
                    <Route exact path = "/orders" component = {Orders} />
                    <Route exact path = "addProducts" component = {AddProducts} />
                </Switch>
            </Router>
        )
    }
}

export default Header;