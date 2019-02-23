import { createStore } from "redux";
import reducers from "./modules";

const configureStore = () =>
  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const store = configureStore();

export default store;
