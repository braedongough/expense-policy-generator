import { createActions, handleActions } from "redux-actions";

export const NEXT = "policy/NEXT";

export const {
  policy: { next },
} = createActions({
  [NEXT]: formValues => formValues,
});

const policyReducer = handleActions(
  {
    [NEXT]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  {}
);

export default policyReducer;
