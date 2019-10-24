import React, { Component } from 'react';
import '../styles/styles.css';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div id="navBar">
                <div id="title">{ this.props.children }</div>
                <div id="score">Score: {this.props.score}</div>
                <div id="topScore">Top Score: {this.props.topScore}</div>
            </div>
        )
    }
}

export default NavBar;


