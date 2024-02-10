import { useState, useEffect } from "react";
import CategoryContext from "./CategoryContext";
import { API_HOST } from "@env";
// import { gql, useQuery } from '@apollo/client';


const CategoryState = (props) => {

    // const GET_SERVICES = gql`
    // query GetServiceCards($serviceCategoryName: String!, $coordinates: [Float]!) {
    //   getServiceCards(serviceCategoryName: $serviceCategoryName) {
    //     id
    //     provider
    //     name
    //     description
    //     serviceCharge
    //     rating
    //     image {
    //       data
    //       contentType
    //     }
    //     providerName
    //     location {
    //       type
    //       coordinates
    //     }
    //     distance(coordinates: $coordinates)
    //   }
    // }`;


    const [category, setCategory] = useState([]);
    const [catServices, setCatServices] = useState([]);
    const [reviews, setReviews] = useState([]);

    const getAllCategories = async () => {

        try {
            const response = await fetch(`${API_HOST}/api/serviceCategory`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const allCategories = await response.json();

            setCategory(allCategories);
        }
        catch (err) {
            console.log("Get all Categories error : ", err.message);
        }
    }

    // const getAllServicesOfSpecificCategory = async (id) => {
    //     try {
    //         const response = await fetch(`${API_HOST}/api/serviceCategory/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             }
    //         });

    //         const catSpecificServices = await response.json();

    //         setCatServices(catSpecificServices);

    //         // console.log("Cat Services", catServices);
    //     }
    //     catch (err) {
    //         console.log("Get Services of a Specific Categories error : ", err.message);
    //     }
    // }

    // const getAllServicesOfSpecificCategory = (name) => {
    //     let serviceCategoryName = "Plumber";
    //     let coordinates = [19.1203662, 72.8543215];

    //     const { loading, error, data } = useQuery(GET_SERVICES, {
    //         variables: { serviceCategoryName, coordinates }
    //     })

    //     console.log("Working");

    //     console.log("Graphql res : ", data);
    // }

    const getSpecificServiceReviews = async (id) => {
        try {
            const response = await fetch(`${API_HOST}/api/review/service/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const serviceReview = await response.json();

            setReviews(serviceReview);

            // console.log("Cat Services", catServices);
        }
        catch (err) {
            console.log("Get review of a specific service error : ", err.message);
        }
    }


    return (
        <CategoryContext.Provider value={{ category, catServices, getAllCategories, reviews, getSpecificServiceReviews }}>
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoryState;