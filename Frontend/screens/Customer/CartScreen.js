import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import CartCards from '../../components/CartCards';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import CheckoutButton from '../../components/CheckoutButton';
import CartContext from '../../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import LocationContext from '../../context/LocationContext';

const CartScreen = () => {
    const [isChecked, setChecked] = useState(false);

    const { cart, getAllServicesFromCart } = useContext(CartContext);

    const { location } = useContext(LocationContext);


    useEffect(() => {
        getAllServicesFromCart();
    }, [])

    const navigation = useNavigation();

    const handleReview = () => {
        navigation.navigate("ServiceReview");
    }

    const handleNoItemcartBtn = () => {
        navigation.navigate("Home");
    }

    if (Object.keys(cart).length === 0) {
        return (
            <View style={[styles.container, { alignItems: "center", justifyContent: "center" }]}>
                <Ionicons name='cart-outline' size={50} color="#3B37FF" />
                <Text>Cart is Empty!</Text>
                <TouchableOpacity style={styles.btn} onPress={handleNoItemcartBtn}>
                    <Text>
                        Explore Services
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (cart.services.length === 0) {
        return (
            <View style={[styles.container, { alignItems: "center", justifyContent: "center" }]}>
                <Ionicons name='cart-outline' size={50} color="#3B37FF" />
                <Text>Cart is Empty!</Text>
                <TouchableOpacity style={styles.btn} onPress={handleNoItemcartBtn}>
                    <Text>
                        Explore Services
                    </Text>
                </TouchableOpacity>
            </View>
        )

    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {/* <CartCards /> */}
                    {
                        cart.services.map((item, index) => {
                            return <CartCards item={item} key={index} />
                        })
                    }

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
                                Total Bill  <Text style={{ fontWeight: "bold" }}>₹{cart.totalPrice}</Text>
                            </Text>
                        </View>

                        <View style={styles.divider}></View>

                        <View style={styles.paymentCont}>
                            <Ionicons name='home' size={20} color="#3B37FF" style={{ marginRight: 10 }} />
                            <Text numberOfLines={2} style={{ width: "85%" }}>
                                {location[0].formattedAddress}
                            </Text>
                            <Ionicons name='chevron-forward' size={20} color="#3B37FF" />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.checkoutBtn} onPress={handleReview}>
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
    },
    btn: {
        borderWidth: 1,
        borderColor: "#3B37FF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#EEEEFF",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    }
})