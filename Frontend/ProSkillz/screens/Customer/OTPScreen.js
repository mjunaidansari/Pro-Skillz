import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useRef, useState } from 'react'
import OTPIcon from '../../assets/icons/OTPIcon.svg'
import { useNavigation } from '@react-navigation/native'
import ButtonsPS from '../../components/ButtonsPS'
// import OTPInputView from '@twotalltotems/react-native-otp-input'

const OTPScreen = () => {

    const navigation = useNavigation()

    const [state, setState] = useState()

    return (
        <View style={styles.containerM}>
            <View style={styles.topView}>
                <OTPIcon />

                <Text style={[styles.topTxt, { margin: 25, fontSize: 20 }]}>OTP</Text>

                <Text style={styles.topTxt}>Enter the OTP you recieved and complete the process</Text>
            </View>


            <View style={styles.btmView}>

                {/* <View>

                    <OTPInputView
                        style={{ width: '80%', height: 200 }}
                        pinCount={6}
                        code={this.state} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        onCodeChanged={code => { this.setState({ code }) }}
                        autoFocusOnLoad
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />

                </View> */}

                <Text style={styles.btmTxt}>Didn’t receive an OTP ?</Text>

                <TouchableHighlight style={[styles.btmTxt]}>
                    <Text style={styles.rOTP}>
                        Resend OTP
                    </Text>
                </TouchableHighlight>

                <View style={{ width: "100%", alignItems: "center", margin: 25 }}>
                    <TouchableOpacity style={styles.btns} onPress={() => { navigation.navigate("Get-Name") }}>
                        <ButtonsPS title="Submit" />
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    containerM: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#407BFF",
    },

    btns: {
        width: "50%"
    },

    topTxt: {
        color: "#fff",
        fontFamily: "Inter_700Bold"
    },

    btmTxt: {
        color: "#000",
        margin: 15
    },

    btmView: {
        width: "100%",
        height: "55%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 140,
        alignItems: "center",
        justifyContent: "center"
    },

    rOTP: {
        textDecorationLine: "underline"
    },

    topView: {
        width: "100%",
        height: "45%",
        alignItems: "center",
        justifyContent: "center"
    }

})