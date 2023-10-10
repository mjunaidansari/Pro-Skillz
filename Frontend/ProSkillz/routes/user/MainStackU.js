import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Customer/HomeScreen';
import SharedStack from './SharedStackU';

export default function MainStackU() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CategoryM" component={SharedStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}