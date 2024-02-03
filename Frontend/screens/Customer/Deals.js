import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import serviceData from '../../constants/constants';
import DealsItem from './DealsItem';

const Deals = () => {

    return (
        <View style={{ marginBottom: 100 }}>
            <View style={{ marginBottom: 20 }}>
                <View style={styles.categoryList}>
                    <Text style={styles.titleTxt}>Deals Of The Day</Text>
                    <Text>View all</Text>
                </View>

                <View style={styles.flatList}>
                    {
                        serviceData.map((item) => {
                            return <DealsItem item={item} key={item.id} />
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default Deals

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 20
    },

    flatList: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    categoryItem: {
        width: "50%",
        marginHorizontal: 5,
        height: 300,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    categoryList: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
        paddingHorizontal: 8
    }
})