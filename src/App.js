import React, { Component } from 'react';
import './App.css';
import AppointmentDashboard from './components/AppointmentDashboard';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 style={{color: '#7c7c7c'}}>Claim your free trial class </h1>
				<h3 style={{color: '#3c3c3c'}}>Class Schedule</h3>
				<AppointmentDashboard></AppointmentDashboard>
			</div>
		);
	}
}

export default App;
