import { useState } from "react";
import AuthContext from "./AuthContext";


const AuthState = (props) => {

    const [authType, setAuthType] = useState(null);

    const updateAuthState = (val) => {
        setAuthType(val);
    }


    return (
        <AuthContext.Provider value={{ authType, updateAuthState }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;