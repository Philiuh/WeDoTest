import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneLogin from './screens/PhoneLogin'
import CodeLogin from './screens/CodeLogin';
import ShowToken from './screens/ShowToken';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PhoneLogin">
          <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{headerShown: false}}/>
          <Stack.Screen name="CodeLogin" component={CodeLogin} options={{headerShown: false}}/>
          <Stack.Screen name="ShowToken" component={ShowToken} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;