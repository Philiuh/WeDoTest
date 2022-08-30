import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watchFetchUser, watchSignUp, watchSignIn } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchFetchUser);
sagaMiddleware.run(watchSignIn);
sagaMiddleware.run(watchSignUp);

export default store;
