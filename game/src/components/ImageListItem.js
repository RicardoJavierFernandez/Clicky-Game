import React, {Component} from 'react';


class ImageListItem extends Component {

    render() {
        return (
            <div>
                <img src={this.props.src} alt={''} name={this.props.name} onClick={this.props.onClick}></img>
            </div>
        )
    }

}

export default ImageListItem;

