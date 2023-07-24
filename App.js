import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
import MainModal from "./components/MainModal";
import Details from "./components/Details";
import RenderedItem from "./components/RenderedItem";
import { ScrollView } from "react-native";
const App = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [itemID, setItemID] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemUnit, setItemUnit] = useState("bos");
  const [checked1, setChecked1] = useState("Satın Alma");
  const [checked2, setChecked2] = useState("hammadde");
  const [date, setDate] = useState(new Date());
  const [stockItems, setStockItems] = useState([]);

  const handleAddItem = () => {
    setDate((new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString());
    console.log((new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString())

    if (itemID !== "" && itemName !== "" && itemQuantity !== "" && itemUnit !== "bos") {
      setStockItems(prevStockItems => [...prevStockItems, { id: itemID, name: itemName, quantity: itemQuantity, unit: itemUnit, type: checked1 }]);
      // setItemID("");
      // setItemName("");
      // setItemQuantity("");
      // setItemUnit("");
    }
    else {
      alert("Lütfen Bilgileri Tam Giriniz.");
    }
  };

  return (
    <View style={styles.container}>

      <Modal visible={openModal} transparent={true} animationType={"slide"}>
        <MainModal setOpenDetails={setOpenDetails} setOpenModal={setOpenModal} itemName={itemName} setItemName={setItemName} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
          itemUnit={itemUnit} setItemUnit={setItemUnit} checked1={checked1} setChecked1={setChecked1} checked2={checked2} setChecked2={setChecked2}
          stockItems={stockItems} setStockItems={setStockItems} />
      </Modal>

      <Modal visible={openDetails} transparent={true} animationType={"slide"}>
        <Details setOpenDetails={setOpenDetails} setOpenModal={setOpenModal} itemName={itemName} setItemName={setItemName} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
          itemUnit={itemUnit} setItemUnit={setItemUnit} checked1={checked1} setChecked1={setChecked1} checked2={checked2} setChecked2={setChecked2}
          stockItems={stockItems} setStockItems={setStockItems} />
      </Modal>

      <View>
        <Image source={require("./assets/image.png")} style={styles.logo} />
        <Text style={styles.heading}>Stok Takip Uygulaması</Text>
      </View>

      <ScrollView style={{ paddingHorizontal: 20, }}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ürün Kodu"
            value={itemID}
            onChangeText={text => setItemID(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Ürün Adı"
            value={itemName}
            onChangeText={text => setItemName(text)}
          />

          <View style={styles.pickerContainer}>
            <Picker selectedValue={itemUnit} onValueChange={(itemValue, itemIndex) => {
              setItemUnit(itemValue)
            }} style={styles.picker} >
              <Picker.Item label="Lütfen Birim Seçiniz" value="bos" />
              <Picker.Item label="Adet" value="adet" />
              <Picker.Item label="Çuval" value="çuval" />
              <Picker.Item label="Düzine" value="düzine" />
              <Picker.Item label="Top" value="top" />
              <Picker.Item label="Varil" value="varil" />
              <Picker.Item label="Tabaka" value="tabaka" />
              <Picker.Item label="Kutu" value="kutu" />
              <Picker.Item label="Koli" value="koli" />
              <Picker.Item label="Desimetre" value="desimetre" />
              <Picker.Item label="Konteyner" value="konteyner" />
              <Picker.Item label="Miligram" value="mg" />
              <Picker.Item label="Gram" value="gr" />
              <Picker.Item label="Kilogram" value="kg" />
              <Picker.Item label="Ton" value="ton" />
              <Picker.Item label="Santimetre" value="cm" />
              <Picker.Item label="Metre" value="m" />
              <Picker.Item label="Kilometre" value="km" />
              <Picker.Item label="Metrekare" value="metrekare" />
              <Picker.Item label="Litre" value="litre" />
              <Picker.Item label="Metreküp" value="metreküp" />
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Miktar"
            value={itemQuantity}
            onChangeText={text => setItemQuantity(text)}
            keyboardType="numeric"
          />

          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButtonItem}>
              <RadioButton
                value="Üretim"
                status={checked1 === "Üretim" ? "checked" : "unchecked"}
                onPress={() => setChecked1("Üretim")} color="blue"
              />
              <Text>Üretim</Text>
            </View>

            <View style={styles.radioButtonItem}>
              <RadioButton
                value="Satın Alma"
                status={checked1 === "Satın Alma" ? "checked" : "unchecked"}
                onPress={() => setChecked1("Satın Alma")} color="red"
              />
              <Text>Satın Alma</Text>
            </View>

            <View style={styles.radioButtonItem}>
              <RadioButton
                value="Satış"
                status={checked1 === "Satış" ? "checked" : "unchecked"}
                onPress={() => setChecked1("Satış")} color="green"
              />
              <Text>Satış</Text>
            </View>
          </View>

          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButtonItem}>
              <RadioButton
                value="hammadde"
                status={checked2 === "hammadde" ? "checked" : "unchecked"}
                onPress={() => setChecked2("hammadde")} color="red"
              />
              <Text>Hammadde</Text>
            </View>

            <View style={styles.radioButtonItem}>
              <RadioButton
                value="yarımamul"
                status={checked2 === "yarımamul" ? "checked" : "unchecked"}
                onPress={() => setChecked2("yarımamul")} color="blue"
              />
              <Text>Yarı Mamul</Text>
            </View>

            <View style={styles.radioButtonItem}>
              <RadioButton
                value="mamul"
                status={checked2 === "mamul" ? "checked" : "unchecked"}
                onPress={() => setChecked2("mamul")} color="green"
              />
              <Text>Mamul</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Stok Kartı Ekle</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          data={stockItems}
          showsVerticalScrollIndicator={false}
          scrollEnable={false}
          renderItem={({ item }) => (
            <RenderedItem item={item} setOpenModal={setOpenModal} />
          )}
          keyExtractor={(index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white"
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
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "lightgray",
    placeholderTextColor: "gray",
    color: "#414141",
    fontSize: 18,
  },
  pickerContainer: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
  },
  picker: {
    color: "#414141",
  },
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  radioButtonItem: {
    flexDirection: "row",
    alignItems: "center",

  },
  button: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
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

