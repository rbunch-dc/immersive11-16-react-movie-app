// Dependencies
import React, { Component } from 'react';
import $ from 'jquery';

// Custom modules/components
import Poster from './Poster';
import BootstrapNavBar from './BootstrapNavBar';

// CUstom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviePosters: []
        }
    }

    componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
        $.getJSON(url, (movieData)=>{
            console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });
    }

	render() {
        var postersArray = [];
        this.state.moviePosters.map((poster,index) =>{
            postersArray.push(<Poster poster={poster} key={index} />)
        });
        // Load up the postersArray array with Poster Components
        console.log(this.props.children)
		return (
			<div className="container">
				<div className="row">
                    <BootstrapNavBar />
                    {this.props.children}
					{postersArray}
				</div>
			</div>
		);
	}
}

export default App;
