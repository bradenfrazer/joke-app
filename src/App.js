import React from 'react';

import Header from "./components/Header";
import Status from "./components/Status";
import Joke from "./components/Joke";

const api_url = "https://official-joke-api.appspot.com/random_joke";

class App extends React.Component {
	state = {
		joke: undefined,
		punchline: undefined,
		status: "",
		statusColor: "gray"
	}
	getJoke = async (e) => {
		this.setState({
			status: "Loading",
			statusColor: "gray"
		});
		e.preventDefault();
		const api_call = await fetch(api_url);
		//console.log(api_call.ok);
		if (!api_call.ok) {
			this.setState({
				joke: undefined,
				punchline: undefined,
				status: "There was an error loading your joke.",
				statusColor: "red"
			});
		}
		else {
			const jokedata = await api_call.json();
			this.setState({
				joke: jokedata.setup,
				punchline: jokedata.punchline,
				status: ""
			});
		}
	}
	render() {
		return (
			<div className="App">
				<Header getJoke={this.getJoke}/>
				<Status
				status={this.state.status}
				statusColor={this.state.statusColor}
				/>
				<Joke
				joke={this.state.joke}
				punchline={this.state.punchline}
				 />
			</div>
		);
	}
}

export default App;
