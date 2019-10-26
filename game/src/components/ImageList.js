import React, {Component} from 'react';
import NavBar from './NavBar';

class ImageList extends Component {

    render() {
        return (
            <div>
                <NavBar title="Click Game" score={this.props.score} topScore={this.props.topScore} gameStatus={this.props.gameStatus}/>
                <div id="container">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default ImageList;