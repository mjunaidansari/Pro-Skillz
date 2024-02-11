import { useState } from "react";
import LocationContext from "./LocationContext";


const LocationState = (props) => {

    const [location, setLocation] = useState(null);
    const [longLat, setLongLat] = useState([]);

    // console.log(location[0].formattedAddress);

    return (
        <LocationContext.Provider value={{ location, setLocation, setLongLat, longLat }}>
            {props.children}
        </LocationContext.Provider>
    )

}

export default LocationState;