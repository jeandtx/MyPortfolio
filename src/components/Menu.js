import '../styles/Menu.css';


function Menu() {
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