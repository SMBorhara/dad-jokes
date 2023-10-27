import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Joke.css';

class Joke extends Component {
	getColor() {
		if (this.props.votes >= 15) {
			return '#99FFFF';
		} else if (this.props.votes >= 12) {
			return '#8AB9F1';
		} else if (this.props.votes >= 9) {
			return '#6082B6';
		} else if (this.props.votes >= 6) {
			return '#B53389';
		} else if (this.props.votes >= 3) {
			return '#E23D28';
		} else {
			return '#990000';
		}
	}

	getEmoji() {
		if (this.props.votes >= 15) {
			return 'em em-laughing';
		} else if (this.props.votes >= 12) {
			return 'em em-relaxed';
		} else if (this.props.votes >= 9) {
			return 'em em-grin';
		} else if (this.props.votes >= 6) {
			return 'em em-slightly_smiling_face';
		} else if (this.props.votes >= 3) {
			return 'em em-confused';
		} else {
			return 'em em-frowning';
		}
	}

	render() {
		return (
			<div className="Joke">
				<div className="joke-buttons">
					<FontAwesomeIcon
						className="up"
						icon={faArrowUp}
						onClick={this.props.upVote}
					/>
					<span className="joke-votes" style={{ borderColor: this.getColor() }}>
						{' '}
						{this.props.votes}{' '}
					</span>
					<FontAwesomeIcon
						className="down"
						icon={faArrowDown}
						onClick={this.props.downVote}
					/>
				</div>
				<div className="joke-text">{this.props.text} </div>
				<div className="joke-smiley">
					<i className={this.getEmoji()}></i>
				</div>
			</div>
		);
	}
}

export default Joke;
