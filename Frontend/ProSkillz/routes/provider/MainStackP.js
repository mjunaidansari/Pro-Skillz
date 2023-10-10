import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Customer/HomeScreen';
import SharedStackU from '../user/SharedStackU';

export default function MainStackP() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Category" component={SharedStackU} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}