import React from 'react';
import marked from 'marked';

class Markdown extends React.Component {
    constructor() {
        super();
        this.state = {
            parsed: ''
        };
    }

    textChanged(text) {
        this.setState({
            parsed: marked(text)
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <textarea class="marked-textarea" onChange={(e) => this.textChanged(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="col">
                        <div dangerouslySetInnerHTML={{ __html: this.state.parsed }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Markdown;