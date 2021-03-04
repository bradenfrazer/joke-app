import React from 'react';

const Header = (props) => (

	<div className="topbar">
		<button className="btn green-btn" onClick={props.getJoke}>Get A New Random Joke</button>
  	<a href="https://github.com/15Dkatz/official_joke_api" target="_blank">View API Docs</a>
	</div>

);

export default Header;
