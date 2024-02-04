import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';
import React from 'react';
import ServiceProviderCard from '../../components/ServiceProviderCard';
import ServiceProviderData from '../../constants/ServiceProviderData';

const CategorySlugScreen = ({ route }) => {

    const { item } = route.params;

    return (
        <View style={styles.container} >

            <Text style={styles.txt}>
                Recommended For You
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cont}>
                    {
                        ServiceProviderData.map((item) => {
                            return <ServiceProviderCard item={item} key={item.id} />
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
        padding: 16,
        backgroundColor: "#fff",
    },

    txt: {
        fontSize: 20,
        marginBottom: 15
    },

    cont: {
        width: "100%",
    }
})