import React, { useState } from "react";
import "../assets/css/responiveAppbar.css";

const ResponsiveAppbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const handelChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		console.log(searchTerm);
	};
	return (
		<div className="menu">
			<div className="menu-item">Home</div>
			<div className="menu-item">Movies</div>
			<div className="menu-item">Food & Drinks</div>
			<div className="menu-item">Login</div>
			<div className="menu-item">Sign Up</div>
			<form className="d-flex" onSubmit={handelSubmit}>
				<input
					className="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={handelChange}
				/>
				<button className="btn btn-outline-success" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default ResponsiveAppbar;
