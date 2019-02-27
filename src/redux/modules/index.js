import { combineReducers } from "redux";
import wizard, * as wizardModule from "./wizard/wizard";
import policy, * as policyModule from "./policy/policy";

export { wizardModule, policyModule };

export default combineReducers({ wizard, policy });
