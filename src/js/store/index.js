import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from "../middleware/index";

//reducers produce the state of our application
const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
    );

export default store;

