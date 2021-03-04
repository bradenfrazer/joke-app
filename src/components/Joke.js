import React from 'react';

class Joke extends React.Component {
	state = {
		showPunchline: 0,
		showPunchlineText: "Show Punchline",
	}
	/* handle show/hide of the punchline */
	togglePunchline = () => {
		if (this.state.showPunchline) {
			this.setState({
				showPunchline: 0,
				showPunchlineText: "Show Punchline"
			});
	  }
	  else {
			this.setState({
				showPunchline: 1,
				showPunchlineText: "Hide Punchline"
			});
	  }
	}
	render() {
		return <div>
		{
		this.props.joke && this.props.punchline &&
		<div className="joke-viewer" id="jokeViewer">
			<div className="joke-container">
				<p id="joke">{ this.props.joke }</p>
				</div>
			<button className="btn blue-btn" id="toggleButton"
			onClick={ this.togglePunchline } > { this.state.showPunchlineText }</button>
			{
				!!this.state.showPunchline &&
			<div className="punchline-container" id="punchlineContainer">
				<p id="punchline">{ this.props.punchline }</p>
				</div>
			}

		</div>
	}
	</div>
	}
}

export default Joke;
