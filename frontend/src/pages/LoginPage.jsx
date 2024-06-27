import { useState } from "react";
import React from "react";
import "../assets/css/LoginPage.css";
import Appbar from "../components/Appbar";
import Footer from "./../components/Footer";

const LoginPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});

	const API_PATH = "http://localhost:8000/auth.php";


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		
		await fetch(API_PATH, {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Received data:", data); // Check the data here
			})
			.catch((error) => console.error("Error sending data:", error));
	};

	return (
		<>
			<Appbar />
			<div className="login-container">
				<form onSubmit={handleFormSubmit} className="my-form">
					<div className="form-group">
						<label>
							Username or Email:
							<input
								type="text"
								name="name"
								className="inputfield"
								value={formData.name}
								onChange={handleChange}
								placeholder="Username"
							/>
						</label>
						<label>
							Password:
							<input
								type="password"
								name="password"
								className="inputfield"
								value={formData.password}
								onChange={handleChange}
								placeholder="Password"
							/>
						</label>
						<br />
						<button type="submit" className="submit-button">
							Login
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default LoginPage;
