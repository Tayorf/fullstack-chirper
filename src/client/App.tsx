import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Navbar from './components/Navbar';

 const App = () => {
	return <BrowserRouter>
	<Navbar />

	<Routes>
		<Route path ='/'element= {<h1>Home!</h1>}/>
		<Route path ='/chirps'element= {<h1>Todays Posts</h1>}/>
		<Route path ='/chirps/new'element= {<h1>Create a Post</h1>}/>
		<Route path ='/chirps/:id'element= {<h1> Post details</h1>}/>
		<Route path ='/chirps/:id/edit'element= {<h1>Edit or delete post</h1>}/>
	</Routes>
	</BrowserRouter>
 };

 export default App;