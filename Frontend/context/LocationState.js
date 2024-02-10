import { useState } from "react";
import LocationContext from "./LocationContext";


const LocationState = (props) => {

    const initialLL = {
        lat: "",
        long: ""
    }

    const [location, setLocation] = useState(null);
    const [longLat, setLongLat] = useState(initialLL);

    // console.log(longLat);

    return (
        <LocationContext.Provider value={{ location, setLocation, setLongLat }}>
            {props.children}
        </LocationContext.Provider>
    )

}

export default LocationState;