import React, {Component} from "react";
import Product from "./Product";

import {storeProducts} from "../data"
import {ProductConsumer} from "../context/context";

class ProductList extends Component{
    state={
        products:storeProducts
    }
    render(){

        return(
        <React.Fragment>
            	<div className="container-fluid productBackground p-4">
					<div className="row pb-2 mb-5">
						<div className="col-12 text-center text-white">
							<p id="products" className="display-3 scrollspy">
								{" "}
								Our Products{" "}
							</p>
						</div>
					</div>
                      <ProductConsumer>
                        {value=>{return value.products.map((product)=>{

                            return (

                                 <Product key={product.id} product={product} />


                            );
                        })}}
                    </ProductConsumer>

            </div>
        </React.Fragment>
        );
    }
}

export default  ProductList;