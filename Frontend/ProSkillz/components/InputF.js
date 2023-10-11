import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const InputF = (props) => {

    const [isName, setName] = useState();

    return (
        <View>
            <TextInput
                style={styles.container}
                onChangeText={setName}
                value={isName}
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