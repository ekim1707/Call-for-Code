import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Router from "./routes";

const App = () => <main className="mainContainer"><Router /></main>;

ReactDOM.render(<App />, document.getElementById('root'));