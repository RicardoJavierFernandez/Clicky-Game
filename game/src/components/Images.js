import React, {Component} from 'react';
import NavBar from  '../components/NavBar';
import '../styles/styles.css';
import img1 from '../images/meerkat.jpg';
import img2 from '../images/tiger.jpg';
import img3 from '../images/flamingo.jpg';
import img4 from '../images/squirrel.jpg';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0
        }
    }

    handleIncrement = () => {
        this.setState()
    }

    render() {
        return (
            <div>
                <NavBar score={this.state.score} topScore={this.state.topScore}>
                    This is a Nav Bar
                </NavBar>
                <br />
                <div><img src={img1}></img></div>
                <div><img src={img2}></img></div>
                <div><img src={img3}></img></div>
                <div><img src={img4}></img></div>
            </div>
        )
    }
}

export default Images;