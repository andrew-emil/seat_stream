import React, { useState } from "react";
import "../assets/css/signup.css";
import Appbar from "../components/Appbar";
import Footer from "./../components/Footer";

const SignupPage = () => {
	const [countryCode, setCountryCode] = useState("+20");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});
	

	const API_PATH = "http://localhost:8000/auth.php";

	const handleCountryCodeChange = (event) => {
		setCountryCode(event.target.value);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const completeFormData = {
			...formData,
			phone: countryCode + formData.phone,
		};
		await fetch(API_PATH, {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(completeFormData),
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
			<div className="signup-container">
				<form onSubmit={handleFormSubmit} className="my-form">
					<div className="form-group">
						<label>
							Username:
							<input
								type="text"
								name="name"
								className="inputfield"
								value={formData.name}
								onChange={handleChange}
								placeholder="Username"
							/>
						</label>
						<br />
						<label>
							Email:
							<input
								type="email"
								name="email"
								className="inputfield"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
							/>
						</label>
						<br />
						<div className="phone-number-input">
							<label>Phone Number:</label>
							<select value={countryCode} onChange={handleCountryCodeChange}>
								<option value="+20">Egypt (+20)</option>
								<option value="+1">USA (+1)</option>
								<option value="+44">UK (+44)</option>
							</select>
							<input
								type="tel"
								placeholder="Phone Number"
								name="phone"
								className="inputfield"
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
						<br />
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
							Create Account
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default SignupPage;
