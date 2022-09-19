import Portfolio from './Portfolio';
import './styles/App.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function App() {
	const progressRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const progress = progressRef.current;
		gsap.fromTo(progress, { opacity: 0 }, {
			scrollTrigger: {
				trigger: ".App",
				start: "top top",
				end: "bottom bottom",
				scrub: 0.6,
			},
			opacity: 1,
			value: 100,
		});
		const text = textRef.current;
		gsap.fromTo(text, {
			opacity: 0,
			y: 150,
		}, {
			opacity: 1,
			y: 0,
			duration: 2,
			ease: "power4.out",
		});
	}, []);

	return (
		<div className="App">
			<progress value="0" max="100" ref={progressRef} />
			<header className="App-header">
				<div />
				<div />
				<div />
				<div className='pageTitle'>
					<h1 ref={textRef}>Jean Doutriaux</h1>
				</div>
				<div />
				<div />
				<div />
				<div />
				<div />
			</header>
			<Portfolio />
		</div>
	);
}

export default App;
