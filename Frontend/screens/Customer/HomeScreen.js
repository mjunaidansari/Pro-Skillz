import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Image } from 'react-native';
import serviceData from '../../constants/constants';
import ServiceCard from '../../components/ServiceCard';
import UserProfileHeader from '../../components/AppBar';
import { Dimensions } from 'react-native';
import SearchContainer from '../../components/SearchContainer';
import UserHomePageLocation from '../../components/UserHomePageLocation';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../../components/Carousel';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {

  const navigation = useNavigation();

  // Sample data for the bigger elements
  const featuredItems = [
    { id: '1', name: 'Featured Item 1', description: 'Description for Item 1' },
    { id: '2', name: 'Featured Item 2', description: 'Description for Item 2' },
    { id: '3', name: 'Featured Item 3', description: 'Description for Item 3' },
    // Add more featured items as needed
  ];


  const renderFeaturedItem = ({ item }) => (
    <View>
      <View style={styles.featuredItem}>
        <Text style={styles.featuredItemTitle}>{item.name}</Text>
        <Text style={styles.featuredItemDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const renderCard = ({ item }) => (
    <ServiceCard title={item.title}
      // description={item.description}
      imageUrl={item.imageUrl}
    />
  );

  const categoryData = [
    {
      id: '1', name: 'Featured Item 1', img: require("../../assets/favicon.png")
    },
    {
      id: '2', name: 'Featured Item 1', img: require("../../assets/favicon.png")
    },
    {
      id: '3', name: 'Featured Item 1', img: require("../../assets/favicon.png")
    },
    {
      id: '4', name: 'Featured Item 1', img: require("../../assets/favicon.png")
    },
    {
      id: '5', name: 'Featured Item 1', img: require("../../assets/favicon.png")
    },
    {
      id: '6', name: 'Featured Item 1', img: require("../../assets/favicon.png")
    }
  ]

  const handleCatSulg = (slugData) => {
    navigation.navigate("SlugCategory", { slugData })
  }

  return (



    <View style={styles.container}>

      <UserHomePageLocation />

      <SearchContainer searchText={"Search for Services"} />

      <View style={{ marginBottom: 20 }}>
        <View style={styles.categoryList}>
          <Text style={{ fontSize: 20 }}>Categories</Text>
          <Text onPress={() => navigation.navigate("Category")}>View all</Text>
        </View>

        <FlatList
          data={categoryData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity key={item.id} onPress={() => handleCatSulg(item)}>
                <View style={styles.categoryItem}>
                  <Image source={item.img} alt='cat' />
                </View>
              </TouchableOpacity>
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>


      <Carousel />

      {/* Categories FlatList */}
      {/* <FlatList
        data={serviceData.slice(0, 3)}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  header: {
    marginTop: 35,
    fontSize: 20,
    // fontWeight: 'bold',
    // marginBottom: 10,
  },
  greetings: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    // color: 'red'
  },

  featuredItem: {
    width: "100%",
    height: 150,
    backgroundColor: '#3B37FF',
    borderRadius: 8,
    padding: 16,
  },
  separator: {
    marginLeft: windowWidth * 0.02,
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
    width: 75,
    height: 75,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryList: {
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 8
  }
});

export default HomeScreen;
