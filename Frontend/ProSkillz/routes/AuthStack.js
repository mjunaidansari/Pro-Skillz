import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginSignUpScreen from '../screens/LoginSignUpScreen';

export default function AuthStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginSignUpScreen} />
        </Stack.Navigator>
    )
}