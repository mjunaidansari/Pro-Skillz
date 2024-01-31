import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import serviceData from '../../constants/constants';
import ServiceCard from '../../components/ServiceCard';
import UserProfileHeader from '../../components/AppBar';
import {Dimensions} from 'react-native';
import SearchContainer from '../../components/SearchContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  // Sample data for the bigger elements
  const featuredItems = [
    { id: '1', name: 'Featured Item 1', description: 'Description for Item 1' },
    { id: '2', name: 'Featured Item 2', description: 'Description for Item 2' },
    // Add more featured items as needed
  ];

  const renderFeaturedItem = ({ item }) => (
    <View style={styles.featuredItem}>
      <Text style={styles.featuredItemTitle}>{item.name}</Text>
      <Text style={styles.featuredItemDescription}>{item.description}</Text>
    </View>
  );

  const renderSeparator = () => (
    <View style={styles.separator} />
  );


  const renderCard = ({ item }) => (
    <ServiceCard title={item.title}
      // description={item.description}
      imageUrl={item.imageUrl}
    />
  );

  return (

    <View style={styles.container}>

      <UserProfileHeader/>
      <View>
        <Text style={styles.header}>Hello User!</Text>
        <Text style={styles.greetings}>What service do you need ?</Text>
      </View>
      <SearchContainer/>
      
      {/* Featured Items FlatList */}
      <FlatList
        data={featuredItems}
        renderItem={renderFeaturedItem}
        // ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      {/* Categories FlatList */}
      <FlatList
          data={serviceData.slice(0,3)}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // marginLeft: 15,
  },
  header: {
    marginTop: 35,
    fontSize: 20,
    // fontWeight: 'bold',
    // marginBottom: 10,
  },
  greetings:  {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    // color: 'red'
  },

  featuredItem: {
    width: windowWidth*0.92,
    height: 150,
    backgroundColor: '#ffcc00',
    marginRight: windowWidth*0.02,
    borderRadius: 8,
    padding: 16,
  },
  separator: {
    marginLeft: windowWidth*0.02,
  },
  featuredItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredItemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  categoryItem: {
    width: 150,
    height: 100,
    backgroundColor: '#e0e0e0',
    marginRight: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
