import '../styles/Menu.css';

function Menu() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
    return (
        <div className='Menu'>
            <div className='navbar'>
                <div className='button'><a className='insidebutton' href='#header'>Home</a></div>
                <div className='button'><a className='insidebutton' href='#aboutme'>About</a></div>
                <div className='button'><a className='insidebutton' href='#projects'>Projects</a></div>
                <div className='button'><a className='insidebutton' href='#contact'>Contact</a></div>
            </div>
        </div>
    );

}

export default Menu;