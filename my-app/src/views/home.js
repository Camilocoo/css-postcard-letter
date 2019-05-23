import React from "react";
import { Carousel } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import {UzxJumbo} from "../components/UzxJumbo";

export class Home extends React.Component {
	render() {
		return (

            <div className="bodyBackground">
                <UzxJumbo/>
            </div>
		);
	}
}