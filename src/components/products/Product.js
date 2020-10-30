import React, { Component } from 'react';
import * as Message from './../../constant/Message';
class Product extends Component {
    render() { 
        const {product} = this.props;
        return ( 
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1" style={{height: "300px"}}>
                        <img src={product.img} className="img-fluid" alt={product.name} style={{height: "100%"}} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                            <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.des}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top" 
                                data-original-title="Add to Cart"
                                onClick={()=> this.addToCart(product) }
                                >
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
         );
    }

    addToCart = product =>{
        this.props.addToCart(product);
        this.props.changeMessage(Message.MSG_ADD_CART_SUCCESS);
    }

    showRating(rating){
        let result =  [];
        for(let i = 1; i<=rating; i++){
            result.push(<i key={i} className="fa fa-star" />);
        }
        for(let i = 1; i<= (5-rating); i++){
            result.push(<i key={i + rating} className="fa fa-star-o" />);
        }
        return result;
    }
}
 
export default Product;