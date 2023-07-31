import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import { useTheme } from '../utils/ThemeProvider';

const Header = ({ text, func, iconName }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: theme.Text }]}>{text}</Text>

            <TouchableOpacity onPress={func} style={[styles.button, { borderColor: theme.Border }]}>
                <Ionicons name={iconName} size={32} color={theme.Icon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        width: "80%",
        paddingLeft: "30%"
    },
    button: {
        borderWidth: 1,
        borderRadius: 32,
        justifyContent: "flex-end",
    },
    icon: {
        padding: 5,
    }
})