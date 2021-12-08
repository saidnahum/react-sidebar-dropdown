import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Overview from './pages/Overview';
import { Reports, Reports1, Reports2, Reports3 } from './pages/Reports';
import { PpiHome, Ppi } from './pages/catedral/ppi'


function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route path='/overview' exact element={<Overview/>}/>
				<Route path='/reports' exact element={<Reports/>}/>
				<Route path='/reports/reports1' exact element={<Reports1/>}/>
				<Route path='/reports/reports2' exact element={<Reports2/>}/>
				<Route path='/reports/reports3' exact element={<Reports3/>}/>
				<Route path='/catedral' exact element={<PpiHome/>}/>
				<Route path='/catedral/ppi' exact element={<Ppi/>}/>
			</Routes>
		</Router>
	);
}

export default App;
