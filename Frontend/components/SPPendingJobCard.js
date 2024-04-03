import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_HOST } from "@env"
import { Ionicons } from '@expo/vector-icons';

const SPPendingJobCard = (props) => {

    const { service } = props;

    const [getServiceInfo, setGetServiceInfo] = useState(null);

    useEffect(() => {
        const getServiceInfo = async () => {
            try {
                const response = await fetch(`${API_HOST}/api/service/${service.service}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const getService = await response.json();

                // console.log(getService);

                setGetServiceInfo(getService)
            }
            catch (err) {
                console.log("Some error occured : ", err.message);
            }
        }
        getServiceInfo();
    }, [])


    const renderServices = () => {
        if (getServiceInfo == null) {
            return <></>
        }
        else {
            return (
                <View style={styles.card}>
                    <View style={styles.left}>
                        <Text>{getServiceInfo.name}</Text>
                        <View style={styles.dateTime}>
                            {
                                service.deliveryDates.map((item) => {
                                    date = new Date(item);

                                    // Format date (YYYY-MM-DD)
                                    formattedDate = new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit'
                                    }).format(date);

                                    // Format time (HH:MM:SS)
                                    formattedTime = new Intl.DateTimeFormat('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        hour12: false // Use 24-hour format
                                    }).format(date);

                                    return (
                                        <View>
                                            <Text>
                                                <Ionicons name="calendar-outline" size={20} color="#3B37FF" />
                                                {formattedDate}
                                                <Ionicons name="time-outline" size={20} color="#3B37FF" />
                                                {formattedTime}
                                            </Text>
                                        </View>
                                    );
                                })

                            }
                        </View>
                        <Text>{getServiceInfo.description}</Text>
                    </View>

                    <View>
                        <Image style={styles.servImg} resizeMode='contain' source={{ uri: `data:${getServiceInfo.image.contentType};base64,${getServiceInfo.image.data}` }} alt='service img' />
                    </View>
                </View>
            )
        }
    }

    return (
        renderServices()
    )
}

export default SPPendingJobCard

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#EDEDED"
    },
    left: {
        width: "60%"
    },
    servImg: {
        height: 100,
        width: 100,
    },
    dateTime: {
        marginVertical: 5
    }
})