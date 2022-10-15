import Projects from './Projects';
import Header from './Header';
import Me from './Me';
import Contact from './Contact';
import '../styles/App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Me />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
