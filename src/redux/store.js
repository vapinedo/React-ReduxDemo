import logger from 'redux-logger'
import { rootReducer } from "./rootReducer"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))