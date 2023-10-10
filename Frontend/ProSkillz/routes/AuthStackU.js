import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginSignUp from '../screens/Customer/UserLoginSignUp';
import OTPScreen from '../screens/Customer/OTPScreen';
import GetNameScreen from '../screens/Customer/GetNameScreen';

export default function AuthStackU() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Login-SignUp'>
            <Stack.Screen name="Login-SignUp" component={UserLoginSignUp} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="Get-Name" component={GetNameScreen} />
        </Stack.Navigator>
    )
}