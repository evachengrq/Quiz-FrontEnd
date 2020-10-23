import React, {Component} from 'react';
import './AddProducts.css'

class AddProducts extends Component {
  render() {
    return (
      <section>
        <h1>添加商品</h1>
        <form>
          <label>名称：</label>
          <input className="input" placeholder="名称"/>
        </form>
        <form>
          <label>价格：</label>
          <input className="input" placeholder="价格"/>
        </form>
        <form>
          <label>单位：</label>
          <input className="input" placeholder="单位"/>
        </form>
        <form>
          <label>图片：</label>
          <input className="input" placeholder="图片"/>
        </form>
        <button className="submit">提交</button>
      </section>
    );
  }
}

export default AddProducts;