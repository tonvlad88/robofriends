import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Tilt from 'react-tilt';

import './App.css';
import logo from './tony1.png';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json() )
		// .then( users => this.setState( {} ) )		
		.then( users => this.setState( {robots: users} ) )		
	}

	onSearchChange = (event) => {	
		this.setState({ searchfield: event.target.value });				
	}

	render() {
		const {robots, searchfield} = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return !robots.length ?
			<h2>Loading...</h2>
		:
			 
			<div className="tc">
				<div className="mt5">
					<Tilt className="Tilt center ba ba b--dotted bw2 b--light-blue" options={{ max : 25 }} style={{ height: 203, width: 191 }} >	
					 <img className="Tilt-inner" src={logo} alt="tonyph" /> 
					</Tilt>	
				</div>					

				<h1 className="f1">RoboFriends</h1>					
				<SearchBox searchChange= {this.onSearchChange}/>		
				<Scroll>
					<CardList robots = { filteredRobots }/>
				</Scroll>
			</div>
				
		
					
	}	

}

export default App; 