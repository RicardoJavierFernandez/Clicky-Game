import React, { Component } from 'react';
import '../styles/styles.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="navBar">
                <div id="gameStatus">{this.props.gameStatus}</div>
                <div id="title">{this.props.title}</div>
                <br />
                <div id="score">Score: {this.props.score}</div>
                <div id="topScore">Top Score: {this.props.topScore}</div>
            </div>
        )
    }
}

export default NavBar;


