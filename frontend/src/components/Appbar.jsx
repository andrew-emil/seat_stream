import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../assets/css/appbar.css";
import ResponsiveAppbar from "./ResponsiveAppbar";

const Appbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [menuOpen, setMenuopen] = useState(false);
	const isMaxWidth = useMediaQuery("(max-width: 991px)");

	const handelChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		console.log(searchTerm);
	};

	const handleButtonClick = () => {
		setMenuopen(!menuOpen);
	};

	useEffect(() => {
		if(!isMaxWidth){
			setMenuopen(false)
		}
	}, [isMaxWidth])

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="/navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					onClick={handleButtonClick}
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				{menuOpen && isMaxWidth && <ResponsiveAppbar />}
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Movies
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/" aria-disabled="false">
								Food & Drinks
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/" aria-disabled="false">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/" aria-disabled="false">
								Sign Up
							</a>
						</li>
					</ul>
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
			</div>
		</nav>
	);
};

export default Appbar;
