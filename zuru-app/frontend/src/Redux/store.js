import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./authReducer/auth.reducer";
import { projectReducer } from "./projectReducer/project.reducer";
import { subProjectDataReducer } from "./subProjectReducer/subProjectReducer.reducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Project: projectReducer,
  SubProject: subProjectDataReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
