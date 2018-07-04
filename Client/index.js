import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.scss';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();