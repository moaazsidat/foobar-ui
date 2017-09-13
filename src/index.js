// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sum from './Sum';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Sum input={[1, 2]}/>, document.getElementById('root'));
registerServiceWorker();
    