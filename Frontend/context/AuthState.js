import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthState = (props) => {

    // useEffect(() => {
    //     async function check() {
    //         if (await AsyncStorage.getItem("loggedUser") != null) {
    //             updateDirectLogin(true);
    //         }
    //     }
    //     check();

    // }, [])

    const [directLogin, setDirectLogin] = useState(true);
    const [authType, setAuthType] = useState(null); // true
    const [afterLoginU, setAfterLoginU] = useState(false); //true
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
    const updateDirectLogin = (val) => {
        setDirectLogin(val);
    }

    return (
        <AuthContext.Provider value={{ authType, updateAuthState, afterLoginU, updateLoginStateU, afterLoginS, updateLoginStateS, directLogin, updateDirectLogin }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;