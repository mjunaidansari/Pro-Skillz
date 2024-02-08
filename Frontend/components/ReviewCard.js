import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ReviewCard = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../assets/prouser.png")} alt='user img' style={{ height: 40, width: 40 }} />
                <Text>
                    User Name {"\n"}
                    Booked ProSkillz 10 times - feb 2024
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name='star' size={14} />
                    <Text>
                        5
                    </Text>
                </View>
            </View>
            <View>
                <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates id deserunt doloremque placeat tempora? Ipsa mollitia laboriosam quod consectetur cupiditate. Ipsa, architecto aliquam beatae porro ad praesentium libero voluptas minima?
                </Text>
            </View>
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
    }
})