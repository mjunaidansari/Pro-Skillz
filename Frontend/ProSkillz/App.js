import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AuthStack from './routes/AuthStack';
import TabStack from './routes/TabStack';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn == true ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
}



