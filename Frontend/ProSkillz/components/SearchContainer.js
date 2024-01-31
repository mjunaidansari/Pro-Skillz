import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchContainer = ({ searchText }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the Search page
    navigation.navigate('Search');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <AntDesign name="search1" size={24} color="#333" style={styles.searchIcon} />
        <Text style={styles.searchText}>{searchText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    marginVertical: 20,
    // marginHorizontal: windowWidth * 0.01,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchContainer;
