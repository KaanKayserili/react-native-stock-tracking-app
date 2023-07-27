import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import FormContainer from './FormContainer'

const Details = ({ openDetails, setOpenDetails, setStockItems }) => {
  const [id, setID] = useState(openDetails.id);
  const [itemID, setItemID] = useState(openDetails.itemID);
  const [itemName, setItemName] = useState(openDetails.itemName);
  const [itemQuantity, setItemQuantity] = useState(openDetails.itemQuantity);
  const [itemUnit, setItemUnit] = useState(openDetails.itemUnit);
  const [checked1, setChecked1] = useState(openDetails.type1);
  const [checked2, setChecked2] = useState(openDetails.type2);

  function edit() {
    setStockItems(prevStockItems => {
      return prevStockItems.map(obj =>
        obj.id === id ? { ...obj, id: id, itemID: itemID, itemName: itemName, itemQuantity: itemQuantity, itemUnit: itemUnit, type1: checked1, type2: checked2 } : obj
      );
    });
    alert("Stok Başarıyla Güncellendi!")
    setOpenDetails(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detaylar</Text>

      <FormContainer setChecked2={setChecked2} checked2={checked2} checked1={checked1} setChecked1={setChecked1}
        itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} itemUnit={itemUnit} setItemUnit={setItemUnit}
        itemName={itemName} setItemName={setItemName} itemID={itemID} setItemID={setItemID} />

      <TouchableOpacity style={styles.button} onPress={edit}>
        <Ionicons name={"close"} size={24} color={"#414141"} />
        <Text style={styles.buttonText}>Okay</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "10%",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 40,
    padding: 20,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 26,
    color: "#414141",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#414141",
    marginLeft: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "lightgray"
  },
  buttonText: {
    fontSize: 24,
    color: "#414141",
    marginLeft: 10,
  },

})