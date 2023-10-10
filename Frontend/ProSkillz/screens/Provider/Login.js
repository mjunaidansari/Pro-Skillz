import { View, Text, Button, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import UserLoginIcon from '../../assets/icons/UserLoginIcon.svg'
import InputF from '../../components/InputF'
import ButtonsPS from '../../components/ButtonsPS'

const Login = () => {

    const navigation = useNavigation();

    const loginSignUp = () => {
        navigation.navigate()
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="always">
                <View style={styles.container}>
                    <View style={styles.containerM}>
                        <UserLoginIcon />

                        <Text style={styles.infoTxt}>
                            Welcome Back!
                        </Text>

                        <InputF title="User Name/Email" />
                        <InputF title="Password" />

                        <ButtonsPS title="Login with OTP" />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },

    containerM: {
        width: "90%",
        height: "80%",
        justifyContent: "space-evenly"
    },

    infoTxt: {
        textAlign: "center",
        fontFamily: "Inter_700Bold",
        fontSize: 30,
    },


    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})