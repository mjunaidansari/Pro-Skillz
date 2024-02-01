import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
    const carouselData = [
        {
            id: '1',
            image: require('../assets/bruh.png'),
            title: 'Carousel Item 1',
        },
        {
            id: '2',
            image: require('../assets/bruh.png'),
            title: 'Carousel Item 2',
        },
        {
            id: '3',
            image: require('../assets/bruh.png'),
            title: 'Carousel Item 3',
        },
    ];

    return (
        <Swiper style={styles.wrapper} autoplay={true} loop={true}>
            {carouselData.map((item) => (
                <View key={item.id} style={styles.slide}>
                    <Image source={item.image} style={styles.image} />
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Carousel;
