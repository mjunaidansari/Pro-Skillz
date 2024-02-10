import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ImageView from 'react-native-image-viewing';

const ReviewCard = ({ item }) => {

    // console.log(item);

    const date = new Date(item.timestamp);

    const [isImageViewVisible, setImageViewVisible] = useState(false);

    const reviewDate = date.toLocaleDateString();

    const images = [];

    item.images.forEach(element => {
        images.push({ uri: `data:${element.contentType};base64,${element.data}` })
    });

    return (
        <View style={styles.container}>
            <View style={styles.reviewInfo}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/prouser.png")} alt='user img' style={{ height: 40, width: 40, marginRight: 10 }} />
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>{item.reviewer.firstname} {item.reviewer.lastname}</Text> - {reviewDate}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name='star' size={14} color={"#3B37FF"} />
                    <Text>
                        {item.rating}
                    </Text>
                </View>
            </View>

            <View>
                <Text style={styles.review}>
                    {item.comment}
                </Text>


                <View style={{ width: "100%", height: 160 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {item.images.map((image, index) => (
                            <TouchableOpacity
                                style={{ marginTop: 10, height: 160, width: 160, marginRight: 5 }}
                                key={index}
                                onPress={() => setImageViewVisible(true)}
                            >
                                <Image resizeMode='contain' style={{ height: 160, width: 160 }} source={{ uri: `data:${image.contentType};base64,${image.data}` }} alt='review img' />
                            </TouchableOpacity>
                        ))}

                        <ImageView
                            images={images}
                            imageIndex={0} // Index of the initial image to display
                            visible={isImageViewVisible}
                            onRequestClose={() => setImageViewVisible(false)}
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ReviewCard

const styles = StyleSheet.create({
    container: {
        padding: 16,
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