import React,{useEffect, useState} from "react";
import type { chirps } from "../types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const EditChirps=()=> {
    const { id } =useParams();
    const [chirps,setChirps] =useState<chirps>();

    useEffect(()=>{
        fetch('http://localhost:3000/api/chirps/${id}')
        .then((res) =>res.json())
        .then((data)=>setChirps(data));
    },[id]);

    if (!chirps) {
		return <div>Loading...</div>;
    };

    return (
		<div className="row justify-content-center">
            <h1 className="text-center text-red">Editing Chirp #{id}</h1>
			<div className="col-12 col-md-7">
				<div className="card p-3 my-2 shadow-lg bg-white">
					<p className="fs-5">{chirps.body}</p>

					<p>Created {new Date(chirps.created_at).toLocaleString()}</p>

					<div className="card-footer">
						<p>Chirped from {chirps.location ? chirps.location : "Wouldn't you like to know."}</p>
						<Link to={`/chirps/${chirps.id}/edit`} className="btn btn-info m-1">
							Edit Chirp
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default EditChirps;