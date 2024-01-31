import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Customer/HomeScreen';
import MapScreen from '../../screens/Customer/MapScreen';
import ServiceGridScreen from '../../screens/Customer/ServicesGridScreen';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabStackU = () => {
    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
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
        <Tab.Screen name="Search" component={ServiceGridScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
        <Tab.Screen name="Profile" component={MapScreen} />
    </Tab.Navigator>
    );
};

export default TabStackU;