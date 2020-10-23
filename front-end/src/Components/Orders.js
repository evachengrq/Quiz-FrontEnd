import React, {Component} from 'react';

class Orders extends Component {
  state = {
    orders: [
      {orderId: 1602569407966, 
        products: [
          {productId: 1, name: '可乐', price: 4, amount: 2},
          {productId: 2, name: '雪碧', price: 4, amount: 1},
          {productId: 3, name: '苹果', price: 5, amount: 2}
        ],
        total: 22
      },
      {orderId: 1602569407967, 
        products: [
          {productId: 1, name: '香蕉', price: 4, amount: 3}
        ],
        total: 12
      }
    ]
  }

  arrangeOrdersInTable() {
    return this.state.orders.map(
      ({orderId, products: {productId, name, price, amount}, total}) => (
      <tr>
        <th>订单号：{orderId}</th>
        <td>{productId}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{amount}</td>
        <th>总价：{total}</th>
      </tr>
    
    )
    )
  }

  render() {
    return (
        <table>
          <thead>
            <th>#</th>
            <th>名称</th>
            <th>单价</th>
            <th>数量</th>
          </thead>
          <tbody>
            {this.arrangeOrdersInTable()}
          </tbody>
      </table>
    );
  }
}

export default Orders;