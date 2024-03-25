import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';
import TabStackP from './TabStackP';

export default function MainStackU() {

    const { updateLoginStateS, updateAuthState } = useContext(AuthContext);

    useEffect(() => {
        if (AsyncStorage.getItem("loggedServiceProvider")) {
            updateAuthState(false);
            updateLoginStateS(true);
        }
    }, [])

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='HomeStack'>
            <Stack.Screen name="HomeStack" component={TabStackP}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}