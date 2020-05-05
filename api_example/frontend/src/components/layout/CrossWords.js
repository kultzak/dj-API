import React, { Component } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './CrossWords.css'

const data = {
    across: {
        1: {
            clue: 'one plus one',
            answer: 'TWO',
            row: 0,
            col: 0,
        },
    },
    down: {
        2: {
            clue: 'three minus two',
            answer: 'ONE',
            row: 0,
            col: 2,
        },
    },
}


export class CrossWords extends Component {
    render() {
        return (
            <div className="CrossWords" style={{ 
                width: '30%' 

                }}>
                <Crossword
                    data={data}
                // columnBreakpoint="9999px"
                // gridBackground="#acf"
                // cellBackground="#ffe"
                // cellBorder="#fca"
                // textColor="#fff"
                // numberColor="#9f9"
                // focusBackground="#f00"
                // highlightBackground="#f99"

                />
            </div>
        )
    }
}

export default CrossWords

