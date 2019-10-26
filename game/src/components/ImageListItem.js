import React, {Component} from 'react';


class ImageListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageClicked: false
        }
    }

    render() {
        return (
            <div>
                <img src={this.props.src} alt={''} name={this.props.name} onClick={this.props.onClick}></img>
            </div>
        )
    }

}

export default ImageListItem;

