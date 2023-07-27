import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { ThemeContext } from '../ThemeProvider'
import darkColors from '../assets/colors/darkColors'
import lightColors from '../assets/colors/lightColors'

const { width, height } = Dimensions.get("screen");

const PopUp = (props) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const [checked, setChecked] = useState(isDarkMode ? "dark" : "light");

    const theme = isDarkMode ? darkColors : lightColors;

    function changeThema() {
        toggleTheme();
        setChecked(isDarkMode ? "light" : "dark")
    }

    function deleteAll() {
        props.setStockItems([]);
        props.setOpenModal(false);
    }

    function viewAll() {

    }

    return (
        <View style={[styles.container, { backgroundColor: theme.Background, borderColor: theme.Border }]}>
            <Text style={[styles.heading, {
                color: theme.Text,
            }]}>Ayarlar</Text>

            <TouchableOpacity style={[styles.button, { backgroundColor: theme.Button }]}>
                <Text style={[styles.buttonText, {
                    color: theme.ButtonText,
                }]}>Ürünleri Liste Olarak Gör</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: theme.Button }]} onPress={deleteAll}>
                <Text style={[styles.buttonText, {
                    color: theme.ButtonText,
                }]}>Stoğu Tamamen Temizle</Text>
            </TouchableOpacity>

            <View>
                <Text style={{ textAlign: "center", color: theme.Text }}>Tema Rengi</Text>

                <View style={styles.radioButtonContainer}>
                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="light"
                            status={checked === "light" ? "checked" : "unchecked"}
                            onPress={changeThema} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>Light</Text>
                    </View>

                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="dark"
                            status={checked === "dark" ? "checked" : "unchecked"}
                            onPress={changeThema} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>Dark</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PopUp

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1.5,
        padding: 20,
        width: width * 0.7,
        marginLeft: width * 0.15,
        marginTop: height * 0.3,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    radioButtonItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
})