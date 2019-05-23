import React from "react";

export class UzxJumbo extends React.Component {
	render() {
		return (
        <div>
        <div className="jumbotron jumbotron-fluid  homeJumboImage bg-white d-none d-lg-block py-3 mb-0">
                        <div className="row m-0">
                            <div className="col-3">
                                <img
                                    className="img-fluid"
                                    src="https://ucarecdn.com/0eaee51a-7f9d-44e9-acc8-5b48cc664761/-/resize/350x/"
                                />
                            </div>
                            <div className="col d-flex justify-content-start align-items-end mb-5 ml-5 p-0">
                                <div className="text-center ">
                                    <p className="display-3 homeFont">
                                        UNLEASH THE POWER
                                    </p>
                                    <button
                                        type="button"
                                        className="btn btn-info btn-sm">
                                        Shop now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*sm jumbo*/}
                    <div className="jumbotron jumbotron-fluid  text-center homeJumboImageSmall  bg-white  p-0 mb-0 d-lg-none d-xl-none">
                        <img
                            className=" img-fluid "
                            src="https://ucarecdn.com/0eaee51a-7f9d-44e9-acc8-5b48cc664761/-/resize/250x/"
                        />
                    </div>
        </div>
		);
	}
}

export default UzxJumbo;