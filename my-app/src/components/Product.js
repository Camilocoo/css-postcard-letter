import React, {Component} from "react";
import {ProductConsumer} from "../context/context";
import {Link} from "react-router-dom";
import '../index.css';

import PropTypes from 'prop-types';

export default class Product extends Component{
    render(){
        const {id,title,img,price,inCart,info}=this.props.product;
        return(
         <div>
            <div className="card mb-3 bg-transparent ">
            <ProductConsumer>
                    {(value)=>(
                    <div onClick={()=>value.handleDetail(id)} >
                    <div className="row no-gutters">

                        <div className="col-md-2">
                            <img src={img} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-10 p-0 p-md-4">
                            <div className="card-body">
                                <h1 className="card-title text-secondary">{title}</h1>
                                <p className="card-text text-light">{info}</p>
                                <div className="row">
                                    <div className="col-12">
                                        <Link className="mr-2 btn btn-info"  to="/details">
                                        More info
                                        </Link>
                                         <button onClick={()=>{value.addToCart(id);value.openModal(id);}} className="btn btn-info"  disabled={inCart?true:false}> {inCart?<p className="text-capitalize mb-0" disabled>in cart</p>:(<i class="fas fa-shopping-cart"/>)}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}

                    </ProductConsumer>
            </div>
        </div>
        );
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}




{/*<div className ="co-9 mx-auto col-md-6 col-lg-3 my-3 ">
                <div className="card bg-transparent">
                <ProductConsumer>
                    {(value)=>(
                    <div onClick={()=>value.handleDetail(id)} className="p-5" >

                            <img  src={img} alt="product" className="card-img-top"/>

                        <button onClick={()=>{value.addToCart(id);value.openModal(id);}} className="btn btn-info"  disabled={inCart?true:false}> {inCart?<p className="text-capitalize mb-0" disabled>in cart</p>:(<i class="fas fa-shopping-cart"/>)}</button>
                        <Link className="ml-5 btn btn-info"  to="/details">
                        More info
                        </Link>
                    </div>
                    )}

                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center text-light mb-0">
                            {title}
                        </p>
                        <h5 className ="font-italic mb-0"><span className="mr-1">${price}</span> </h5>
                    </div>
                </div>
            </div>*/}