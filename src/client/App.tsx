import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Navbar from './components/Navbar';
import Home from './views/home';
import AllChirps from './views/chirps';
import ChirpDetails from './views/chirpsdetails';
import ErrorPage from './views/error';
import CreateChirps from './views/createchirp';
import EditChirps from './views/editchirps';


 const App = () => {
	return <BrowserRouter>
	<Navbar />

	<Routes>
		<Route path ='/'element= {<Home />}/>
		<Route path ='/chirps'element = {<AllChirps />}/>
	<Route path ='/chirps/create'element= {<CreateChirps />}/>
		<Route path ='/chirps/:id'element= {<ChirpDetails />}/>
		<Route path ='/chirps/:id/edit'element= {<EditChirps />}/>
		<Route path="*" element={<ErrorPage />} />
	</Routes>
	</BrowserRouter>
 };

 export default App;
