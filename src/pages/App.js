import Portfolio from './Projects';
import Header from './Header';
import Me from './Me';
import '../styles/App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Me />

			<Portfolio />
		</div>
	);
}

export default App;
