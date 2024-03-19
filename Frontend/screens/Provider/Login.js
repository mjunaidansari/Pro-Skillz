import { View, Text, Button, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/core'
import UserLoginIcon from '../../assets/icons/UserLoginIcon.svg'
import InputF from '../../components/InputF'
import ButtonsPS from '../../components/ButtonsPS'
import AuthContext from '../../context/AuthContext'

const Login = () => {

    const navigation = useNavigation();

    const { updateLoginStateS } = useContext(AuthContext);

    const loginSignUp = (val) => {
        updateLoginStateS(val)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerM}>
                <ScrollView contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <UserLoginIcon />

                    <Text style={styles.infoTxt}>
                        Welcome Back!
                    </Text>

                    <View style={styles.inpF}>
                        <InputF title="User Name/Email" inpM="email" />
                    </View>
                    <View style={styles.inpF}>
                        <InputF title="Password" password={true} />
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => loginSignUp(true)}>
                        <ButtonsPS title="Login with OTP" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.linkTxt}>
                            Forgot password ? Try another ways
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.linkTxt}>
                            Or, New User ?
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },

    containerM: {
        width: "90%",
        height: "100%",
        justifyContent: "space-evenly",
    },

    infoTxt: {
        textAlign: "center",
        fontFamily: "Inter_700Bold",
        fontSize: 30,
        margin: 10
    },

    linkTxt: {
        textAlign: "center",
        marginTop: 12,
        marginBottom: 12
    },

    inpF: {
        marginTop: 12,
        marginBottom: 12
    },

    btn: {
        marginTop: 12,
        marginBottom: 12
    },
})