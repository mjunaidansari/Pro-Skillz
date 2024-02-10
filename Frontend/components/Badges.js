import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Badges = ({ txt, icon, color }) => {
    return (
        <View style={styles.container}>
            <Ionicons name={icon} size={20} color={color} />
            <Text style={{ marginLeft: 5 }}>{txt}</Text>
        </View>
    )
}

export default Badges

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F0F0",
        marginRight: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})