import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import AuthState from './context/AuthState';
import {
  Inter_700Bold,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, StyleSheet, View } from 'react-native';
import LocationState from './context/LocationState';
import CategoryState from './context/CategoryState';
import CallInApp from "./CallInApp";
import CartState from './context/CartState';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
  });


  useEffect(() => {

    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare()
  }, [])

  const client = new ApolloClient({
    uri: 'http://192.168.29.78:4000/',
    cache: new InMemoryCache(),
  });

  if (!fontsLoaded) {
    return null;
  }
  else {
    SplashScreen.hideAsync()
  }
  return (
    <View style={styles.container}>
      <AuthState>
        <ApolloProvider client={client}>
          <LocationState>
            <CategoryState>
              <CartState>
                <NavigationContainer>
                  {/* <SplashScreen /> */}

                  <CallInApp />
                </NavigationContainer>
              </CartState>
            </CategoryState>
          </LocationState>
        </ApolloProvider>
      </AuthState>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight || 0,
  }
})


//9653313082