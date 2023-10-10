import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import AuthStackU from '../routes/AuthStackU';
import AuthSatckSP from '../routes/AuthStackSP';

const UserProviderOpt = () => {

    const { authType, updateAuthState } = useContext(AuthContext);

    // authType - true = User
    // authType - false = Provider

    const updateState = (val) => {
        updateAuthState(val);
    }

    if (authType == null) {
        return (
            <View>
                <Text>
                    {"\n\n\n\n"}

                    <Button title='User' onPress={() => updateState(true)} />
                    <Button title='Provider' onPress={() => updateState(false)} />

                </Text>
            </View>
        )
    }
    else if (authType) {
        return (
            <AuthStackU />
        )
    }
    else if (!authType) {
        return (
            <AuthSatckSP />
        )
    }

}

export default UserProviderOpt