import React,{useEffect, useState} from "react";
import type { chirps} from "../types";
import { Link } from "react-router-dom";


const AllChirps =()=>{
    const [chirps, setChirps] = useState<chirps[]>([]);

    useEffect(()=>{
        fetch('http://localhost:3000/api/chirps/${id}')
        .then((res) =>res.json())
        .then((data)=>setChirps(data));
    },[])

    return(
        <div>
            <h1>Look at all these chirps!</h1>
            <div className='row'>
                {chirps.map((chirps)=>(
                    <div key={'chirps-card-${chirps.id}'}className=' col-12 col-md-4 my-2'>
                        <div className="card shadow-lg">
                    </div>
                            <div className="card title"> chirps #{chirps.id} </div>
                           
                            <div className="card-body">
                            <p>{chirps.body}</p>
                           <Link className ='btn btn-primary' to={'/chirps/$(chirps.id)'}>Details</Link>
                            </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AllChirps;