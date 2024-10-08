import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<header className="page-header header container-fluid">
			<div className="home-container">
				<h1 className="text-center fw-bold m-2">Welcome to Chirper!</h1>
				<h4 className="text-center mb-2">Its a Chirp eat Chirp world</h4>
				<div className="text-center">
					<Link to={"/chirps/new"} className="btn btn-success mt-3">
						View Now!
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Home;