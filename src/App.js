import logo from './logo.svg';
import Portfolio from './Portfolio';
import './styles/App.css';
import Button from './components/Button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function App() {
	const progressRef = useRef(null);

	useEffect(() => {
		const progress = progressRef.current;
		gsap.to(progress, {
			scrollTrigger: {
				trigger: ".App",
				start: "top top",
				end: "bottom bottom",
				scrub: 0.6,

			},
			value: 100,
		});
	}, []);

	return (
		<div className="App">
			<progress value="0" max="100" ref={progressRef}></progress>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Button href="https://www.joshuamichaelharris.com" text="Or check out my portfolio!" />
			</header>
			<Portfolio />
		</div>
	);
}

export default App;
