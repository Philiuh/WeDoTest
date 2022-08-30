const initialState = {
    userPhone: '+',
};

const rootReducer = (state = initialState, action ) => {
    switch (action.type) {
      case 'UPDATE_PHONE':
        return {
          ...state,
          userPhone: action.payload.phoneValue,
          setPhoneExist: action.payload.setPhoneExist,
        };
      case 'SIGN_UP':
        return {
          ...state,
          verifCode: action.payload.verifCode,
          setToken: action.payload.setToken,
          nameValue: action.payload.nameValue,
          bioValue: action.payload.bioValue
        }
      case 'SIGN_IN':
        return {
          ...state,
          verifCode: action.payload.verifCode,
          setToken: action.payload.setToken,
        }
      default:
        return state;
    }
  };

  export default rootReducer;
