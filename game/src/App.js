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

    shuffle = (array) =>{
        let currentIndex = array.length
        let temporaryValue;
        let randomIndex;
        /* Algorithm is known as the Fisher-Yates Shuffle algorithm
        While there are still elements remaining to shuffle through in the array,
        loop through the element(s). If current index is 0, then we would have looped
        through all elements of the array.
        */
        while (0 != currentIndex)
        {
            // Pick a random element
            randomIndex = Math.floor(Math.random() * currentIndex); //randomIndex will not be greater than n-1
            currentIndex -= 1;
            // Swap the random index with the current index
            // Store the current index to replace element value in random index
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    componentDidMount() {
        this.setState({images: this.importAll(require.context('../src/images', false, /\.jpg/))})
    }

    handleIncrement = (event) => {
        if (!this.state.clickedImages.includes(event.target.name)) {
            this.setState({
                score: this.state.score + 1, 
                gameStatus: "You guessed correctly!"
            });
            this.shuffle(this.state.images);
            this.state.clickedImages.push(event.target.name);
        }
        else {
            this.setState({ 
                score: 0, 
                gameStatus: "You guessed incorrectly!",
                clickedImages: []
            });

            if (this.state.topScore < this.state.score) {
                this.setState({ topScore: this.state.score });
            }
        }
    }

    render() {
        return (
            <div>
                <ImageList 
                    score={this.state.score} 
                    topScore={this.state.topScore} 
                    gameStatus={this.state.gameStatus}
                >
                    {this.state.images.map((item, index) => 
                        <ImageListItem 
                            src={item} 
                            key={index} 
                            id={index} 
                            name={'img' + index} 
                            onClick={this.handleIncrement}
                        />)}
                </ImageList>
            </div>
        )
    }
}

export default App;