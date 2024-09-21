import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { chirps } from "../types";

const CreateChirps = () => {
	const [body, setBody] = useState("");
	const [location, setLocation] = useState("");
	const nav = useNavigate();

return (
    <div className="row justify-content-center">
        <div className="col-12 col-md-9">
            <h1 className="text-center m-5 fw-bold">Chirp It Up!</h1>
            <div className="card bg-white p-3 shadow-lg m-2">
                <label className="m-2 fw-bold">Chirp text:</label>
                <input value={body} onChange={(e) => setBody(e.target.value)} type="text" className="form-control bg-white" placeholder="What are we thinking about?" />
                <label className="m-2 fw-bold">Location:</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control bg-white" />
                <div className="mt-3">
                    <button onClick={handleAddChirp} className="btn btn-success mb-2">
                        Chirp It!
                    </button>
                </div>
            </div>
        </div>
    </div>
)};


export default CreateChirps;