import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import UserProviderOpt from './screens/UserProviderOpt';
import SplashScreen from './screens/SplashScreen';
import MainStackU from './routes/user/MainStackU';
import MainStackP from './routes/provider/MainStackP';
import AuthState from './context/AuthState';

export default function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserorProvider, setIsUserorProvider] = useState(null);

  return (
    <AuthState>
      <NavigationContainer>
        {/* <SplashScreen /> */}

        {isLoggedIn == true ? isUserorProvider == true ? <MainStackU /> : <MainStackP /> : <UserProviderOpt />}

      </NavigationContainer>
    </AuthState>
  );
}



