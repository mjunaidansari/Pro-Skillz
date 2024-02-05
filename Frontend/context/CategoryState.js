import { useState, useEffect } from "react";
import CategoryContext from "./CategoryContext";
import { API_HOST } from "@env";


const CategoryState = (props) => {

    // const categoryInitial = []

    const [category, setCategory] = useState([]);
    const [catServices, setCatServices] = useState([]);

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

    const getAllServicesOfSpecificCategory = async (id) => {
        try {
            const response = await fetch(`${API_HOST}/api/serviceCategory/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const catSpecificServices = await response.json();

            setCatServices(catSpecificServices);

            // console.log("Cat Services", catServices);
        }
        catch (err) {
            console.log("Get Services of a Specific Categories error : ", err.message);
        }
    }


    return (
        <CategoryContext.Provider value={{ category, catServices, getAllCategories, getAllServicesOfSpecificCategory }}>
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoryState;