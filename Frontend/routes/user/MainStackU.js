import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStackU from './TabStackU';
import SearchScreen from '../../screens/Customer/SearchScreen';
import CategorySlugScreen from '../../screens/Customer/CategorySlugScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../context/AuthContext';
import ServiceSlugScreen from '../../screens/Customer/ServiceSlugScreen';
import AllDeals from '../../screens/Customer/AllDeals';
import AllRecentServices from '../../screens/Customer/AllRecentServices';
import ServicceProviderProfileScreen from '../../screens/Customer/ServicceProviderProfileScreen';
import ServiceReview from '../../screens/Customer/ServiceReview';

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
            <Stack.Screen name="HomeStack" component={TabStackU}
                options={{ headerShown: false }} />

            <Stack.Screen name="Search" component={SearchScreen}
                options={{ headerShown: false }} />

            <Stack.Screen name="SlugCategory" component={CategorySlugScreen}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3B37FF" }, headerTintColor: "#fff" }} />

            <Stack.Screen name="SlugService" component={ServiceSlugScreen}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3B37FF" }, headerTintColor: "#fff" }} />

            <Stack.Screen name="SPProfile" component={ServicceProviderProfileScreen}
                options={{ headerShown: true, headerStyle: { backgroundColor: "#3B37FF" }, headerTintColor: "#fff" }} />

            <Stack.Screen name="AllDeals" component={AllDeals}
                options={{ headerShown: false }} />

            <Stack.Screen name="AllReccents" component={AllRecentServices}
                options={{ headerShown: false }} />

            <Stack.Screen name="ServiceReview" component={ServiceReview}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}