import React from "react";
import appStore from "../assets/app-store-badge.png";
import '../assets/css/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-12">
						<h5 className="footer__title">About Us</h5>
						<p className="footer__text">
							Seat Stream Cinemas is the Middle East's largest cinema chain, operating
							over 200 cinemas across the region with a commitment to delivering
							the best movie experiences for everyone.
						</p>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<h5 className="footer__title">Help & Support</h5>
						<ul className="footer__list">
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									About Us
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Refunds
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									What's On
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									FAQ
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<h5 className="footer__title">Explore Our Site</h5>
						<ul className="footer__list">
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Contact Us
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Terms And Conditions
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Food Menus
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Careers
								</a>
							</li>
							<li className="footer__list-item">
								<a href="/" className="footer__link">
									Terms of Use
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12">
						<h5 className="footer__title">Stay In Touch</h5>
						<ul className="footer__social">
							<li className="footer__social-item">
								<a href="/" className="footer__social-link">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li className="footer__social-item">
								<a href="/" className="footer__social-link">
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li className="footer__social-item">
								<a href="/" className="footer__social-link">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
							<li className="footer__social-item">
								<a href="/" className="footer__social-link">
									<FontAwesomeIcon className="fa-youtube"></FontAwesomeIcon>
								</a>
							</li>
						</ul>
						<a href="/" className="footer__app-store">
							<img
								src={appStore} // Replace with your App Store badge image
								alt="App Store Download"
								className="footer__app-store-img"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
