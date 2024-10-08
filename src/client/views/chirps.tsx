import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET } from "../services/fetchHelper";
import { chirps, users } from "../types";

const AllChirps = () => {
	const [chirps, setChirps] = useState<chirps[]>([]);
	const [users, setUsers] = useState<users[]>([]);

	useEffect(() => {
		GET("/api/chirps").then(setChirps);
	}, []);

	useEffect(() => {
		GET("/api/users").then(setUsers);
	}, []);

	const getHandle = (userId: number) => {
		const user = users.find((user) => user.id === userId);
		return user ? user.handle : "Unknown";
	};

	return (
		<div className="row justify-content-center">
			<div className="container row justify-content-center">
				{chirps.map((chirp) => (
					<div className="col-12 col-md-7" key={`chirp-card-${chirp.id}`}>
						<div className="card p-3 shadow-lg my-2 bg-white">
							<h5>
								<Link to={`/chirps/user/${chirp.user_id}`} className="text-decoration-none">
									@{getHandle(chirp.user_id)}
								</Link>
							</h5>
							<p>{chirp.body}</p>

							<p>Created {new Date(chirp.created_at).toLocaleString()}</p>

							<div className="card-footer">
								<Link to={`/chirps/${chirp.id}`} className="btn btn-info">
									Chirp Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllChirps;