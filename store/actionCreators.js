export const updatePhone = (phoneValue, setPhoneExist) => {
  return { 
    type: 'UPDATE_PHONE', 
    payload: {
      phoneValue: phoneValue,
      setPhoneExist: setPhoneExist,
    }
  }
}
  
export const signUp = (verifCode, setToken, nameValue, bioValue) => {
  return {
    type: 'SIGN_UP',
    payload: {
      verifCode: verifCode,
      setToken: setToken,
      nameValue: nameValue,
      bioValue: bioValue
    }
  }
}
  
export const signIn = (verifCode, setToken) => {
  return {
    type: 'SIGN_IN',
    payload: {
      verifCode: verifCode,
      setToken: setToken,
    }
  }
}
