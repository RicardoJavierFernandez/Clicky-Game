import React, {Component} from 'react';
import ImageList from './components/ImageList';
import ImageListItem from './components/ImageListItem';

class App extends Component {
    
    state = {
        score: 0,
        topScore: 0,
        images: [],
        clickedImages: [],
        gameStatus: ""
    }

    importAll = (r) => {
        let images = [];
        r.keys().map((item, index) => { images.push(r(item)) });
        return images;
    }

    componentDidMount() {
        this.setState({images: this.importAll(require.context('../src/images', false, /\.jpg/))})
    }

    handleIncrement = (event) => {
        if (!this.state.clickedImages.includes(event.target.name)) {
            this.setState({ score: this.state.score + 1 });
            this.state.clickedImages.push(event.target.name);
        }
        else {
            this.setState({ 
                score: 0, 
                gameStatus: "You guessed incorrectly!",
                clickedImages: []
            });

            if (this.state.topScore < this.state.score) {
                this.setState({ topScore: this.state.score })
            }
        }
    }

    render() {
        return (
            <div>
                <ImageList score={this.state.score} topScore={this.state.topScore} gameStatus={this.state.gameStatus}>
                    {this.state.images.map((item, index) => <ImageListItem src={item} key={index} id={index} name={'img' + index} onClick={this.handleIncrement}/>)}
                </ImageList>
            </div>
        )
    }
}

export default App;