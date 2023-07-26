import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import FormContainer from './FormContainer'

const Details = ({ openDetails, setOpenDetails }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detaylar</Text>

      <FormContainer setChecked2={setChecked2} checked2={checked2} checked1={checked1} setChecked1={setChecked1}
        itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} itemUnit={itemUnit} setItemUnit={setItemUnit}
        itemName={itemName} setItemName={setItemName} itemID={itemID} setItemID={setItemID} />

      <TouchableOpacity style={styles.button} onPress={() => { setOpenDetails(false) }}>
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