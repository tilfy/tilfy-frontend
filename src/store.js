import { createStore } from 'redux';
import persistState from 'redux-sessionstorage'
import reducers from './reducers/users';
import { composeWithDevTools } from 'redux-devtools-extension';

const createPersistentStore = composeWithDevTools(persistState())(createStore)
const store = createPersistentStore(reducers)

export default store;