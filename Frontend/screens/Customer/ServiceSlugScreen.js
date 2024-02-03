import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceSlugScreen = ({ route }) => {

    const { item } = route.params;

    return (
        <View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    )
}

export default ServiceSlugScreen

const styles = StyleSheet.create({})