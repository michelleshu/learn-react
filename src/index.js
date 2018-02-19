import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import HelloWorld from './components/HelloWorld';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path= "/hello-world" component={HelloWorld} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
