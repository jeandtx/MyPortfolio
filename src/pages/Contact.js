import '../styles/Contact.css';
import { useState } from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import mail from '../assets/mail.png';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);

    return (
        <div className='contact'>
            <div className='upper'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '300px',
                }}>
                    <h1>Contact On</h1>
                    <div className='icons'>
                        <a href='mailto:jean.encjeanrenoir@email.com' target='_blank' rel='noreferrer'>
                            <img src={mail} alt='logo' />
                        </a>
                        <a href='https://github.com/jeandtx' target='_blank' rel='noreferrer'>
                            <img src={github} alt='logo' />
                        </a>
                        <a href='https://www.linkedin.com/in/jean-doutriaux-8a7781128/' target='_blank' rel='noreferrer'>
                            <img src={linkedin} alt='logo' />
                        </a>
                    </div>
                </div>
                <div className='form' style={{
                    height: '300px', display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <h1>Or Leave A Message</h1>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        id="message"
                        name="message"
                        placeholder='Say something!'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={() => {
                            setData([...data, { name, email, message }]);
                            setName('Thank');
                            setEmail('you');
                            setMessage(';)');
                        }}
                    />
                </div>
            </div>
            <div className='old-messages'>
                <h3>Old Messages</h3>

                {/* // todo choose between a table or differents div  */}
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.message}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Contact;