import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharedStack from './SharedStackU';
import UserAccountScreen from '../../screens/Customer/UserAccountScreen';
import SearchScreen from '../../screens/Customer/SearchScreen';
import MainStack from "./MainStackU";

export default function TabStackU() {

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