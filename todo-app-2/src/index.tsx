import ReactDOM from 'react-dom';
import { App } from './App';
// import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from './createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();