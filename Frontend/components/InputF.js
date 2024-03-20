import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputF = (props) => {
    return (
        <View>
            <TextInput
                style={styles.container}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.title}
                inputMode={props.inpM}
                keyboardType="default"
                secureTextEntry={props.password}
            />
        </View>
    )
}

export default InputF

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 0.9,
        borderRadius: 10,
        height: 50,
        padding: 5,
        paddingLeft: 20,
        alignSelf: "center"
    }
})