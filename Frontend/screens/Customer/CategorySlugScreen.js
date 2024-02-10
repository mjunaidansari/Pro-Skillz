import { StyleSheet, Text, TouchableHighlight, View, ScrollView, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ServiceProviderCard from '../../components/ServiceProviderCard';
import ServiceProviderData from '../../constants/ServiceProviderData';
import CategoryContext from '../../context/CategoryContext';

const CategorySlugScreen = ({ route }) => {

    const { item } = route.params;

    const { catServices, getAllServicesOfSpecificCategory } = useContext(CategoryContext);

    // const [servicesCat, setServicesCat] = useState(null);

    useEffect(() => {
        getAllServicesOfSpecificCategory(item._id);
    }, [])

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.imgBanner} source={{ uri: `data:${item.image.contentType};base64,${item.image.data}` }} alt='category banner' />


                <Text style={styles.txt}>
                    Recommended {catServices ? catServices.name : 'Loading'}'s For You
                </Text>

                <View style={styles.cont}>
                    {
                        // console.log(catServices.services)
                        catServices && catServices.services
                            ? catServices.services.map((serviceItem) => (
                                <ServiceProviderCard item={serviceItem} key={serviceItem._id} />
                            ))
                            : <Text>No services available</Text>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default CategorySlugScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imgBanner: {
        width: "100%",
        height: 230,
        marginBottom: 20,
        resizeMode: "cover"
    },
    txt: {
        fontSize: 20,
        marginBottom: 15,
        paddingHorizontal: 16
    },

    cont: {
        width: "100%",
        paddingHorizontal: 16
    }
})