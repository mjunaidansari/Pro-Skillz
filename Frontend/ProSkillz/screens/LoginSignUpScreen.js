import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const LoginSignUpScreen = () => {

    const navigation = useNavigation();

    const loginSignUp = () => {
        navigation.navigate()
    }

    return (
        <View>
            <Button
                onPress={loginSignUp}
                title="Login/SignUp"
                color="#841584"
            />
        </View>
    )
}

export default LoginSignUpScreen