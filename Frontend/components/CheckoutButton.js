import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const CheckoutButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Proceed </Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
        </View>
    )
}

export default CheckoutButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#3B37FF",
        borderRadius: 10,
        padding: 16,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    txt: {
        color: "#fff",
        fontSize: 20
    }
})