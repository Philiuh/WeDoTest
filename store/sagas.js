import { call, takeEvery } from 'redux-saga/effects';
import store from '.';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

export function* watchFetchUser() {
  yield takeEvery('UPDATE_PHONE', fetchUserAsync);
};
  
export function* watchSignUp() {
  yield takeEvery('SIGN_UP', signUpAsync)
}
  
export function* watchSignIn() {
  yield takeEvery('SIGN_IN', signInAsync);
};
  
function* fetchUserAsync() {
  const phoneValue = store.getState().userPhone;
  const setPhoneExist = store.getState().setPhoneExist;

  const body = {
    phone: phoneValue
  }
  try {
    const data = yield call(() => {
    return fetch('https://dev.wedo.cy/api/v1/auth/verify-phone', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
      }).then(res => res.json())
    })
    yield setPhoneExist(data.result.is_exist);
  } catch (error) {
      console.log(error);
    }
};
  
function* signUpAsync() {
  const phoneValue = store.getState().userPhone;
  const verifCode = store.getState().verifCode;
  const setToken = store.getState().setToken;
  const nameValue = store.getState().nameValue;
  const bioValue = store.getState().bioValue
  
  const body = bioValue ? {
    phone: phoneValue,
    code: verifCode,
    name: nameValue,
    bioValue: bioValue,
    device_name: "android",
    timezone: "UTC+03",
  } : {
    phone: phoneValue,
    code: verifCode,
    name: nameValue,
    device_name: "android",
    timezone: "UTC+03",
  }
  
  try {
    const data = yield call(() => {
      return fetch('https://dev.wedo.cy/api/v1/auth/signup', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }).then(res => res.json())
    })
    yield setToken(data.result.token);
  } catch (error) {
      console.log(error);
    } 
}
  
function* signInAsync() {
  const phoneValue = store.getState().userPhone;
  const verifCode = store.getState().verifCode;
  const setToken = store.getState().setToken;
  
  const body = {
    phone: phoneValue,
    code: verifCode,
    device_name: "android",
    timezone: "UTC+03",
    apn_token: ""
  }
  
  try {
    const data = yield call(() => {
      return fetch('https://dev.wedo.cy/api/v1/auth/signin', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }).then(res => res.json())
    })
    yield setToken(data.result.token);
    } catch (error) {
      console.log(error);
    }
};