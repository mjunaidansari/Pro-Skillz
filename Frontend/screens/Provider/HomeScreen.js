import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import BookedServicesContext from '../../context/BookedServicesContext';
import ServiceCard from '../../components/ServiceCard';
import SPPendingJobCard from '../../components/SPPendingJobCard';

const HomePage = () => {

    const { bookedServices, updateBookedServices } = useContext(BookedServicesContext);

    useEffect(() => {
        updateBookedServices();

    }, [])

    console.log("bks :", bookedServices);

    return (
        <View>
            <Text>Pending Tasks :</Text>

            {
                bookedServices == null
                    ?
                    <Text> No Pending Services</Text>
                    :
                    bookedServices.map((item) => {
                        return <SPPendingJobCard />
                    })
            }

        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})