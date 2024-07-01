import React, { useEffect, useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveAppbar from "./ResponsiveAppbar";

import "../assets/css/appbar.css";

const Appbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);
	const isMaxWidth = useMediaQuery("(max-width: 991px)");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(searchTerm);
	};

	const handleButtonClick = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		if (!isMaxWidth && menuOpen) {
			setMenuOpen(false);
		}
	}, [isMaxWidth, menuOpen]);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					onClick={handleButtonClick}
					aria-controls="navbarSupportedContent"
					aria-expanded={menuOpen}
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
							<a className="nav-link" href="/">
								Food & Drinks
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Sign Up
							</a>
						</li>
					</ul>
					<form className="d-flex" onSubmit={handleSubmit}>
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={handleChange}
							value={searchTerm}
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

export default React.memo(Appbar);
