import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Linking } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Ratings from './Ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CategoryContext from '../context/CategoryContext';
import * as Location from 'expo-location';

const ServiceProviderCard = ({ item }) => {

    const navigation = useNavigation();

    const { getSpecificServiceReviews } = useContext(CategoryContext);
    const [address, setAddress] = useState();

    // const handleCall = () => {
    //     const phoneUrl = `tel:${item.phno}`;
    //     Linking.canOpenURL(phoneUrl)
    //         .then((supported) => {
    //             if (!supported) {
    //                 console.error(`Phone call is not available on this device`);
    //             } else {
    //                 return Linking.openURL(phoneUrl);
    //             }
    //         })
    //         .catch((err) => console.error('An error occurred', err));
    // }

    const handleServiceSlug = () => {
        getSpecificServiceReviews(item._id);
        navigation.navigate("SlugService", { item })
    }

    const distance = Math.round(item.distance * 100) / 100;

    useEffect(() => {
        (async () => {
            let getAddress = await Location.reverseGeocodeAsync({ latitude: 19.1203998, longitude: 72.8543237 })
            setAddress(getAddress[0].formattedAddress)
        })()
    }, [])


    return (
        <TouchableOpacity onPress={handleServiceSlug} >
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.name}
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 15, marginRight: 5 }}>
                            {item.rating}
                        </Text>
                        <Ratings rating={item.rating} />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "500", width: "80%" }}>{address}</Text>
                        <Text style={{ fontWeight: "500", fontSize: 12, color: "#888888" }}>  .{distance}</Text>
                    </View>

                    <Text numberOfLines={2} style={{ fontWeight: "500", fontSize: 12, color: "#888888" }}>
                        {item.description}
                    </Text>


                    {/* <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={handleCall}>
                        <Ionicons name="call" size={17} color="#00ff00" style={{ fontSize: 15, marginRight: 5 }} />
                        <Text>
                            {item.phno}
                        </Text>
                    </TouchableOpacity> */}
                </View>

                <View style={styles.imgBtn}>
                    <Image style={styles.servImg} resizeMode='contain' source={{ uri: `data:${item.image.contentType};base64,${item.image.data}` }} alt='service img' />
                    <TouchableOpacity style={styles.btn}>
                        <Text>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ServiceProviderCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginVertical: 7,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        width: "100%",
        height: 180,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    info: {
        width: "60%",
        paddingRight: 5,
        height: "100%",
        justifyContent: "space-evenly",
    },

    imgBtn: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    servImg: {
        width: "77%",
        height: "77%"
    },
    btn: {
        borderWidth: 1,
        borderColor: "#3B37FF",
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: "#EEEEFF",
        position: "absolute",
        bottom: -5
    }
})