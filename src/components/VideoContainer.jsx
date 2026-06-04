import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/hero.mkv";
import Navbar from "./Navbar";

function VideoContainer() {
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;

		v.muted = isMuted;
		v.playsInline = true;

		const playPromise = v.play();
		if (playPromise !== undefined) {
			playPromise.catch((err) => {
				// eslint-disable-next-line no-console
				console.warn("Video autoplay failed:", err);
			});
		}
	}, [isMuted]);

	function handleMuteToggle() {
		const video = videoRef.current;
		if (!video) return;

		const nextMuted = !isMuted;
		video.muted = nextMuted;
		setIsMuted(nextMuted);
	}

	return (
		<>
			<Navbar />
			<section className="hero" id="hero">
				<video
					ref={videoRef}
					className="heroVideo"
					src={heroVideo}
					autoPlay
					muted={isMuted}
					loop
					playsInline
					preload="auto"
					aria-hidden="true"
				/>
				<button
					type="button"
					className="muteToggle"
					onClick={handleMuteToggle}
					aria-label={isMuted ? "Unmute video" : "Mute video"}
				>
					{isMuted ? (
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M11 5 6.8 8.5H3v7h3.8L11 19V5zm7.5 7c0-1.9-1-3.6-2.5-4.6v9.2c1.5-1 2.5-2.7 2.5-4.6zm-2.5-8v2.1c2.9 1.1 5 3.9 5 6.9s-2.1 5.8-5 6.9V20c4-1.2 7-5 7-9s-3-7.8-7-9z" />
						</svg>
					) : (
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M11 5 6.8 8.5H3v7h3.8L11 19V5zm7.7 7a4.7 4.7 0 0 0-1.4-3.3l-1.4 1.4a2.8 2.8 0 0 1 0 3.8l1.4 1.4a4.7 4.7 0 0 0 1.4-3.3zm3.3 0a8 8 0 0 0-2.3-5.6l-1.4 1.4A6 6 0 0 1 20 12a6 6 0 0 1-1.7 4.2l1.4 1.4A8 8 0 0 0 22 12z" />
						</svg>
					)}
				</button>
			</section>
		</>
	);
}

export default VideoContainer;
