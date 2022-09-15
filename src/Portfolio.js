import logo from './logo.svg';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
    const imgRef = useRef(null);
    useEffect(() => {
        const img = imgRef.current;
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 75%",
                end: "top 25%",
                scrub: 0.6,
                // markers: true // ! only for debugging
            },
            rotation: 360,
            transformOrigin: "center center",
            ease: "none"
        });
    }, []);
    return (
        <div className="Portfolio">
            <h1>Portfolio</h1>
            <p>Here are some of my projects.</p>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
                <p>
                    Edit <code>src/App.js</code> and save to rimgoad.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noreferrer"
                    rimg="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Portfolio;