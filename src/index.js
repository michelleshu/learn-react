import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import './css/bootstrap.min.css';

import App from './App';
import HelloWorld from './components/HelloWorld';
import HelloVisitor from './components/HelloVisitor';
import FizzBuzz from './components/FizzBuzz';
import Markdown from './components/Markdown';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/hello-world" component={HelloWorld} />
                <Route exact path="/hello-visitor" component={HelloVisitor} />
                <Route exact path="/fizz-buzz" component={FizzBuzz} />
                <Route exact path="/markdown" component={Markdown} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
