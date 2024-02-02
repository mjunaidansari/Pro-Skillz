import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Customer/HomeScreen';
import TabStackU from './TabStackU';
import SearchScreen from '../../screens/Customer/SearchScreen';
import CategorySlugScreen from '../../screens/Customer/CategorySlugScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';

export default function MainStackU() {

    const { updateLoginStateU, updateAuthState } = useContext(AuthContext);

    useEffect(() => {
        if (AsyncStorage.getItem("loggedUser")) {
            updateAuthState(true);
            updateLoginStateU(true);
        }
    }, [])

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeStack'>
            <Stack.Screen name="HomeStack" component={TabStackU} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SlugCategory" component={CategorySlugScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}