import { useState } from "react";
import AuthContext from "./AuthContext";


const AuthState = (props) => {

    const [authType, setAuthType] = useState(null);
    const [afterLoginU, setAfterLoginU] = useState(false);
    const [afterLoginS, setAfterLoginS] = useState(false);

    const updateAuthState = (val) => {
        setAuthType(val);
    }
    const updateLoginStateU = (val) => {
        setAfterLoginU(val);
    }
    const updateLoginStateS = (val) => {
        setAfterLoginS(val);
    }

    return (
        <AuthContext.Provider value={{ authType, updateAuthState, afterLoginU, updateLoginStateU, afterLoginS, updateLoginStateS }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;