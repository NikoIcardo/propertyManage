export interface User {
  username: string;
  email: string;
}
const initialState = {
  username: "",
  email: "",
};

enum UserActions {
  LOAD_USER = "LOAD_USER",
  REMOVE_USER = "REMOVE_USER",
}

const userReducer = (
  state = initialState,
  action: { payload: any; type: UserActions }
) => {
  switch (action.type) {
    case UserActions.LOAD_USER:
      return {
        ...state,
        ...action.payload,
      };
    case UserActions.REMOVE_USER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
