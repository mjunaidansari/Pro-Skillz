import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CartContext from '../context/CartContext';

const CartCards = ({ item }) => {

    // const { cartService, getCartServiceInfo } = useContext(CartContext);

    // useEffect(() => {
    //     getCartServiceInfo(item)
    // }, [])

    // if (!cartService) {
    //     return <View></View>
    // }

    return (
        <View style={styles.cardCont}>
            <View style={{ flex: 1, }}>
                <Image style={styles.cardImg} source={require("../assets/idli.png")} alt='service img' />
            </View>
            <View style={{ flex: 2, marginLeft: 16, height: 100, justifyContent: "space-between" }}>
                <View>
                    <Text style={styles.mainTxt}>
                        Juniad Services
                    </Text>
                    <Text style={styles.txt} numberOfLines={2}>
                        Sahaji Raje Marg Vile Parle East
                        Sahaji Raje
                    </Text>
                </View>

                <View style={styles.priceDel}>
                    <Text style={{ fontSize: 15 }}>
                        ₹150
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="trash-outline" size={20} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartCards

const styles = StyleSheet.create({
    cardCont: {
        width: "100%",
        height: 140,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        marginVertical: 5
    },
    cardImg: {
        width: 100,
        height: 100
    },

    mainTxt: {
        fontSize: 20,
        fontWeight: "bold"
    },
    txt: {
        fontWeight: "400"
    },
    priceDel: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn: {
        borderWidth: 1,
        borderColor: "#FF7E8B",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#FFF1F2",
        alignItems: "center",
        justifyContent: "center"
    }
})