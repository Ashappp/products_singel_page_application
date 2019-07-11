import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, devTools(applyMiddleware(thunk)));

export default store;
