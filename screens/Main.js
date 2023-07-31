import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import darkColors from "../assets/colors/darkColors";
import lightColors from "../assets/colors/lightColors";
import english from "../assets/languages/english";
import turkish from "../assets/languages/turkish";

import AreYouSure from "../components/AreYouSure";
import Button from "../components/Button";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";

import { Ionicons } from "@expo/vector-icons";
import { useItems } from "../utils/ItemsProvider";
import { useLanguage } from "../utils/LanguageProvider";
import { useTheme } from "../utils/ThemeProvider";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
    const { items, setItems } = useItems();

    const navigation = useNavigation();

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    const [openAreYouSure, setOpenAreYouSure] = useState(false);

    const [itemID, setItemID] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemUnit, setItemUnit] = useState("bos");
    const [checked1, setChecked1] = useState("Satın Alma");
    const [checked2, setChecked2] = useState("hammadde");

    function deleteStockHandler(id) {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    }

    function handleAddItem() {
        let date = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();

        if (itemID !== "" && itemName !== "" && itemQuantity !== "" && itemUnit !== "bos") {
            if (parseInt(itemQuantity) > 0) {
                const newObject = {
                    id: (Math.random().toString()), itemID: itemID, itemName: itemName, itemQuantity: itemQuantity,
                    itemUnit: itemUnit, type1: checked1, type2: checked2, date: date
                };

                let array = [...items];
                array.push(newObject)
                setItems(array);

                setItemID("");
                setItemName("");
                setItemQuantity("");
                setItemUnit("bos");
            }
            else {
                alert(lingo.QuantityError)
            }
        }
        else {
            alert(lingo.EmptyInputError);
        }
    }

    const handleDeleteStock = (id) => {
        deleteStockHandler(id);
    };


    return (
        <View style={[styles.container, { backgroundColor: theme.Background, }]}>

            <Modal visible={openAreYouSure} transparent={true} animationType={"slide"}>
                <AreYouSure setOpenAreYouSure={setOpenAreYouSure} />
            </Modal>

            <Header text={lingo.Main} func={() => navigation.navigate("Settings")} iconName={"options"} />

            <FlatList
                data={items}
                refreshing={true}
                showsVerticalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                ListHeaderComponentStyle={{ paddingHorizontal: 20 }}
                ListHeaderComponent={
                    <View>
                        <FormContainer setChecked2={setChecked2} checked2={checked2} checked1={checked1} setChecked1={setChecked1}
                            itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} itemUnit={itemUnit} setItemUnit={setItemUnit}
                            itemName={itemName} setItemName={setItemName} itemID={itemID} setItemID={setItemID} />

                        <Button handleSubmit={handleAddItem} text={lingo.AddStockCard} width={"60%"} marginLeft={"20%"} />
                    </View>
                }
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={[styles.itemContainer, { borderColor: theme.Border, backgroundColor: theme.Container }]}
                        onPress={() => {
                            navigation.navigate("Details", {
                                id: item?.id, itemID: item?.itemID, itemName: item?.itemName, itemQuantity: item?.itemQuantity,
                                itemUnit: item?.itemUnit, checked1: item?.type1, checked2: item?.type2, setChecked2: setChecked2,
                                setChecked1: setChecked1,
                                setItemQuantity: setItemQuantity,
                                setItemUnit: setItemUnit,
                                setItemName: setItemName,
                                setItemID: setItemID,
                            });
                        }}
                    >

                        <View style={{ flexDirection: "column" }}>
                            <Text style={[styles.itemName, { color: theme.Text }]}>{item.itemID} - {item.itemName}</Text>

                            {language === "tr" ?
                                <Text style={[styles.itemQuantity, { color: theme.Text }]}>
                                    {item.itemQuantity} {item.itemUnit} {item.type1 === "Üretim" ? lingo.Product.toLowerCase() : item.type1 === "Satış" ? " " + lingo.Sales.toLowerCase() + "." : " " + lingo.Buy.toLowerCase() + "."}
                                </Text> :
                                <Text style={[styles.itemQuantity, { color: theme.Text }]}>
                                    {item.itemQuantity} {item.itemUnit} were {item.type1 === "Üretim" ? lingo.Product.toLowerCase() : item.type1 === "Satış" ? lingo.Sales.toLowerCase() + "." : lingo.Buy.toLowerCase() + "."}
                                </Text>
                            }
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>

                            <TouchableOpacity
                                style={[styles.buttonRenderedItem, { borderColor: theme.Border, backgroundColor: theme.Container }]}
                                onPress={() => handleDeleteStock(item.id)}
                            >
                                <Ionicons name={"trash"} size={16} color={theme.Text} />
                            </TouchableOpacity>

                            <Text style={[styles.itemDate, { color: theme.Text }]}>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListFooterComponent={
                    items === null ?
                        <Text style={{ textAlign: "center", color: theme.Unneccessary }}>{lingo.EndOfList}</Text>
                        : null
                }
                keyExtractor={(item) => { return item.id }}
            />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
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
    buttonRenderedItem: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        padding: 6,
        marginBottom: 4,
        width: 32,
        height: 32,
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