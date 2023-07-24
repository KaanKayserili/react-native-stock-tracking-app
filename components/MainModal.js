import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MainModal = ({ setOpenModal, itemName, itemQuantity, itemUnit, checked1, checked2,
    stockItems, setItemName, setItemQuantity, setItemUnit, setChecked1, setChecked2, setStockItems, }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Ionicons name={"eye"} size={24} color={"#414141"} />
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Ionicons name={"pencil"} size={24} color={"#414141"} />
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Ionicons name={"trash"} size={24} color={"#414141"} />
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { justifyContent: "center" }]} onPress={() => { setOpenModal(false) }}>
                <Ionicons name={"close"} size={24} color={"#414141"} />
                <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainModal

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginLeft: "10%",
        flexDirection: "column",
        backgroundColor: "lightgray",
        borderRadius: 40,
        padding: 30,
        borderColor: "gray",
        borderWidth: 2,
        justifyContent: "space-around",
        marginTop: "60%",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 24,
        color: "#414141",
        marginLeft: 10,
    },
})