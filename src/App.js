// Dependencies
import React, { Component } from 'react';

// Custom modules/components
import BootstrapNavBar from './BootstrapNavBar';

// CUstom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
                    <BootstrapNavBar />
                    {this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
