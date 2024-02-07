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


  if (!fontsLoaded) {
    return null;
  }
  else {
    SplashScreen.hideAsync()
  }
  return (
    <View style={styles.container}>
      <AuthState>
        <LocationState>
          <CategoryState>
            <NavigationContainer>
              {/* <SplashScreen /> */}

              <CallInApp />
            </NavigationContainer>
          </CategoryState>
        </LocationState>
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