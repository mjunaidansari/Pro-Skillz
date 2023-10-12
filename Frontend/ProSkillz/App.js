import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import UserProviderOpt from './screens/Other/UserProviderOpt';
import SplashScreenC from './screens/Other/SplashScreenC';
import MainStackU from './routes/user/MainStackU';
import MainStackP from './routes/provider/MainStackP';
import AuthState from './context/AuthState';
import {
  Inter_700Bold,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // true -  


  const updateAuthState = () => {

  }

  const [isUserorProvider, setIsUserorProvider] = useState(null);

  if (!fontsLoaded) {
    return null;
  }
  else {
    SplashScreen.hideAsync()
  }
  return (
    <View style={styles.container}>
      <AuthState>
        <NavigationContainer>
          {/* <SplashScreen /> */}

          {isLoggedIn == true ? isUserorProvider == true ? <MainStackU /> : <MainStackP /> : <UserProviderOpt />}

        </NavigationContainer>
      </AuthState>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  }
})


//9653313082