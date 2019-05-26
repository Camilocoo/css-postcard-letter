import React from "react";
import { Carousel } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import {UzxJumbo} from "../components/UzxJumbo";
import {AboutUs} from "../components/AboutUs";
import ProductList from "../components/ProductList"

export class Home extends React.Component {
	render() {
		return (

            <div className="bodyBackground">
                <UzxJumbo/>
                <AboutUs/>
                <ProductList/>



            </div>
		);
	}
}