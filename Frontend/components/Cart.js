import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonsPS from './ButtonsPS'

const Cart = ({ totalPrice }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>₹{totalPrice}</Text>

            <TouchableOpacity style={styles.cartBtn}>
                <Text style={{ fontSize: 17, color: "#fff", fontWeight: "bold" }}>
                    View Cart
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#ddd"
    },
    cartBtn: {
        backgroundColor: "#3B37FF",
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 10
    },
    txt: {
        fontSize: 20,
    }
})