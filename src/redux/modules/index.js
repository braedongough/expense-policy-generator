import { combineReducers } from "redux";
import wizard, * as wizardModule from "./wizard/wizard";
import document, * as documentModule from "./document/document";

export { wizardModule, documentModule };

export default combineReducers({ wizard, document });
