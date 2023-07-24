import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View } from "react-native"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const RenderedItem = ({ item, setOpenModal, setOpenDetails }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => { setOpenModal(true) }}>
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.itemName}>{item.itemID} - {item.itemName}</Text>
                <Text style={styles.itemQuantity}>{item.itemQuantity} {item.itemUnit} {item.type1 === "Üretim" ? "üretildi." : item.type1 === "Satış" ? " satıldı." : "satın alındı"}</Text>
            </View>

            <View style={{ flexDirection: "column" }}>
                <TouchableOpacity style={styles.button} onPress={() => { setOpenModal(false); setOpenDetails(true); }}>
                    <Ionicons name={"pencil"} size={16} color={"#414141"} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Ionicons name={"trash"} size={16} color={"#414141"} />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}

export default RenderedItem

const styles = StyleSheet.create({
    itemContainer: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "lightgray",
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#414141",
    },
    itemQuantity: {
        fontSize: 16,
        color: "#414141",
        marginLeft: 15,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "gray",
        padding: 6,
        marginBottom: 4,
    },
    buttonText: {
        fontSize: 16,
        color: "#414141",
    },
})