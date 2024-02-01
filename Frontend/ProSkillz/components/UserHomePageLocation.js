import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserHomePageLocation = ({ location, userImage, onPressLocation, onPressUser }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressLocation}>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>
                        {location || 'Your Location'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressUser}>
                <Ionicons name="notifications-circle" size={40} color="#3B37FF" style={styles.notifIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    notifIcon: {
    }
});

export default UserHomePageLocation;
