import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class ImageList extends Component {
   
    title = "Clicky Game";

    render() {
        return (
            <div>
                <NavBar 
                    title={this.title} 
                    score={this.props.score} 
                    topScore={this.props.topScore} 
                    gameStatus={this.props.gameStatus}
                />

                <div id="container">
                    {this.props.children}
                </div>

                <Footer title={this.title}/>
            </div>
        )
    }
}

export default ImageList;