import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

import darkColors from '../assets/colors/darkColors'
import lightColors from '../assets/colors/lightColors'
import english from '../assets/languages/english'
import turkish from '../assets/languages/turkish'

import Button from '../components/Button'
import Header from '../components/Header'

import { useItems } from '../utils/ItemsProvider'
import { useLanguage } from '../utils/LanguageProvider'
import { useTheme } from '../utils/ThemeProvider'

const Settings = ({ navigation, }) => {

    const { items, setItems } = useItems();

    const { isDarkMode, setIsDarkMode } = useTheme();
    const [checked1, setChecked1] = useState(isDarkMode === "true" ? "true" : "false");
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    const { language, setLanguage } = useLanguage();
    const [checked2, setChecked2] = useState(language === "tr" ? "tr" : "en");
    const lingo = language === "tr" ? turkish : english;

    function changeTheme() {
        setChecked1(isDarkMode === "true" ? "false" : "true");
        setIsDarkMode(isDarkMode === "true" ? "false" : "true");
    }

    function goMain() {
        navigation.navigate("Main", {})
    }

    function changeLanguage() {
        setChecked2(language === "tr" ? "en" : "tr");
        setLanguage(language === "tr" ? "en" : "tr");
    }

    function deleteAll() {
        setItems([]);
        navigation.navigate("Main");
    }

    function viewExchange() {

    }

    function goQuit() {
        alert("Başarıyla çıkış yapıldı.");
        navigation.navigate("Login");
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.Background }]}>

            <Header text={lingo.Settings} func={goMain} iconName={"close"} />

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
                            value="false"
                            status={checked1 === "false" ? "checked" : "unchecked"}
                            onPress={changeTheme} color={theme.Radio} uncheckedColor={theme.Radio}
                        />
                        <Text style={[styles.buttonText, {
                            color: theme.Text,
                        }]}>{lingo.light}</Text>
                    </View>

                    <View style={styles.radioButtonItem}>
                        <RadioButton
                            value="true"
                            status={checked1 === "true" ? "checked" : "unchecked"}
                            onPress={changeTheme} color={theme.Radio} uncheckedColor={theme.Radio}
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

            <Button handleSubmit={goQuit} text={lingo.Quit} width={"40%"} marginLeft={"30%"} />
        </View >
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
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