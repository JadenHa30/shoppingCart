import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/cart/Cart';
import CartItem from '../components/cart/CartItem';
import CartResult from '../components/cart/CartResult';
import * as Msg from '../constant/Message';


class CartContainer extends Component {
    render() { 
        const {cart} = this.props;
        return (
            <Cart> 
                {this.showCartItem(cart)}
                {this.totalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart)=>{
        let result = Msg.MSG_CART_EMPTY;
        if(cart.length > 0){
            result = cart.map((item, index)=>{
                return (
                    <CartItem key={index} item={item}></CartItem>
                );
            });
        }
        return result;
    }
    totalAmount = (cart)=>{
        let result = "";
        if(cart.length > 0){
            result = <CartResult cart={cart}></CartResult>
        }
        return result;
    }
}
 
CartContainer.propTypes = {
    cart : PropTypes.arrayOf( 
        PropTypes.shape({
            product: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                img : PropTypes.string.isRequired,
                des : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired 
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);