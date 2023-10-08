import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SharedStack from './SharedStack';

export default function AuthStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Category" component={SharedStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}