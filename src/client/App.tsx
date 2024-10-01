import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/home";
import AllChirps from "./views/chirps";
import ChirpDetails from "./views/chirpsdetails";
import CreateChirp from "./views/createchirp";
import EditChirp from "./views/editchirps";
import ErrorPage from "./views/error";
import AdminPanel from "./views/admin";
import UserChirps from "./views/user";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chirps" element={<AllChirps />} />
					<Route path="/chirps/new" element={<CreateChirp />} />
					<Route path="/chirps/:id" element={<ChirpDetails />} />
					<Route path="/chirps/:id/edit" element={<EditChirp />} />
					<Route path="/chirps/admin" element={<AdminPanel />} />
					<Route path="/chirps/user/:user_id" element={<UserChirps />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
