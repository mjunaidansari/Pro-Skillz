import { StyleSheet, Text, TouchableHighlight, View, ScrollView, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ServiceProviderCard from '../../components/ServiceProviderCard';
import ServiceProviderData from '../../constants/ServiceProviderData';
import CategoryContext from '../../context/CategoryContext';
import { gql, useQuery } from '@apollo/client';

const CategorySlugScreen = ({ route }) => {

    const { item } = route.params;

    const GET_SERVICES = gql`
    query GetServiceCards($serviceCategoryName: String!, $coordinates: [Float]!) {
      getServiceCards(serviceCategoryName: $serviceCategoryName) {
        id
        provider
        name
        description
        serviceCharge
        rating
        image {
          data
          contentType
        }
        providerName
        location {
          type
          coordinates
        }
        distance(coordinates: $coordinates)
      }
    }`;

    let serviceCategoryName = "Plumber";
    let coordinates = [19.1203662, 72.8543215];

    const { loading, error, data } = useQuery(GET_SERVICES, {
        variables: { serviceCategoryName, coordinates }
    })

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.imgBanner} source={{ uri: `data:${item.image.contentType};base64,${item.image.data}` }} alt='category banner' />


                <Text style={styles.txt}>
                    Recommended {item.name}'s For You
                </Text>

                <View style={styles.cont}>
                    {
                        data ?
                            data.getServiceCards.map((serviceItem) => (
                                <ServiceProviderCard item={serviceItem} key={serviceItem.id} />
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