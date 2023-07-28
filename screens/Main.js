import React, { useContext, useState } from "react";
import { Dimensions, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import darkColors from "../assets/colors/darkColors";
import lightColors from "../assets/colors/lightColors";
import english from "../assets/languages/english";
import turkish from "../assets/languages/turkish";
import AreYouSure from "../components/AreYouSure";
import FormContainer from "../components/FormContainer";
import RenderedItem from "../components/RenderedItem";
import { LanguageContext } from "../providers/LanguageProvider";
import { ThemeContext } from "../providers/ThemeProvider";
import Details from "./Details";
import PopUp from "./Settings";

const { width, height } = Dimensions.get("screen");

const Main = () => {

    const { language, toggleLanguage } = useContext(LanguageContext);
    const lingo = language === "tr" ? turkish : english;

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
                            <Text style={[styles.buttonText, { color: theme.ButtonText }]}>{lingo.AddStockCard}</Text>
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => (
                    <RenderedItem item={item} setOpenDetails={setOpenDetails} deleteStockHandler={deleteStockHandler} />
                )}
                ListFooterComponent={
                    stockItems.length > 0 ?
                        <Text style={{ textAlign: "center", color: theme.Unneccessary }}>{lingo.EndOfList}</Text>
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