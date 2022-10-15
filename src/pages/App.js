import Projects from './Projects';
import Header from './Header';
import Me from './Me';
import Contact from './Contact';
import Menu from '../components/Menu';
import '../styles/App.css';

function App() {
	return (
		<div className="App">
			<Menu />
			<Header />
			<Me />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
