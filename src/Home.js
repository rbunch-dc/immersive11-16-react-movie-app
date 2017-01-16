// Dependencies/Components
import React, { Component } from 'react';
import $ from 'jquery';

// Custom componenets/modules
import Poster from './Poster';
import Constants from './Constants';
import Config from './Config';
import DiscoverButton from './DiscoverButton';

import './App.css';

class Home extends Component{
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.state = {
			moviePosters: []
		}		
	}

    componentDidMount() {
		var url = Constants.baseUrl + Constants.nowPlayingEP + Config.api_key;
        $.getJSON(url, (movieData)=>{
            console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });
    }

    // Custom function to update Home's state var, FROM THE CHILD BUTTON
    handleCategoryChange(categoryApiUrl){
    	console.log(categoryApiUrl)
    	var url = Constants.baseUrl + categoryApiUrl + Config.api_key
    	console.log(url);
    	$.getJSON(url, (categoryData)=>{
    		this.setState({
    			moviePosters: categoryData.results
    		})
    	});
    }


	render(){
        var postersArray = [];
        this.state.moviePosters.map((poster,index) =>{
            postersArray.push(<Poster poster={poster} key={index} />)
        });

        //Build buttons with DiscoverBUtton componenet
        var discoverButtons = [];
        Constants.discoverLinks.map((category, index)=>{
        	discoverButtons.push(
        		<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} functionFromParent={this.handleCategoryChange} key={index} />
        	)
        });


        // Load up the postersArray array with Poster Components
        console.log(this.props.children)
   		return(
   			<div>
				<h1>This is the home page!</h1>
				<div className="col-sm-12">
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}

export default Home;