import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const ServiceCard = ({ title, description, imageUrl,}) => {

  const handlePress = () => {
    // Assuming you want to navigate to a screen named 'DetailsScreen'
    // navigation.navigate('MapScreen');
    console.log(title)
  };

  return (
    <View style={styles.card} onTouchEnd={handlePress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  card: {
    height: 240,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
    backgroundColor: '#fff',
    elevation: 5,
    width: screenWidth * 0.45,
  },
  image: {
    height: 150,
    width: '100%',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ServiceCard;