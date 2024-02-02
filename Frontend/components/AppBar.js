import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserProfileHeader = () => {
  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginTop: 30,
      // padding: 10,
      }}>
      {/* Left side (Hamburger icon) */}
      <TouchableOpacity>
        <Ionicons name="ios-menu" size={30} color="#333" />
      </TouchableOpacity>

      {/* Right side (User profile icon) */}
      <TouchableOpacity>
        <Ionicons name="ios-person" size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileHeader;
