import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import './JokeList.css';
import Joke from './Joke';

class JokesList extends Component {
	static defaultProps = {
		numJokesToGet: 10,
	};

	constructor(props) {
		super(props);
		this.state = {
			jokes: JSON.parse(window.localStorage.getItem('jokes')) || '[]',
		};
	}

	componentDidMount() {
		if (this.state.jokes.length === 0) this.getJokes();
	}

	async getJokes() {
		let jokes = [];
		while (jokes.length < this.props.numJokesToGet) {
			let res = await axios.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' },
			});
			jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
		}
		this.setState({ jokes: jokes });
		window.localStorage.setItem('jokes', JSON.stringify(jokes));
	}

	handleVote(id, delta) {
		this.setState((st) => ({
			jokes: st.jokes.map((j) =>
				j.id === id ? { ...j, votes: j.votes + delta } : j
			),
		}));
	}

	render() {
		return (
			<div className="jokeList">
				<div className="jokeList-sidebar">
					<h1 className="jokeList-title">
						<span>Dad</span> Jokes
					</h1>
					<img
						src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
						alt="laughing emoji"
					/>
					<button className="jokeList-getmore">New Jokes</button>
				</div>

				<div className="jokeList-jokes">
					{this.state.jokes.map((j) => (
						<Joke
							key={j.id}
							votes={j.votes}
							text={j.text}
							upVote={() => this.handleVote(j.id, 1)}
							downVote={() => this.handleVote(j.id, -1)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default JokesList;
