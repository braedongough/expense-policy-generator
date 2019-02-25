import { createActions, handleActions } from "redux-actions";

export const NEXT = "document/NEXT";

export const {
  document: { next },
} = createActions({
  [NEXT]: formValues => formValues,
});

const documentReducer = handleActions(
  {
    [NEXT]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  {}
);

export default documentReducer;
