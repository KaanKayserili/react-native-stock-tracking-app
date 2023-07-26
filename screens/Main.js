import React, { useState } from "react";
import { FlatList, Image, Modal, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Details from "../components/Details";
import FormContainer from "../components/FormContainer";
import RenderedItem from "../components/RenderedItem";

const Main = () => {

    const [openDetails, setOpenDetails] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [itemID, setItemID] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemUnit, setItemUnit] = useState("bos");
    const [checked1, setChecked1] = useState("Satın Alma");
    const [checked2, setChecked2] = useState("hammadde");
    const [stockItems, setStockItems] = useState([]);

    function deleteStockHandler(id) {
        setStockItems(prevStockItems => {
            const newStockItems = prevStockItems.filter(item => item.id !== id);
            return newStockItems;
        });
    }


    function handleAddItem() {
        let date = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();

        if (itemID !== "" && itemName !== "" && itemQuantity !== "" && itemUnit !== "bos") {
            setStockItems(prevStockItems => [...prevStockItems,
            {
                id: Math.random().toString(), itemID: itemID, itemName: itemName, itemQuantity: itemQuantity,
                itemUnit: itemUnit, type1: checked1, type2: checked2, date: date
            }]);

            setItemID("");
            setItemName("");
            setItemQuantity("");
            setItemUnit("bos");
        }
        else {
            alert("Lütfen Bilgileri Tam Giriniz.");
        }
    }

    const openWebsite = async () => {
        const websiteURL = "https://www.github.com/KaanKayserili";
        Linking.canOpenURL(websiteURL).then((supported) => {
            if (supported) {
                return Linking.openURL(websiteURL);
            } else {
                console.log("error")
            }
        }).catch((error) => console.error("An error occurred: ", error))
    }

    return (
        <View style={styles.container}>

            <Modal visible={openDetails === false ? false : true} transparent={true} animationType={"slide"}>
                <Details openDetails={openDetails} setOpenDetails={setOpenDetails} stockItems={stockItems} setStockItems={setStockItems} />
            </Modal>

            <View>
                <TouchableOpacity onPress={openWebsite}>
                    <Image source={require("../assets/image.png")} style={styles.logo} />
                </TouchableOpacity>

                <Text style={styles.heading}>Stok Takip Uygulaması</Text>
            </View>

            <FlatList
                data={stockItems}
                refreshing={true}
                showsVerticalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                ListHeaderComponentStyle={{ paddingHorizontal: 20 }}
                ListHeaderComponent={
                    <View>
                        <FormContainer setChecked2={setChecked2} checked2={checked2} checked1={checked1} setChecked1={setChecked1}
                            itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} itemUnit={itemUnit} setItemUnit={setItemUnit}
                            itemName={itemName} setItemName={setItemName} itemID={itemID} setItemID={setItemID} />

                        <TouchableOpacity style={styles.button} onPress={handleAddItem} >
                            <Text style={styles.buttonText}>Stok Kartı Ekle</Text>
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => (
                    <RenderedItem item={item} setOpenModal={setOpenModal} setOpenDetails={setOpenDetails} deleteStockHandler={deleteStockHandler} />
                )}
                ListFooterComponent={
                    stockItems.length > 0 ?
                        <Text style={{ textAlign: "center", color: "#515151" }}>End of List</Text>
                        : null}
                keyExtractor={(item) => { return item.id.toString() }}
            />
        </View>
    );
};
export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "white",
    },
    logo: {
        height: 102.2,
        aspectRatio: 1,
        resizeMode: 'contain',
        alignSelf: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#414141",
        textAlign: "center",
        marginTop: -20,
    },
    button: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#414141",
        textAlign: "center",
    },
});