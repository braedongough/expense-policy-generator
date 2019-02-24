import documentReducer, * as document from "./document";

describe("ACTION CREATORS", () => {
  it("should generate NEXT action object", () => {
    const formValues = {
      companyName: "Pleo",
      numberOfEmployees: 100,
      budget: 100020200,
      cannotReclaim: ["milage", "gambling"],
    };
    const action = document.next(formValues);
    expect(action).toEqual({
      type: "document/NEXT",
      payload: formValues,
    });
  });
  describe("REDUCER", () => {
    it("should set default state", () => {
      const state = documentReducer(undefined, "@@INIT");
      expect(state).toEqual({
        companyName: "",
        numberOfEmployees: 0,
        budget: 0,
        cannotReclaim: [],
      });
    });
    it("should set state with form values", () => {
      const formValues = {
        companyName: "Pleo",
        numberOfEmployees: 100,
        budget: 100020200,
        cannotReclaim: ["milage", "gambling"],
      };
      const action = document.next(formValues);
      const state = documentReducer(undefined, action);
      expect(state).toEqual(formValues);
    });
    it("should update state with new form values", () => {
      const initialState = {
        companyName: "Pleo",
        numberOfEmployees: 100,
        budget: 100020200,
        cannotReclaim: ["milage", "gambling"],
      };
      const action = document.next({ companyName: "Spendesk" });
      const state = documentReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        companyName: "Spendesk",
      });
    });
  });
});
