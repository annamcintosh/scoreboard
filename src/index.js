import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Components/Context/Context'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
