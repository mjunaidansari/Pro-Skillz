import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_HOST } from "@env"

const SPPendingJobCard = (props) => {

    const { service } = props;

    const [getServiceInfo, setGetServiceInfo] = useState(null);

    useEffect(async () => {
        try {
            const response = await fetch(`${API_HOST}/api/service/${service.service}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const getService = await response.json();

            console.log(getService);

            setGetServiceInfo(getService)
        }
        catch (err) {
            console.log("Some error occured : ", err.message);
        }
    }, [])


    const renderServices = () => {
        if (getServiceInfo == null) {
            return <></>
        }
        else {
            return (
                <View style={styles.card}>
                    <Text>{getServiceInfo.name}</Text>
                    <Text>{getServiceInfo.description}</Text>
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

    }
})