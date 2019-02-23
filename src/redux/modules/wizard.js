import { createActions } from "redux-actions";

//!const REGISTER_STEP_COUNT = "wizard/REGISTER_STEP_COUNT"; <- what is this actions meant to be for?
export const GET_STEP_COUNT = "wizard/GET_STEP_COUNT";
export const NEXT = "wizard/NEXT";
export const PREV = "wizard/PREV";

export const {
  wizard: { getStepCount, registerStepCount, next, prev },
} = createActions({
  [GET_STEP_COUNT]: numberOfSteps => ({ numberOfSteps }),
  [NEXT]: () => ({ modifier: 1 }),
  [PREV]: () => ({ modifier: -1 }),
});

const initialState = {
  numberOfSteps: 0,
  currentStep: 1,
};

const wizardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STEP_COUNT:
      return {
        ...state,
        numberOfSteps: payload.numberOfSteps,
      };
    case NEXT:
    case PREV:
      const nextStep = state.currentStep + payload.modifier;
      const numberOfSteps = state.numberOfSteps;
      const checkNumberOfSteps = 0 < nextStep && nextStep <= numberOfSteps;
      return {
        ...state,
        currentStep: checkNumberOfSteps ? nextStep : state.currentStep,
      };
    default:
      return state;
  }
};

export default wizardReducer;
