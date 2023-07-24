import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const RenderedItem = ({ item, setOpenModal }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => { setOpenModal(true) }}>
            <Text style={styles.itemName}>{item.id} - {item.name}</Text>
            <Text style={styles.itemQuantity}>{item.quantity} {item.unit} {item.type === "Üretim" ? "üretildi." : item.type === "Satış" ? " satıldı." : "satın alındı"}</Text>
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
})