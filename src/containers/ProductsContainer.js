import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/products/Products';
import Product from '../components/products/Product';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from '../actions/index'

class ProductsContainer extends Component {
    render() { 
        const { products } = this.props;

        return ( 
            <Products> 
                {this.showProducts(products)}
            </Products>
         );
    }

    showProducts(products){
        let result = "";
        const {addToCart, changeMessage} = this.props;
        if(products.length > 0){
            result = products.map((product, index)=>{
                    return <Product key={index} 
                                    product={product} 
                                    addToCart={addToCart}
                                    changeMessage = {changeMessage}
                                    />
            });
        }
        return result;
    }
}
 
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf( //arrayOf means products is array
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            img : PropTypes.string.isRequired,
            des : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired, //isRequired means we must have products
    changeMessage: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: product => {
            dispatch(actAddToCart(product, 1));
        },
        changeMessage: message =>{
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);