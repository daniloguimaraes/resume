import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './i18n';
import 'flag-icon-css/css/flag-icon.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
