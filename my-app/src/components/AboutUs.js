import React from "react";
import { Carousel } from "react-bootstrap";

export class AboutUs extends React.Component {
	render() {
		return (
        <div className="bodyBackground">
        <div className="jumbotron-fluid text-white backgorundBlack text-center text-md-left mb-0 p-3 ">
					<div className="row m-0">
						<div className="col-12 col-sm-12 col-lg-7">
							<div className="p-sm-1 p-lg-4">
								<p className="h1 weAre text-secondary">
									We Are ...
								</p>
								<p className="lead ">
									Ultra ZX, a Colombian based company driven
									to help you reach your true potential, with
									our natural products created out from the
									top quality ingredients, imported from
									around the world, with the goal to help you
									improve your focus and maximize your
									weight-loss.
								</p>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-lg-5">
							<Carousel controls={false} indicators={false}>
								<Carousel.Item>
									<img
										className="d-block mx-auto"
										src="https://ucarecdn.com/1d6c6644-cdf3-4b59-ac11-4c5f0b3d41c2/-/resize/400x/"
										alt="First slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block mx-auto"
										src="https://ucarecdn.com/f0a829ef-5e8e-4b40-96a5-34e913db3c52/-/resize/400x/"
										alt="Third slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block mx-auto"
										src="https://ucarecdn.com/3f44c9fb-d6a5-45b2-bd76-2c6f0e1ebac2/-/resize/400x/"
										alt="Third slide"
									/>
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
				</div>
        </div>
		);
	}
}

export default AboutUs;