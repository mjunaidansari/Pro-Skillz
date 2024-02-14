import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                    Recents
                </Text>

                {/* <View style={styles.history}>
                    <MaterialIcons name="history" size={24} color="black" style={{ marginRight: 10 }} />
                    <Text>Salon</Text>
                </View> */}

                <View style={styles.searchRes}>
                    <Image source={require("../../assets/idli.png")} alt='service img' height={75} width={75} style={{ marginRight: 15 }} />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>
                            Service Name
                        </Text>
                        <View style={{ flexDirection: "row", marginVertical: 5 }}>
                            <Ionicons name="star" size={15} color="#3B37FF" />
                            <Text>
                                4.5
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16
    },
    history: {
        flexDirection: "row",
        marginVertical: 5
    },
    searchRes: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    }
})