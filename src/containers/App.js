import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
constructor() {
    super()
    //state is something that can change and effect our app
    this.state = { 
        robots: [],
        searchfield: ''
    }
}
//Fetching data from online resources
componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}));
}
//getting the value from the searchfield
onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}
render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    })
    if (!robots.length){
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
}
export default App;