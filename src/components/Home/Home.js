import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../Assets/home/img1.svg";
import img2 from "../../Assets/home/img2.svg";
import img3 from "../../Assets/home/img3.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

window.onload = function () {
	let slides = document.getElementsByClassName("carousel");

	function addActive(slide) {
		slide.classList.add("active");
	}

	function removeActive(slide) {
		slide.classList.remove("active");
	}

	addActive(slides[0]);
	setInterval(function () {
		for (let i = 0; i < slides.length; i++) {
			if (i + 1 === slides.length) {
				addActive(slides[0]);
				setTimeout(removeActive, 350, slides[i]);
				break;
			}
			if (slides[i].classList.contains("active")) {
				setTimeout(removeActive, 350, slides[i]);
				addActive(slides[i + 1]);
				break;
			}
		}
	}, 1500);
};

const images = [img1, img2, img3];

function Home() {
	var i = Math.floor(Math.random() * 3) // Random number between 0 and 2;
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hi There!{" "}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name"> ANEESH RASKAR</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={images[i]}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
