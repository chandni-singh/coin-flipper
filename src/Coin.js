import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component {
    render() {

        return(
            <div className = "Coin-container">
                <img className = "Coin" src = {this.props.display.imgSrc} alt = {this.props.display.side} />
            </div>
        )
    }
}

export default Coin;