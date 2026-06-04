import React, { useState } from "react";

function ImgDescription() {
	const [currentImage, setCurrentImage] = useState(
		"https://picsum.photos/536/354",
	);

	const updateImage = (img) => {
		setCurrentImage(img);
	};

	return (
		<>
			<section id="features">
				<h1 id="feature-heading">Features</h1>
				<div className="features">
					<ul className="features-list">
						<li
							onMouseOver={() => updateImage("https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_640.jpg")}
						>
							Apple
						</li>
						<li
							onMouseOver={() => updateImage("https://media.istockphoto.com/id/619046500/photo/bananas.jpg?s=612x612&w=0&k=20&c=p5-v1iKwhOhw5cFjfx83qgaZcOBSVpUuicZi4VIGF2Y=")}
						>
							Banana
						</li>
						<li
							onMouseOver={() => updateImage("https://cdn.vectorstock.com/i/1000v/66/85/pineapple-fruit-cartoon-colored-clipart-vector-46536685.jpg")}
						>
							Pineapple
						</li>
					
					</ul>
					<div className="feature-image">
						<img src={currentImage} alt="image" className="img" />
					</div>
				</div>
			</section>
		</>
	);
}

export default ImgDescription;
