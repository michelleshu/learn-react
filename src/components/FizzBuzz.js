import React from 'react';

class FizzBuzz extends React.Component {
    constructor() {
        super();

        this.setValue = this.setValue.bind(this);

        this.state = {
            value: 1
        };
    }

    setValue(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div className="text-center container">
                <div className="jumbotron">
                    <h3>React FizzBuzz</h3>
                    <p>
                        Counting incrementally, any number divisable by 3 is replaced by the word "fizz", and
                        any number divisible by 5 is replaced by the word "buzz".
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <FizzBuzzNumber value={this.state.value} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <FizzBuzzToggle value={this.state.value} setValue={this.setValue} />
                    </div>
                </div>
            </div>
        );
    }
}

class FizzBuzzNumber extends React.Component {
    displayValue() {
        const value = this.props.value;

        if (value % 3 === 0 && value % 5 === 0) {
            return 'FizzBuzz';
        } else if (value % 3 === 0) {
            return 'Fizz';
        } else if (value % 5 === 0) {
            return 'Buzz';
        }

        return value;
    }

    render() {
        return (
            <h3>{this.displayValue()}</h3>
        );
    }
}

class FizzBuzzToggle extends React.Component {
    incrementValue() {
        const value = this.props.value;
        this.props.setValue(value + 1);
    }

    decrementValue() {
        const value = this.props.value;
        if (value > 1) {
            this.props.setValue(value - 1);
        }
    }

    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-lg btn-default" onClick={() => this.decrementValue()}>-</button>
                <button className="btn btn-lg btn-primary" onClick={() => this.incrementValue()}>+</button>
            </div>
        );
    }
}



export default FizzBuzz;