import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


const { width: screenWidth } = Dimensions.get('window');

const ProviderCard = ({ title, latitude, longitude }) => {
  return (
    
    <View style={styles.card}>
      {/* <Image source={{uri: Image}}></Image> */}
      <Text style={styles.cardTitle}>{title}</Text>
      <Text>Latitude: {latitude.toFixed(4)}</Text>
      <Text>Longitude: {longitude.toFixed(4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth*0.92,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: screenWidth*0.04,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ProviderCard;
