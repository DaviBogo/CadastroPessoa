// Types
export const Types = {
  SET_USER: "set_user",
  SET_EMPLOYESS: "set_employess",
};

// Reducers
const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    familyName: "",
    code: "",
    ocupation: "",
  },
  employess: [],
};

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case Types.SET_EMPLOYESS: {
      return {
        ...state,
        employess: action.payload,
      };
    }
    default:
      return state;
  }
}

// Actions
export const Creators = {
  setUser: (user) => ({
    type: Types.SET_USER,
    payload: user,
  }),
  setEmployess: (employess) => ({
    type: Types.SET_EMPLOYESS,
    payload: employess,
  }),
};
