import './App.css';
import Header from "./components/Header/Header"
import SimpleBottomNavigation from "./components/MainNav"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Container from '@material-ui/core/Container';

import Trending from "./Pages/Trending/Trending"
import Search from "./Pages/Search/Search"
import Series from "./Pages/Series/Series"
import NotFound from "./Pages/NotFound/404"
import Movies from "./Pages/Movies/Movies"


function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="app">

				<Container>
					<Switch>
						<Route exact path="/" component={Trending} />
						<Route path="/movies" component={Movies} />
						<Route path="/series" component={Series} />
						<Route path="/search" component={Search} />
						<Route component={NotFound} />
					</Switch>
				</Container>
			</div>

			<SimpleBottomNavigation />
		</BrowserRouter>
	);
}

export default App;
