import policyReducer, * as policy from "./policy";

describe("ACTION CREATORS", () => {
  it("should generate NEXT action object", () => {
    const formValues = {
      companyName: "Pleo",
      numberOfEmployees: 100,
      budget: 100020200,
      cannotReclaim: ["milage", "gambling"],
    };
    const action = policy.next(formValues);
    expect(action).toEqual({
      type: "policy/NEXT",
      payload: formValues,
    });
  });
  describe("REDUCER", () => {
    it("should set default state", () => {
      const state = policyReducer(undefined, "@@INIT");
      expect(state).toEqual({});
    });
    it("should set state with form values", () => {
      const formValues = {
        companyName: "Pleo",
        numberOfEmployees: 100,
        budget: 100020200,
        cannotReclaim: ["milage", "gambling"],
      };
      const action = policy.next(formValues);
      const state = policyReducer(undefined, action);
      expect(state).toEqual(formValues);
    });
    it("should update state with new form values", () => {
      const initialState = {
        companyName: "Pleo",
        numberOfEmployees: 100,
        budget: 100020200,
        cannotReclaim: ["milage", "gambling"],
      };
      const action = policy.next({ companyName: "Spendesk" });
      const state = policyReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        companyName: "Spendesk",
      });
    });
  });
});
