import wizardReducer, * as wizard from "./wizard";

describe("ACTION CREATORS", () => {
  it("should setup GET_STEP_COUNT action object", () => {
    const numberOfSteps = 10;
    const action = wizard.getStepCount(numberOfSteps);
    expect(action).toEqual({
      type: wizard.GET_STEP_COUNT,
      payload: {
        numberOfSteps,
      },
    });
  });
  it("should setup NEXT action object", () => {
    const action = wizard.next();
    expect(action).toEqual({
      type: wizard.NEXT,
      payload: {
        modifier: 1,
      },
    });
  });
  it("should setup PREV action object", () => {
    const action = wizard.prev();
    expect(action).toEqual({
      type: wizard.PREV,
      payload: {
        modifier: -1,
      },
    });
  });
});

describe("REDUCER", () => {
  it("should set the default state", () => {
    const state = wizardReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({ numberOfSteps: 0, currentStep: 1 });
  });
  it("should should get the number of steps in the wizard", () => {
    const action = wizard.getStepCount(5);
    const state = wizardReducer(undefined, action);
    expect(state).toEqual({
      numberOfSteps: 5,
      currentStep: 1,
    });
  });
  it("should increment currentStep", () => {
    const initialState = {
      numberOfSteps: 5,
      currentStep: 1,
    };
    const action = wizard.next();
    const state = wizardReducer(initialState, action);
    expect(state).toEqual({
      numberOfSteps: 5,
      currentStep: 2,
    });
  });
  it("should not increment currentStep", () => {
    const initialState = {
      numberOfSteps: 5,
      currentStep: 5,
    };
    const action = wizard.next();
    const state = wizardReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  it("should decrement currentStep", () => {
    const initialState = {
      numberOfSteps: 5,
      currentStep: 5,
    };
    const action = wizard.prev();
    const state = wizardReducer(initialState, action);
    expect(state).toEqual({
      numberOfSteps: 5,
      currentStep: 4,
    });
  });
  it("should not decrement currentStep", () => {
    const initialState = {
      numberOfSteps: 5,
      currentStep: 1,
    };
    const action = wizard.prev();
    const state = wizardReducer(initialState, action);
    expect(state).toEqual({
      numberOfSteps: 5,
      currentStep: 1,
    });
  });
});
