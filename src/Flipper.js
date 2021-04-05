import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';
import {choice} from "./helpers";

class Flipper extends Component {

    // Image URLs and sides as default props
    static defaultProps = {
        coin : [
            {side : "head", imgSrc : "https://jkscoinworld.com/wp-content/uploads/2018/05/2013-b.jpg"},
            {side : "tail", imgSrc : "https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a.jpg"}
        ]
    }

    // Initializing state
    constructor(props) {
        super(props);
        this.state = {
            currCoin : null,
            flips : 0,
            heads : 0,
            tails : 0
        }

        this.flip = this.flip.bind(this);
    }

    // callback function for click event
    flip() {
        // calling helper function
        let newSide = choice(this.props.coin);

        // updating state with a new Object
        this.setState(st => {
            return (
                {
                    currCoin : newSide,
                    flips : (st.flips + 1),
                    heads : st.heads + (newSide.side === "head" ? 1 : 0),
                    tails : st.tails + (newSide.side === "tail" ? 1 : 0),
                }
            )
        })

    }

    render() {
        return (
            <div className = "Flipper">
                <div className = "Flipper-container">
                    <h1>Let's flip a coin!</h1>

                    {/* Call coin component only if currCoin exists */}
                    {this.state.currCoin && <Coin display = {this.state.currCoin} />}

                    <button onClick = {this.flip}>FLIP ME!</button>

                    <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
                </div>
            </div>


        )
    }
}

export default Flipper;