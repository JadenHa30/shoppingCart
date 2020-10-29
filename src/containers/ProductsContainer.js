import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/products/Products';
import Product from '../components/products/Product';
import PropTypes from 'prop-types';

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
        if(products.length>0){
            result = products.map((product, index)=>{
                    return <Product key={index} product={product}/>
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
    ).isRequired //isRequired means we must have products
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);