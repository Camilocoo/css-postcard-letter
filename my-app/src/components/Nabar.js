import React from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	FormControl,
	Button,
	Form
} from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

 class Nabar extends React.Component {
	render() {
		return (
			<div>
				<div className="d-none d-lg-block">
					{/*big size navbar*/}
					<nav className="navbar text-white navbar-expand-sm navbar-dark bg-dark py-0 gradient">
						<div className="container-fluid">
							<div className="row w-100 p-0">
								<div className="col-4 position-relative">
									<div
										className="collapse navbar-collapse d-flex justify-content-start position-absolute pt-2"
										id="navbarNavAltMarkup">
										<div className="navbar-nav">
											<Link to="/" className="nav-link">
												<a
													className="nav-item nav-link  "
													href="./home.html">
													Home
												</a>
											</Link>
											<Link
												to="/learning-tools"
												className="nav-link">
												<a className="nav-item nav-link  ">
													Distributors
												</a>
											</Link>
											<Link smooth to="/#aboutUs">
												<p className="nav-item nav-link pt-3 ">
													About Us
												</p>
											</Link>
										</div>
									</div>
								</div>
								<div className="col d-flex justify-content-center">
									<a className="navbar-brand" href="#">
										<Link to="/" className="nav-link py-0">
											<img
												src="https://ucarecdn.com/e01b4be4-18fd-4805-8707-5e505a564cbb/-/resize/40x/"
												className="img-fluid"
												alt="Responsive image"
											/>
										</Link>
									</a>
								</div>
								<div className="col-4 ">
									<div
										className="collapse navbar-collapse d-flex justify-content-end pt-2"
										id="navbarNavAltMarkup">
										<div className="navbar-nav">
											<Link smooth to="/#products">
												<a className="nav-item nav-link scrollspy pt-3">
													Products
												</a>
											</Link>
											<Link
												to="https://student.breatheco.de/login"
												className="nav-link">
												<a
													className="nav-item nav-link"
													href="#">
													Testimonies
												</a>
											</Link>
											<Link
												to="https://student.breatheco.de/login"
												className="nav-link">
												<a
													className="nav-item nav-link"
													href="#">
													Mail us
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				{/*small size nav*/}
				<div className="d-lg-none">
					<Navbar variant="dark" className="gradient  " expand="lg">
						<Navbar.Brand
							href="#home"
							className="d-flex align-self-center">
							<img
								src="https://ucarecdn.com/e01b4be4-18fd-4805-8707-5e505a564cbb/-/resize/40x/"
								className="img-fluid"
								alt="Responsive image"
							/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto text-center">
								<Nav.Link href="#">Home</Nav.Link>
								<Link smooth to="/#aboutUs">
									<Nav.Link>About Us</Nav.Link>
								</Link>
								<Link smooth to="/#products">
									<Nav.Link href="#">Products</Nav.Link>
								</Link>
								<Nav.Link href="#">Testimonies</Nav.Link>
								<Nav.Link href="#">Distributors</Nav.Link>
								<Nav.Link href="#">Mail Us</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		);
	}
}
export default Nabar