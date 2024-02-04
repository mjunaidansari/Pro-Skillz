import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import MainStackU from './routes/user/MainStackU';
import MainStackP from './routes/provider/MainStackP';
import AuthState from './context/AuthState';
import {
  Inter_700Bold,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, StyleSheet, View } from 'react-native';
import UserProviderOpt from './screens/Other/UserProviderOpt';
import TabStackU from './routes/user/TabStackU';
import AuthStackU from './routes/Other/AuthStackU';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocationState from './context/LocationState';
import CategoryState from './context/CategoryState';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare()

    if (AsyncStorage.getItem("loggedUser")) {
      setIsLoggedIn(true)
    }

  }, [])

  const checkLoggedInOrNot = () => {
    if (isLoggedIn == null) {
      return (
        <UserProviderOpt />
      )
    }
    else if (isLoggedIn == true) {
      return (
        <MainStackU />
      )
    }
    else if (isLoggedIn == false) {
      return (
        <MainStackP />
      )
    }
  }


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

              {/* {isLoggedIn == true ? isUserorProvider == true ? <MainStackU /> : <MainStackP /> : <UserProviderOpt />} */}

              {checkLoggedInOrNot()}

              {/* <MainStackU /> */}
              {/* <TabStackU /> */}

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