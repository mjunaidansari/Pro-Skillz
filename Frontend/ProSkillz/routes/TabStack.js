import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharedStack from './SharedStack';
import UserAccountScreen from '../screens/UserAccountScreen';
import SearchScreen from '../screens/SearchScreen';
import MainStack from "./MainStack";

export default function AuthStack() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
            <Tab.Screen name="Category" component={SharedStack} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={UserAccountScreen} />
            <Tab.Screen name="Seacrh" component={SearchScreen} />
        </Tab.Navigator>
    )
}