import React, {Component} from 'react';

class Orders extends Component {
  render() {
    return (
        <table>
          <td>名字</td>
          <td>单价</td>
          <td>数量</td>
          <td>单位</td>
          <td>操作</td>
      </table>
    );
  }
}

export default Orders;