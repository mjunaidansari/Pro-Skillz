import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ReviewCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.reviewInfo}>
                <Image source={require("../assets/prouser.png")} alt='user img' style={{ height: 40, width: 40 }} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>User Name</Text> {"\n"}
                    Booked ProSkillz 10 times - feb 2024
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name='star' size={14} color={"#3B37FF"} />
                    <Text>
                        5
                    </Text>
                </View>
            </View>

            <Text style={styles.review}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates id deserunt doloremque placeat tempora? Ipsa mollitia laboriosam quod consectetur cupiditate. Ipsa, architecto aliquam beatae porro ad praesentium libero voluptas minima?
            </Text>

        </View>
    )
}

export default ReviewCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginVertical: 5
    },
    reviewInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    review: {
        marginTop: 10
    }
})