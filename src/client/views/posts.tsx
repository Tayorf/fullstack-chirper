import React,{useEffect, useState} from "react";
import type { chirps } from "../types";

const chirps =()=>{
    const [chirps,setchirps]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/api/chirps')
        .then(res =>res.json())
        .then(data=>setchirps(data));
    },[])
    return(
        <div>
            <h1>These fresh new chirps</h1>
            <div className='row'>
                {chirps.map((chirps)=>(
                    <div key={'chirps-card-${chirps.id}'}className='col-12 col-md-4 my-2'>
                        <div className="card shadow-lg">
                    </div>
                            <div className="card title">
                            chirps #{chirps.id}
                            <div className="card-body">
                            </div>
                            <p>{chirps.body}</p>
                            </div>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default chirps