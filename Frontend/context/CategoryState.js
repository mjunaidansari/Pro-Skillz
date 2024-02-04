import { useState, useEffect } from "react";
import CategoryContext from "./CategoryContext";
import { API_HOST } from "@env";


const CategoryState = (props) => {

    // const categoryInitial = []

    const [category, setCategory] = useState([]);

    const getAllCategories = async () => {

        try {
            const response = await fetch(`http://192.168.29.78:5000/api/serviceCategory`, {
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


    return (
        <CategoryContext.Provider value={{ category, getAllCategories }}>
            {props.children}
        </CategoryContext.Provider>
    )

}

export default CategoryState;