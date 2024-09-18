import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Navbar from './components/Navbar';
import Home from './views/home';

 const App = () => {
	return <BrowserRouter>
	<Navbar />

	<Routes>
		<Route path ='/'element= {<Home />}/>
		<Route path ='/chirps'element= {<chirps />}/>
	<Route path ='/chirps/new'element= {<h1>Create a Post</h1>}/>
		<Route path ='/chirps/:id'element= {<h1> Post details</h1>}/>
		<Route path ='/chirps/:id/edit'element= {<h1>Edit or delete post</h1>}/>
	</Routes>
	</BrowserRouter>
 };

 export default App;