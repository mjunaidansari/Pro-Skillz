import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { API_HOST } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartState = (props) => {

    const [cart, setCart] = useState([]);
    const [cartService, setCartService] = useState([]);


    // const updateCartState = (val) => {
    //     setCart(val);
    // }

    const getAllServicesFromCart = async () => {
        try {

            const tokenG = await JSON.parse(await AsyncStorage.getItem("loggedUser"));

            const response = await fetch(`${API_HOST}/api/carts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenG.token}`
                }
            });

            const allServices = await response.json();

            setCart(allServices);

            // console.log("All cart services:", allServices);
        }
        catch (err) {
            console.log("Get all Services from cart error : ", err.message);
        }
    }


    // const getCartServiceInfo = async (service_id) => {
    //     try {
    //         const response = await fetch(`${API_HOST}/api/service/${service_id}`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             }
    //         });

    //         const getService = await response.json();

    //         setCartService(getService);

    //         console.log("Cart Service info :", getService);
    //     }
    //     catch (err) {
    //         console.log("Get Cart Service info error : ", err.message);
    //     }
    // }

    return (
        <CartContext.Provider value={{ cart, getAllServicesFromCart }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartState;