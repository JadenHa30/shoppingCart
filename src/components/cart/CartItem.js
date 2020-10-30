import React, { Component } from 'react';
import * as message from './../../constant/Message';

class CartItem extends Component {
    
    render() { 
        const {item} = this.props;
        return ( 
            <tr>
                <th scope="row">
                    <img src={item.product.img} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                    <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                    </div>
                </td>
                <td>{this.total(item.product.price, item.quantity)}$</td>
                <td>
                    <button type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            data-original-title="Remove item"
                            onClick={()=>this.removeItem(item.product)}
                    >
                    X
                    </button>
                </td>
            </tr>
        );
    }

    total = (item, qty)=> {return item*qty};
    removeItem = (product)=>{
        const {removeItem, changeMessage} = this.props;
        removeItem(product);
        changeMessage(message.MSG_DELETE_CART_SUCCESS);
    }
}

export default CartItem;