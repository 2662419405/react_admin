import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reudcers";
import thunk from "redux-thunk";
import { UserStateProps } from "./reudcers/user";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export interface StoreState {
  User: UserStateProps;
}

const store = createStore(reducer, enhancer);

export default store;
