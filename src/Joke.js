import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class Joke extends Component {
	render() {
		return (
			<div className="Joke">
				<div className="joke-buttons">
					<FontAwesomeIcon icon={faArrowUp} onClick={this.props.upVote} />
					<span> {this.props.votes} </span>
					<FontAwesomeIcon icon={faArrowDown} onClick={this.props.downVote} />
					<div className="joke-text">{this.props.text} </div>
				</div>
			</div>
		);
	}
}

export default Joke;
