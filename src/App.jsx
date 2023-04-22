import React from 'react';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import './App.css';
export default function App() {
	return (
		<main>
			<Navbar />
			<Todos />
		</main>
	);
}

