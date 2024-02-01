import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Customer/HomeScreen';
import TabStackU from './TabStackU';
import SearchScreen from '../../screens/Customer/SearchScreen';

export default function MainStackU() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeStack" component={TabStackU} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}