import '../styles/Contact.css';
import { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);

    return (
        <div className='contact'>
            <div className='upper'>
                <h1>Contact</h1>
                <div className='form'>
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

                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>NAME: {item.name}</p>
                            <p>EMAIL: {item.email}</p>
                            <p>MESSAGE: {item.message}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Contact;