import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CartCards from '../../components/CartCards';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import CheckoutButton from '../../components/CheckoutButton';

const CartScreen = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <CartCards />
                    <CartCards />
                </View>


                <CheckBox
                    title='Avoid calling Before reaching location'
                    checked={isChecked}
                    onPress={() => setChecked(!isChecked)}
                    checkedColor='#3B37FF'
                    containerStyle={{
                        backgroundColor: "#fff",
                        width: "100%",
                        marginLeft: 0,
                        paddingVertical: 15,
                        borderRadius: 10,
                        marginVertical: 15
                    }}
                />

                <View style={styles.payCont}>
                    <Text style={styles.txt}>
                        Payment Summary
                    </Text>

                    <View>
                        <View style={styles.paymentCont}>
                            <Ionicons name='reader' size={20} style={{ marginRight: 10 }} color="#3B37FF" />
                            <Text>
                                Total Bill ₹150
                            </Text>
                        </View>

                        <View style={styles.divider}></View>

                        <View style={styles.paymentCont}>
                            <Ionicons name='home' size={20} color="#3B37FF" style={{ marginRight: 10 }} />
                            <Text numberOfLines={2} style={{ width: "85%" }}>
                                Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Sunt ex voluptatum quibusdam, incidunt maxime cumque similique pariatur minima corrupti consectetur quas molestiae animi non amet!
                            </Text>
                            <Ionicons name='chevron-forward' size={20} color="#3B37FF" />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.checkoutBtn}>
                <CheckoutButton />
            </TouchableOpacity>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
        position: "relative"
    },
    txt: {
        textDecorationLine: "underline",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10
    },
    payCont: {
        marginBottom: "50%",
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 16,
        borderRadius: 10
    },
    paymentCont: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    },
    divider: {
        borderWidth: 0.2,
        borderColor: "#ddd",
        marginVertical: 5
    },
    checkoutBtn: {
        position: "absolute",
        alignSelf: "center",
        bottom: "12%",
    }
})