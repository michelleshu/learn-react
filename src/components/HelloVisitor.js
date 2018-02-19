import React from 'react';

class HelloVisitor extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Visitor'
        };
    }

    changeName(name) {
        this.setState({ name });
    }

    render() {
        return (
            <div className="text-center container">
                <div className="jumbotron">
                    <h3>Hello {this.state.name}!</h3>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <p>What is your name?</p>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Type your name here"
                            onChange={ (e) => this.changeName(e.target.value) }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HelloVisitor;