import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { SectionOne } from './components/sections/SectionOne/SectionOne';
import { SectionTwo } from './components/sections/SectionTwo/SectionTwo';
import { SectionThree } from './components/sections/SectionThree/SectionThree';
import { SectionFour } from './components/sections/SectionFour/SectionFour';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<Footer />
				<Switch>
					<Route path="/" exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
