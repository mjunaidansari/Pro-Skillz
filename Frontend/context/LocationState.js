import { useState } from "react";
import LocationContext from "./LocationContext";


const LocationState = (props) => {

    const [location, setLocation] = useState(null);

    const updateLocation = (val) => {
        setLocation(val);
    }


    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {props.children}
        </LocationContext.Provider>
    )

}

export default LocationState;