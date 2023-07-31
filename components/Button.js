import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useLanguage } from '../utils/LanguageProvider';
import english from '../assets/languages/english';
import turkish from '../assets/languages/turkish';
import { useTheme } from '../utils/ThemeProvider';
import lightColors from '../assets/colors/lightColors';
import darkColors from '../assets/colors/darkColors';

const Button = (props) => {

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    return (
        <TouchableOpacity style={[styles.button, { width: props.width, marginLeft: props.marginLeft, backgroundColor: theme.Button, borderColor: theme.Border, }]} onPress={props.handleSubmit}>
            <Text style={[styles.buttonText, { fontSize: 20, color: theme.ButtonText }]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        borderWidth: 1,
    },
    buttonText: {
        fontWeight: "500",
        textAlign: "center"
    },
})