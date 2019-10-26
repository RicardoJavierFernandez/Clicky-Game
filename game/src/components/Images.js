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
            topScore: 0,
            images: [],
            img1Clicked: false,
            img2Clicked: false,
            img3Clicked: false,
            img4Clicked: false,
        }
    }

    handleIncrement = (event) => {
        this.setState({[event.target.name]: true, score: this.state.score + 1})
        console.log(event.target.name, this.state[event.target.name])
    }

    // https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
    // importAll = (r) => {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    // }

    importAll = (r) => {
        let images = [];
        r.keys().map((item, index) => { images.push(r(item)) });
        return images;
    }

    componentDidMount() {
        let images = this.importAll(require.context('../images', false, /\.jpg/));
        this.setState({images: images});
    }
    
    // <img src={images['0.jpg']} />

    render() {
        return (
            <div>
                <NavBar score={this.state.score} topScore={this.state.topScore} title={"Clicky Game"}/>
                <br />
                <div id="container">
                    {this.state.images.map((item, index) => 
                        <div>
                            <img src={item} alt="" key={index} name="img1Clicked" onClick={this.handleIncrement}></img>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default Images;