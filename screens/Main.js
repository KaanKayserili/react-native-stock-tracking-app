import React, { useContext, useState } from "react";
import { FlatList, Image, Modal, Linking, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import Details from "../components/Details";
import FormContainer from "../components/FormContainer";
import RenderedItem from "../components/RenderedItem";
import PopUp from "../components/PopUp";
import lightColors from "../assets/colors/lightColors";
import darkColors from "../assets/colors/darkColors";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../ThemeProvider";
import AreYouSure from "../components/AreYouSure";

const { width, height } = Dimensions.get("screen");

const Main = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const theme = isDarkMode ? darkColors : lightColors;

    const [openDetails, setOpenDetails] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openAreYouSure, setOpenAreYouSure] = useState(false);

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
        <View style={[styles.container, { backgroundColor: theme.Background, }]}>

            <Modal visible={openDetails === false ? false : true} transparent={true} animationType={"slide"}>
                <Details openDetails={openDetails} setOpenDetails={setOpenDetails} setStockItems={setStockItems} />
            </Modal>

            <Modal visible={openModal} transparent={true} animationType={"slide"}>
                <PopUp setOpenModal={setOpenModal} setStockItems={setStockItems} />
            </Modal>

            <Modal visible={openAreYouSure} transparent={true} animationType={"slide"}>
                <AreYouSure setOpenModal={setOpenModal} setStockItems={setStockItems} />
            </Modal>

            <View>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: width * 0.2718, marginBottom: height * 0.04 }}>
                    <TouchableOpacity onPress={openWebsite}>
                        <Image source={isDarkMode ? require("../assets/darkModeLogo.png") : require("../assets/lightModeLogo.png")} style={styles.logo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setOpenModal(true) }} style={[styles.button, { paddingVertical: 10, paddingHorizontal: 10, backgroundColor: theme.Background, borderColor: theme.Border }]}>
                        <Ionicons name={"options"} size={width * 0.07} color={theme.Icon} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.heading, { color: theme.Text }]}>Stok Takip Uygulaması</Text>
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

                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.Button, borderColor: theme.Border }]} onPress={handleAddItem} >
                            <Text style={[styles.buttonText, { color: theme.ButtonText }]}>Stok Kartı Ekle</Text>
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => (
                    <RenderedItem item={item} setOpenDetails={setOpenDetails} deleteStockHandler={deleteStockHandler} />
                )}
                ListFooterComponent={
                    stockItems.length > 0 ?
                        <Text style={{ textAlign: "center", color: theme.Unneccessary }}>End of List</Text>
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
    },
    logo: {
        width: width * 0.4564,
        height: width * 0.2044,
        resizeMode: 'contain',
        alignSelf: "center",
        marginRight: width * 0.1118,
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        marginTop: -20,
    },
    button: {
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});