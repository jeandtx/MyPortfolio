import '../styles/Me.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Me() {

    const progressRef1 = useRef(null);
    const progressRef2 = useRef(null);
    const progressRef3 = useRef(null);
    const progressRef4 = useRef(null);
    const progressRef5 = useRef(null);
    const progressRef6 = useRef(null);
    const progressRef7 = useRef(null);
    const progressRef8 = useRef(null);

    useEffect(() => {
        const progress1 = progressRef1.current;
        const progress2 = progressRef2.current;
        const progress3 = progressRef3.current;
        const progress4 = progressRef4.current;
        const progress5 = progressRef5.current;
        const progress6 = progressRef6.current;
        const progress7 = progressRef7.current;
        const progress8 = progressRef8.current;

        gsap.fromTo(progress1, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 75,
            scale: 1.5
        });
        gsap.fromTo(progress2, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 40,
            scale: 1.5
        });
        gsap.fromTo(progress3, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 95,
            scale: 1.5
        });
        gsap.fromTo(progress4, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 85,
            scale: 1.5
        });
        gsap.fromTo(progress5, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 95,
            scale: 1.5
        });
        gsap.fromTo(progress6, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 80,
            scale: 1.5
        });
        gsap.fromTo(progress7, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 67,
            scale: 1.5
        });
        gsap.fromTo(progress8, {
            value: 100,
        }, {
            scrollTrigger: {
                trigger: ".aboutme",
                start: "top top",
                end: "bottom 80%",
                scrub: 0.6,
            },
            value: 90,
            scale: 1.5
        });

    }, []);

    return (
        <div className="aboutme">
            <h4>
                I am a french student living at Paris. I am currently studying at the EFREI Paris school. I am a computer science student and I am passionate about programming.
                I love to learn new things and I am always looking for new challenges.
            </h4>
            <div style={{
                width: "100%",
            }}>
                <div className='skills' >
                    <div>
                        <h3>Here are my skills in programming</h3>
                        <div>
                            <p>
                                React.js
                            </p>
                            <progress value="75" max="100" ref={progressRef1} />
                            <p>
                                Vue.js
                            </p>
                            <progress value="40" max="100" ref={progressRef2} />
                            <p>
                                Python
                            </p>
                            <progress value="95" max="100" ref={progressRef3} />
                            <p>
                                C / C++
                            </p>
                            <progress value="85" max="100" ref={progressRef4} />
                        </div>
                    </div>
                    <div>
                        <h3>Here are my softskills</h3>
                        <div>
                            <p>
                                Oranisation
                            </p>
                            <progress value="95" max="100" ref={progressRef5} />
                            <p>
                                Leadingship
                            </p>
                            <progress value="80" max="100" ref={progressRef6} />
                            <p>
                                Professionalism
                            </p>
                            <progress value="67" max="100" ref={progressRef7} />
                            <p>
                                Communication
                            </p>
                            <progress value="90" max="100" ref={progressRef8} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Me;