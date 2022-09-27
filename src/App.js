import Portfolio from './Portfolio';
import './styles/App.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BG from './assets/BG.JPG';

function App() {
	const progressRef = useRef(null);
	const textRef = useRef(null);
	const imgRef = useRef(null);

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
		const img = imgRef.current;
		gsap.fromTo(img, {
			opacity: 0,
			x: 150,
		}, {
			opacity: 1,
			x: 0,
			duration: 2,
			ease: "power4.out",
		});
		gsap.fromTo(img, {
			opacity: 1,
			scale: 1.5,
		},
			{
				scrollTrigger: {
					trigger: ".App",
					start: "top top",
					end: "bottom bottom",
					scrub: 0.9,
				},
				opacity: 0,
				ease: "power4.out",
				scale: 5,
				x: 1000,
				rotation: 360,
			}
		);
	}, []);

	return (
		<div className="App">
			<progress value="0" max="100" ref={progressRef} />
			<header className="App-header">
				<div />
				<div />
				<div />
				<div >
					<img src={BG} ref={imgRef} alt="logo" className='portrait' />
				</div>
				<div className='pageTitle'>
					<h1 ref={textRef}>Jean Doutriaux</h1>
					<h2>Full Stack Web Developer</h2>
					<p>
						Welcome to my portfolio. I am a full stack web developer with a passion for creating
						unique and engaging user experiences. I am currently looking for a full time position
						as a web developer. Please feel free to contact me if you have any questions or
						comments.
					</p>
				</div>
				<div className='Menu' style={{
					width: '300%',
					marginRight: '300%',
				}}>
					{/* Vertical nav bar  */}
					<div className='navbar'>
						<div><a href='#'>Home</a></div>
						<div><a href='#'>About</a></div>
						<div><a href='#'>Projects</a></div>
						<div><a href='#'>Contact</a></div>
					</div>
				</div>
				<div />
				<div />
				<div />
			</header>
			<Portfolio />
		</div>
	);
}

export default App;
