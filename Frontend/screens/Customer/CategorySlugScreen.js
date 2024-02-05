import { StyleSheet, Text, TouchableHighlight, View, ScrollView, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import ServiceProviderCard from '../../components/ServiceProviderCard';
import ServiceProviderData from '../../constants/ServiceProviderData';
import CategoryContext from '../../context/CategoryContext';

const CategorySlugScreen = ({ route }) => {

    const { item } = route.params;

    const { catServices, getAllServicesOfSpecificCategory } = useContext(CategoryContext);

    useEffect(() => {
        getAllServicesOfSpecificCategory(item._id);
    }, [])

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.imgBanner} source={{ uri: `data:${item.image.contentType};base64,${item.image.data}` }} alt='category banner' />


                <Text style={styles.txt}>
                    Recommended For You
                </Text>

                <View style={styles.cont}>
                    {
                        catServices.services.map((item) => {
                            return <ServiceProviderCard item={item} key={item.id} />
                            // { console.log(item); }
                        })
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