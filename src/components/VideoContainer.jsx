import React, { useEffect, useRef } from "react";
import heroVideo from "../assets/hero.mkv";

function VideoContainer() {
	const videoRef = useRef(null);

	useEffect(() => {
		// Attempt to play programmatically on mount. Many browsers allow
		// autoplay when the video is muted, so we set muted in the markup
		// and try to play here to improve reliability.
		const v = videoRef.current;
		if (v) {
			const p = v.play();
			if (p !== undefined) {
				p.catch(() => {
					// If autoplay is blocked, ensure muted and try again.
					v.muted = true;
					v.play().catch(() => {});
				});
			}
		}
	}, []);

	return (
		<>
			{/* Hero section: fills the viewport and contains the background video */}
			<section className="hero" aria-label="Hero section">
				{/* Video: muted + playsInline + autoplay + loop for optimized autoplay */}
				<video
					ref={videoRef}
					className="hero__video"
					src={heroVideo}
					muted
					playsInline
					autoPlay
					loop
					preload="auto"
				>
					{/* Fallback message for browsers that don't support the format */}
					Your browser does not support the video tag.
				</video>

				{/* Content overlay on top of the video */}
				<div className="hero__content">
					<h1 id="video">Video Container</h1>
				</div>
			</section>
		</>
	);
}

export default VideoContainer;
