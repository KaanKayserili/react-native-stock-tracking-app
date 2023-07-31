import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import english from '../assets/languages/english'
import turkish from '../assets/languages/turkish'


import { useLanguage } from '../utils/LanguageProvider'
import { useItems } from '../utils/ItemsProvider'
import { View } from 'react-native'
import FormContainer from '../components/FormContainer'
import Header from '../components/Header'
import Button from '../components/Button'

const Details = ({ navigation, route }) => {
  const { id, itemID, itemName, itemQuantity, itemUnit, checked1, checked2 } = route.params;


  const { language } = useLanguage();
  const lingo = language === "tr" ? turkish : english;

  const { setItems } = useItems();

  const [itemID2, setItemID2] = useState(itemID);
  const [itemName2, setItemName2] = useState(itemName);
  const [itemQuantity2, setItemQuantity2] = useState(itemQuantity);
  const [itemUnit2, setItemUnit2] = useState(itemUnit);
  const [checked12, setChecked12] = useState(checked1);
  const [checked22, setChecked22] = useState(checked2);

  function edit() {
    setItems(prev => {
      return prev.map(obj =>
        obj.id === id ?
          { ...obj, id: id, itemID: itemID2, itemName: itemName2, itemQuantity: itemQuantity2, itemUnit: itemUnit2, type1: checked12, type2: checked22 } : obj
      );
    });
    alert(lingo.SuccessfulUpdate);
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <Header text={lingo.Details} func={navigation.goBack} iconName={"close"} />

      <FormContainer setChecked2={setChecked22} checked2={checked22} setChecked1={setChecked12} checked1={checked12}
        itemQuantity={itemQuantity2} setItemQuantity={setItemQuantity2} itemUnit={itemUnit2} setItemUnit={setItemUnit2}
        itemName={itemName2} setItemName={setItemName2} itemID={itemID2} setItemID={setItemID2} />

      <Button handleSubmit={edit} text={lingo.Update} width={"60%"} marginLeft={"20%"} />
    </View >
  )
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
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