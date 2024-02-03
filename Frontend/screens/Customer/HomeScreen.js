import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Image, Alert, ScrollView } from 'react-native';
import serviceData from '../../constants/constants';
import ServiceCard from '../../components/ServiceCard';
import UserProfileHeader from '../../components/AppBar';
import { Dimensions } from 'react-native';
import SearchContainer from '../../components/SearchContainer';
import UserHomePageLocation from '../../components/UserHomePageLocation';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import * as Location from 'expo-location';
import LocationContext from '../../context/LocationContext';
import CardsLayout from './CardsLayout';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {

  const [locationCords, setLocationCords] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const { setLocation } = useContext(LocationContext);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let locationCords = await Location.getCurrentPositionAsync({});
      setLocationCords(locationCords);

      let userLocation = await Location.reverseGeocodeAsync({ latitude: locationCords.coords.latitude, longitude: locationCords.coords.longitude });
      setUserLocation(userLocation);
      setLocation(userLocation);

    })();
  }, []);

  const navigation = useNavigation();

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <UserHomePageLocation />

      <SearchContainer searchText={"Search for Services"} />

      <View style={{ marginBottom: 20 }}>
        <View style={styles.categoryList}>
          <Text style={styles.txt}>Categories</Text>
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

      <CardsLayout serviceData={serviceData.slice(0, 4)} cardLayoutTitle={"Deals Of The Day"} title={"Deals"} />

      <View>
        <Text style={[styles.txt, { marginBottom: 15 }]}>
          New Services
        </Text>

        <Carousel />
      </View>

      <View style={{ marginBottom: 85 }}>
        <CardsLayout serviceData={serviceData.slice(0, 4)} cardLayoutTitle={"Recently Viewed Services"} title={"Recents"} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    paddingBottom: 150,
  },
  txt: {
    fontSize: 20
  },
  header: {
    marginTop: 35,
    fontSize: 20,
  },
  greetings: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
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
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 8
  },
  newServImg: {
    width: "100%",
    height: 200,
    marginTop: 15,

  }
});

export default HomeScreen;
