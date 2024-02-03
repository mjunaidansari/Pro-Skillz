import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LocationContext from '../context/LocationContext';

const UserHomePageLocation = ({ onPressLocation }) => {

    const { location } = useContext(LocationContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressLocation}>
                <View style={styles.locationContainer}>
                    <View style={styles.locationTextIcon}>
                        <Text style={styles.locationText}>
                            {location != null ? location[0].district : 'Fetching Location'}
                        </Text>
                        <Ionicons name="chevron-down" size={25} color="#3B37FF" />
                    </View>
                    <Text numberOfLines={1}>
                        {location != null ? location[0].formattedAddress : null}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="notifications-circle" size={40} color="#3B37FF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 10
    },
    locationContainer: {
        width: "90%",
        flexDirection: 'column',
        alignItems: "flex-start",
    },
    locationText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 5
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    locationTextIcon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});

export default UserHomePageLocation;
