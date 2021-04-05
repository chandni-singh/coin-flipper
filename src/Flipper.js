import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';

// counters
let flips = 0;
let heads = 0;
let tails = 0; 

class Flipper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgURL : "https://jkscoinworld.com/wp-content/uploads/2018/05/2013-b.jpg",
            isHead : true
        }
        this.flip = this.flip.bind(this);
    }

    flip() {
        flips++;
        if(this.state.isHead) {
            tails++;
            this.setState({imgURL : "https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a.jpg", isHead : false});
        }
        else {
            heads++;
            this.setState({imgURL : "https://jkscoinworld.com/wp-content/uploads/2018/05/2013-b.jpg", isHead : true});
        }
    }

    render() {
        return (
            <div className = "Flipper">
                <div className = "Flipper-container">
                    <h1>Let's flip a coin!</h1>
                    <Coin src = {this.state.imgURL} />  
                    <button onClick = {this.flip}>FLIP ME!</button>
                    <div>Out of {flips} flips, there have been {heads} heads and {tails} tails.</div>
                </div>
            </div>


        )
    }
}

export default Flipper;