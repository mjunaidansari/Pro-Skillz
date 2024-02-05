import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Customer/HomeScreen';

import { Ionicons } from '@expo/vector-icons';
import UserProfileScreen from '../../screens/Customer/UserProfileScreen';
import AllCategoryScreen from '../../screens/Customer/AllCategoryScreen';

const Tab = createBottomTabNavigator();

const TabStackU = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Category') {
                        iconName = focused ? 'apps' : 'apps-outline';
                    } else if (route.name === 'UserProfile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color="#3B37FF" />;
                },
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    marginBottom: 20,
                    marginHorizontal: 18,
                    borderRadius: 18
                },
                tabBarShowLabel: false


            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Category" component={AllCategoryScreen} />
            <Tab.Screen name="UserProfile" component={UserProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabStackU;