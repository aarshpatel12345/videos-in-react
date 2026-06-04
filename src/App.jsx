import React from "react";
import VideoContainer from "./components/VideoContainer";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <>
      <h1>Jai Swaminarayan</h1>
	  <header>
		<nav>
			<ul>
				<li><a href="#video">Video</a></li>
				<li><a href="#demo">Demo</a></li>
			</ul>
		</nav>
	  </header>
	  <VideoContainer />
	  <Paragraph />
    </>
  );
}

export default App;
