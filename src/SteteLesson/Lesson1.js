import React from 'react';
// import PropTypes from 'prop-types';

class Lesson1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
                        count:0
                    };
    }
    increment(){
        this.setState({
            count: this.state.count+1
        })
    }
    decrement(){
        this.setState({
            count: this.state.count-1
        })
    }

    reset(){
        this.setState({
            count:0
        })
    }

    render() {
        return (
            <>
                <button className="btn btn-danger px-4" onClick={(e)=> this.increment(e)}>+</button>
                <button className="btn btn-secondary px-4" onClick={(e)=> this.decrement(e)}>-</button>
                <button className="btn btn-warning px-4" onClick={(e)=> this.reset(e)}>reset</button>
                <hr/>
                <span className="bg-secondary p-4" >Count: {this.state.count}</span>
            </>
        );
    }
}

// Lesson1.propTypes = {};

export default Lesson1;
