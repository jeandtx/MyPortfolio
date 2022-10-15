import BG from '../assets/BG.JPG';
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
                trigger: '.projects',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 3,
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "elastic.out(1, 0.3)",
            position: 'relative',
            scale: 1.5
        });
    }, []);

    return (
        <div className='projects'>
            <h1 ref={h1Ref}>My Projects</h1>
            <div>
                <h2>Project 1</h2>
                <div className='flexrow'>
                    <img src={BG} alt="logo" />
                    <p>Project 2 description</p>
                </div>
            </div>
            <div>
                <h2>Project 2</h2>
                <div className='flexrow'>
                    <img src={BG} alt="logo" />
                    <p>Project 2 description</p>
                </div>
            </div>
            <div>
                <h2>Project 3</h2>
                <div className='flexrow'>
                    <img src={BG} alt="logo" />
                    <p>Project 3 description</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;