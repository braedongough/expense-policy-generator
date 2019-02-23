import { combineReducers } from "redux";
import wizard, * as wizardModule from "./wizard/wizard";

export { wizardModule };

export default combineReducers({ wizard });
