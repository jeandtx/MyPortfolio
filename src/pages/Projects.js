import Matchikal from '../assets/matchikal.png';
import lifesgame from '../assets/ligesgame.gif';
import python from '../assets/python.png';
import '../styles/Projects.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Projects() {

    const h1Ref = useRef(null);

    useEffect(() => {
        const h1 = h1Ref.current;
        gsap.fromTo(h1, {
            opacity: 0,
            y: 150,
            scale: 1
        }, {
            scrollTrigger: {
                trigger: '.skills',
                start: 'top top',
                end: 'bottom bottom',
            },
            opacity: 1,
            y: 0,
            duration: 3,
            ease: "elastic.out(1, 0.3)",
            position: 'relative',
            scale: 1.5
        });
    }, []);

    return (
        <div className='projects'>
            <h1 ref={h1Ref}>My Projects</h1>
            <div className='projects-container' >
                <h2>Python Game</h2>
                <div className='flexcol'>
                    <img src={python} alt="logo" />
                    <div>During my first year in computer science our first project was to create a game using only python and libraries.
                        So we created a reproduction of the famous game Super Smash BRO</div>
                </div>
            </div>
            <div>
                <h2>Matchikal</h2>
                <div className='flexcol'>
                    <img src={Matchikal} alt="logo" />
                    <div
                    >Matchikal is a new way to discover strangers! Discover by musical taste. This application is able to get your profile using apis of your music streaming app and check the compatibility with anyone.</div>
                </div>
            </div>
            <div>
                <h2>The Game Of Life</h2>
                <div className='flexcol'>
                    <img src={lifesgame} alt="logo" />
                    <div
                        style={{ width: '15%' }}
                    >Reproducting the famous game of life</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;