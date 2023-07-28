import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { ThemeContext } from '../providers/ThemeProvider'
import darkColors from '../assets/colors/darkColors'
import lightColors from '../assets/colors/lightColors'
import { LanguageContext } from '../providers/LanguageProvider'
import turkish from '../assets/languages/turkish'
import english from '../assets/languages/english'
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get("screen");

const Settings = (props) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [checked1, setChecked1] = useState(isDarkMode ? "dark" : "light");
    const theme = isDarkMode ? darkColors : lightColors;

    const { language, toggleLanguage } = useContext(LanguageContext);
    const [checked2, setChecked2] = useState(language === "tr" ? "tr" : "en");
    const lingo = language === "tr" ? turkish : english;

    function changeThema() {
        toggleTheme();
        setChecked1(isDarkMode ? "light" : "dark");
    }

    function changeLanguage() {
        toggleLanguage();
        setChecked2(language === "tr" ? "en" : "tr");
    }

    function deleteAll() {
        props.setStockItems([]);
        props.setOpenModal(false);
    }

    function viewAll() {

    }

    return (
        <View style={[styles.container, { backgroundColor: theme.Background, borderColor: theme.Border }]}>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                <Text style={[styles.heading, {
                    color: theme.Text, width: "50%", marginLeft: "25%"
                }]}>{lingo.settings}</Text>

                <TouchableOpacity style={[styles.button, { width: width * 0.1, backgroundColor: theme.Button }]} onPress={() => { props.setOpenModal(false) }}>
                    <Ionicons name='close' size={width * 0.05} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.button, { backgroundColor: theme.Button }]}>
                <Text style={[styles.buttonText, {
                    color: theme.ButtonText,
                }]}>{lingo.ViewProductsAsList}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: theme.Button }]} onPress={deleteAll}>
                <Text style={[styles.buttonText, {
                    color: theme.ButtonText,
                }]}>{lingo.ClearStockCompletely}</Text>
            </TouchableOpacity>

            <View>
                <Text style={{ textAlign: "center", color: theme.Text, fontSize: 18, fontWeight: "700", }}>{lingo.ThemeColor}</Text>

                <View style={styles.radioButtonContainer}>
                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="light"
                            status={checked1 === "light" ? "checked" : "unchecked"}
                            onPress={changeThema} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>{lingo.light}</Text>
                    </View>

                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="dark"
                            status={checked1 === "dark" ? "checked" : "unchecked"}
                            onPress={changeThema} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>{lingo.dark}</Text>
                    </View>
                </View>

                <Text style={{ textAlign: "center", color: theme.Text, fontSize: 18, fontWeight: "700" }}>{lingo.ChangeLanguage}</Text>

                <View style={styles.radioButtonContainer}>
                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="tr"
                            status={checked2 === "tr" ? "checked" : "unchecked"}
                            onPress={changeLanguage} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>{lingo.Turkish}</Text>
                    </View>

                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="en"
                            status={checked2 === "en" ? "checked" : "unchecked"}
                            onPress={changeLanguage} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>{lingo.English}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Settings

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
        marginBottom: 15,
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