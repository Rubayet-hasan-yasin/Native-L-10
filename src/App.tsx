import React from 'react';
import {View} from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackPramList = {
  Home: undefined,
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Tranding Products'
        }}
        />


        <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          title: 'Tranding Details'
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;