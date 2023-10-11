import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import UserLoginIcon from '../../assets/icons/UserLoginIcon.svg';
import ButtonsPS from '../../components/ButtonsPS';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';

const UserLoginSignUp = () => {

    const navigation = useNavigation()

    const phoneInput = useRef(null);

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");


    return (
        <View style={styles.containerM}>
            <View style={styles.containerC}>

                <View style={styles.imgContainer}>
                    <UserLoginIcon />

                    <Text style={styles.infoTxt}>
                        Welcome Back!
                    </Text>
                </View>

                <View>
                    <View style={styles.inpPhn}>
                        <PhoneInput
                            containerStyle={styles.inpF}
                            textContainerStyle={styles.inpFP}
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }} />
                    </View>

                    <TouchableOpacity style={styles.btns} onPress={() => { navigation.navigate("OTP") }}>
                        <ButtonsPS title="Login with OTP" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default UserLoginSignUp

const styles = StyleSheet.create({
    containerM: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },

    containerC: {
        width: "100%",
        height: "80%",
        justifyContent: "center",
        marginTop: 30
    },

    imgContainer: {
        width: "100%",
        alignItems: "center"
    },

    infoTxt: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 25,
        textAlign: "center",
        margin: 45,
    },

    btns: {
        width: "90%",
        alignSelf: "center",
        margin: 25
    },

    inpPhn: {
        width: "100%",
        alignItems: "center"
    },

    inpF: {
        width: "90%",
        borderWidth: 0.7,
        borderRadius: 10,
        height: 50
    },

    inpFP: {
        borderRadius: 10,
        opacity: 0.7,
    },
})

