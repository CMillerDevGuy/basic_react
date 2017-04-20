import { createStore, compose } from 'redux';

import reducers from '../reducers/reducers.jsx';

const store = createStore(
    reducers,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

export default store;