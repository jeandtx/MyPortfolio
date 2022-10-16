import '../styles/Menu.css';


function Menu() {
    return (
        <div className='Menu'>
            <div className='navbar'>
                <div><a href='#header'>Home</a></div>
                <div><a href='#aboutme'>About</a></div>
                <div><a href='#projects'>Projects</a></div>
                <div><a href='#contact'>Contact</a></div>
            </div>
        </div>
    );

}

export default Menu;