import { View, Text, TouchableOpacity, StyleSheet, ScrollView, LogBox } from 'react-native'
import React, { useContext, useState } from 'react'
import SignUpP from '../../assets/icons/SignUpP.svg'
import InputF from '../../components/InputF'
import ButtonsPS from '../../components/ButtonsPS'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../context/AuthContext'
import DropDownPicker from 'react-native-dropdown-picker';

LogBox.ignoreAllLogs();

const SignUp = () => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Laundary', value: 'apple' },
        { label: 'Cleaning', value: 'Cleaning' },
        { label: 'MakeUp', value: 'MakeUp' },
        { label: 'Repairs', value: 'Repairs' },
        { label: 'Plumbing', value: 'Plumbing' },
        { label: 'Saloon', value: 'Saloon' },
        { label: 'Moving', value: 'Moving' },
        { label: 'Caterers', value: 'Caterers' },
        { label: 'AirConditioning', value: 'Air Conditioning' },
        { label: 'Furniture', value: 'Furniture' },
    ]);

    const { updateLoginStateS } = useContext(AuthContext);

    const updateState = (val) => {
        updateLoginStateS(val)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerM}>
                <ScrollView contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <SignUpP />
                    <Text style={styles.txt}>SignUp</Text>

                    <View>
                        <View style={styles.inpF}>
                            <InputF title="First Name" />
                        </View>
                        <View style={styles.inpF}>
                            <InputF title="Last Name" />
                        </View>
                        <View style={styles.inpF}>
                            <InputF title="Phone" inpM="tel" />
                        </View>
                        <View style={styles.inpF}>
                            <DropDownPicker
                                style={{ backgroundColor: "transparent" }}
                                placeholder='Category'
                                placeholderStyle={{ opacity: 0.55, marginLeft: 7 }}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </View>
                        <View style={styles.inpF}>
                            <InputF title="Email" inpM="email" />
                        </View>
                        <View style={styles.inpF}>
                            <InputF title="Password" password={true} />
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={() => updateState(true)}>
                            <ButtonsPS title="Sign Up" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                            <Text style={styles.txtL}>
                                Already have an account ? Log in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    containerM: {
        width: "90%",
        height: "100%",
    },

    inps: {
        borderWidth: 10,
    },

    inpF: {
        marginTop: 7,
        marginBottom: 7,
        position: "relative"
    },

    btn: {
        marginTop: 7,
        marginBottom: 7
    },

    txt: {
        textAlign: "center",
        fontFamily: "Inter_700Bold",
        fontSize: 27,
        margin: 10
    },

    txtL: {
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15
    }

})