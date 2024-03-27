import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import BookedServicesContext from '../../context/BookedServicesContext';
import ServiceCard from '../../components/ServiceCard';
import SPPendingJobCard from '../../components/SPPendingJobCard';

const HomePage = () => {

    const { bookedServices, updateBookedServices } = useContext(BookedServicesContext);

    const [pendingJobs, setPendingJobs] = useState(null);


    useEffect(() => {
        updateBookedServices();

    }, [])

    useEffect(() => {
        if (bookedServices) {
            const filterPendingJobs = bookedServices.filter(service => service.status === "Pending");
            console.log("GETPJ :", filterPendingJobs);
            setPendingJobs(filterPendingJobs);
        }
    }, [bookedServices])

    return (
        <View>
            <Text>Pending Tasks :</Text>

            {
                pendingJobs
                    ?
                    pendingJobs.map((service) => {
                        return <SPPendingJobCard service={service} />
                    })
                    :
                    <Text>No Pending Jobs</Text>
            }

        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})