import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
const App = () => {
  return (
	<div className='App'>

		<BrowserRouter>
		<Link to="/">Home</Link><br/> <br/>
			<Link to="/about">About</Link><br/>
			<Link to="/login">Login</Link><br/>
		<Routes>
		
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
		</BrowserRouter>
	</div>
  )
}

function Home()
{
	return(
		<div>
			<h1>
				Home Page
			</h1>
			<p>This is Home Page</p>
		</div>
	)
}


function About()
{
	return(
		<div>
			<h1>
				About Page
			</h1>
			<p>This is About Page</p>
		</div>
	)
}

function Page404()
{
	return(
		<div>
			<h1>
				404 Page
			</h1>
			<p>Page not found</p>
		</div>
	)
}

export default App