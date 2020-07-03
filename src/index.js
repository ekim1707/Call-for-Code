import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';
import Router from "./routes";

//const App = () => <main className="mainContainer"><Router /></main>;
//
//ReactDOM.render(<App />, document.getElementById('root'));
class App extends Component {
	render() {
		return (<main className="mainContainer"><Router /></main>);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));