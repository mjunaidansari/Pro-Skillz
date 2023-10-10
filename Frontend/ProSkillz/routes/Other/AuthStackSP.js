import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Provider/Login';
import SignUp from '../../screens/Provider/SignUp';

const AuthStackSP = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStackSP