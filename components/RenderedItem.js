import { Ionicons } from "@expo/vector-icons"
import React, { useContext } from "react"
import { View } from "react-native"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { ThemeContext } from "../ThemeProvider"
import darkColors from "../assets/colors/darkColors"
import lightColors from "../assets/colors/lightColors"

const RenderedItem = (props) => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const theme = isDarkMode ? darkColors : lightColors;

    return (
        <TouchableOpacity style={[styles.itemContainer, { borderColor: theme.Border, backgroundColor: theme.Container }]} onPress={() => { props.setOpenDetails(props.item); }}>
            <View style={{ flexDirection: "column" }}>
                <Text style={[styles.itemName, { color: theme.Text }]}>{props.item.itemID} - {props.item.itemName}</Text>
                <Text style={[styles.itemQuantity, { color: theme.Text }]}>{props.item.itemQuantity} {props.item.itemUnit} {props.item.type1 === "Üretim" ? "üretildi." : props.item.type1 === "Satış" ? " satıldı." : "satın alındı"}</Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>

                <TouchableOpacity style={[styles.button, { borderColor: theme.Border, backgroundColor: theme.Container }]} onPress={() => { props.deleteStockHandler(props.item.id) }}>
                    <Ionicons name={"trash"} size={16} color={theme.Text} />
                </TouchableOpacity>

                <Text style={[styles.itemDate, { color: theme.Text }]}>{props.item.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RenderedItem

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    itemQuantity: {
        fontSize: 16,
        marginLeft: 15,
    },
    itemDate: {
        fontSize: 12,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        padding: 6,
        marginBottom: 4,
        width: 32,
        height: 32,
    },
})