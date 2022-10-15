import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <div>
                <h1>Contact</h1>
                <form>
                    <input type="text" id="name" name="name" placeholder='name' />
                    <input type="email" id="email" name="email" placeholder='email' />
                    <input id="message" name="message" placeholder='Say something!' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className='old-messages'>
                <h3>Old Messages</h3>
                <p>Message 1</p>
                <p>Message 2</p>
            </div>
        </div>
    );
}

export default Contact;