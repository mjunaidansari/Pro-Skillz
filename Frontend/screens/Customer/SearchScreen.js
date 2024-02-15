import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import SearchContext from '../../context/SearchContext';

const SearchScreen = () => {

    const { searchData } = useContext(SearchContext);

    console.log(searchData);

    return (
        <View style={styles.container}>
            <SearchBar />
            <View>
                {
                    searchData === null ?
                        <View style={styles.history}>
                            <Ionicons name="search" size={50} color="#3B37FF" />
                            <Text style={{ fontSize: 20, fontWeight: 500 }}>No Service Found</Text>
                        </View>

                        :

                        searchData.length === 0 ?
                            <View style={styles.history}>
                                <Ionicons name="search" size={50} color="#3B37FF" />
                                <Text style={{ fontSize: 20, fontWeight: 500 }}>Search Services</Text>
                            </View>

                            :

                            searchData.map((item, index) => {
                                return (
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        <View style={styles.searchRes} key={index}>
                                            <Image source={{ uri: `data:${item.icon.contentType};base64,${item.icon.data}` }} alt='service img' height={75} width={75} style={{ marginRight: 15 }} />
                                            <View>
                                                <Text style={{ fontSize: 20, fontWeight: 500 }}>
                                                    {item.name}
                                                </Text>
                                                {/* <View style={{ flexDirection: "row", marginVertical: 5 }}>
                                        <Ionicons name="star" size={15} color="#3B37FF" />
                                        <Text>
                                        {item.ra}
                                        </Text>
                                    </View> */}
                                            </View>
                                        </View>
                                    </ScrollView>
                                )
                            })
                }
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
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        top: -50
    },
    searchRes: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    }
})