import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View } from "react-native"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const RenderedItem = (props) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => { props.setOpenModal(true) }}>
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.itemName}>{props.item.itemID} - {props.item.itemName}</Text>
                <Text style={styles.itemQuantity}>{props.item.itemQuantity} {props.item.itemUnit} {props.item.type1 === "Üretim" ? "üretildi." : props.item.type1 === "Satış" ? " satıldı." : "satın alındı"}</Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <TouchableOpacity style={styles.button} onPress={() => { props.setOpenModal(false); props.setOpenDetails(props.item); }}>
                    <Ionicons name={"pencil"} size={16} color={"#414141"} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { props.deleteStockHandler(props.item.id) }}>
                    <Ionicons name={"trash"} size={16} color={"#414141"} />
                </TouchableOpacity>

                <Text style={styles.itemDate}>{props.item.date}</Text>
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
        justifyContent: "space-between",
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
    itemDate: {
        fontSize: 12,
        color: "#414141",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "gray",
        padding: 6,
        marginBottom: 4,
        width: 32,
        height: 32,
    },
})