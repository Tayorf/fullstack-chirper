import React,{useEffect, useState} from "react";
import type { chirps} from "../types";
import { useParams } from "react-router-dom";


const chirpdetails=()=> {
    const { id } =useParams();
    const {chirp,setChirp} =useState<chirp>()

    useEffect(()=>{
        fetch('http://localhost:3000/api/chirps/${id}')
        .then(res =>res.json())
        .then(data=>setChirp(data));
    },[])

    if (!chirp) return<></>;

    return(
        <div>
            <h1>Chirp #{id} details!</h1>
            <div className='row justify-content-center'>
                    <div key={'chirps-card-${chirps.id}'}className='col-12 col-md- my-2'>
                        <div className="card shadow-lg">
                    </div>
                            <div className="card title">chirps #{chirps.id}</div>
                            
                            <div className="card-body">
                           
                            <p>Created at {new Date(chirp.created_at).toLocaleString()}</p>
                             
                            </div>
                    </div>
            </div>
        </div>
    );
};
export default chirpdetails