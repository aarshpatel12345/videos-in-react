import { useEffect, useRef } from "react";
import heroVideo from "../assets/hero.mkv";

function VideoContainer() {
	const videoRef = useRef(null);

	useEffect(() => {
		// Ensure the video element is muted (required for autoplay in most browsers)
		// and try to play it programmatically. Wrap in try/catch because some
		// browsers may still block autoplay in restrictive modes.
		const v = videoRef.current;
		if (!v) return;

		v.muted = true; // required for autoplay on many platforms
		v.playsInline = true; // for iOS Safari to allow inline playback

		const playPromise = v.play();
		if (playPromise !== undefined) {
			playPromise.catch((err) => {
				// If autoplay is blocked, keep the video muted and leave it paused.
				// In production you might show a play button overlay here.
				// Console here for debugging during development.
				// eslint-disable-next-line no-console
				console.warn("Video autoplay failed:", err);
			});
		}
	}, []);

	return (
		<>
			{/* HERO SECTION: made this section act as a fullscreen hero */}
			<section className="hero">
				<h1 id="video">Video Container</h1>

				{/*
					Use <video> attributes that improve autoplay behavior and performance:
					- muted: required for autoplay in many browsers
					- autoPlay: hint to start playing as soon as possible
					- loop: common for hero background videos
					- playsInline: avoids forcing fullscreen on iOS Safari
					- preload="auto": browser can preload metadata/first frames (adjust if large)
					We use a ref to call play() programmatically after ensuring muted.
				*/}
				<video
					ref={videoRef}
					className="heroVideo"
					src={heroVideo}
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					aria-hidden="true"
				/>
			</section>
		</>
	);
}

export default VideoContainer;
