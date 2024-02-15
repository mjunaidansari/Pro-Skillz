import { useState } from "react";
import SearchContext from "./SearchContext";


const SearchState = (props) => {

    const [searchData, setSearchData] = useState([]);

    const updateSearchData = (val) => {
        setSearchData(val);
    }

    return (
        <SearchContext.Provider value={{ searchData, updateSearchData }}>
            {props.children}
        </SearchContext.Provider>
    )

}

export default SearchState;