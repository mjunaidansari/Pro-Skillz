import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategorySlugScreen = ({ route }) => {

    const { slugData } = route.params;

    return (
        <View>
            <Text>CategorySlugScreen</Text>
            <Text>{slugData.id}</Text>
        </View>
    )
}

export default CategorySlugScreen

const styles = StyleSheet.create({})