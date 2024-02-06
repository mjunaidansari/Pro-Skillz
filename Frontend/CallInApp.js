import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './context/AuthContext';
import UserProviderOpt from './screens/Other/UserProviderOpt';
import MainStackU from './routes/user/MainStackU';
import MainStackP from './routes/provider/MainStackP';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CallInApp = () => {


    const { directLogin, updateDirectLogin } = useContext(AuthContext);

    useEffect(() => {
        // console.log(directLogin);
        async function check() {
            if (await AsyncStorage.getItem("loggedUser") != null) {
                updateDirectLogin(true);
            }
        }
        check();
    }, [])


    const checkLoggedInOrNot = () => {
        if (directLogin == null) {
            return (
                <UserProviderOpt />
            )
        }
        else if (directLogin == true) {
            return (
                <MainStackU />
            )
        }
        else if (directLogin == false) {
            return (
                <MainStackP />
            )
        }
    }

    return (
        <>
            {checkLoggedInOrNot()}
        </>
    )
}

export default CallInApp

const styles = StyleSheet.create({})