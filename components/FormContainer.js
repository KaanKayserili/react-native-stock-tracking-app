import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

import darkColors from '../assets/colors/darkColors'
import lightColors from '../assets/colors/lightColors'
import english from '../assets/languages/english'
import turkish from '../assets/languages/turkish'

import { useLanguage } from '../utils/LanguageProvider'
import { useTheme } from '../utils/ThemeProvider'
import { PickerComponent } from './Picker'
import { useItems } from '../utils/ItemsProvider'

const FormContainer = ({ itemID, setItemID, itemName, setItemName, itemQuantity, setItemQuantity, itemUnit, setItemUnit, checked1, setChecked1, checked2, setChecked2 }) => {

    const { setItems } = useItems();

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;


    return (
        <View style={styles.formContainer}>
            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.Input, borderColor: theme.Border, color: theme.InputText,
                }]}
                placeholder={lingo.ProductCode}
                placeholderTextColor={theme.PlaceHolder}
                value={itemID}
                onChangeText={text => setItemID(text)}
                maxLength={10}
            />

            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.Input, borderColor: theme.Border, color: theme.InputText,
                }]}
                placeholder={lingo.ProductName}
                placeholderTextColor={theme.PlaceHolder}
                value={itemName}
                onChangeText={text => setItemName(text)}
                maxLength={10}
            />

            <View style={[styles.pickerContainer, { backgroundColor: theme.Input, borderColor: theme.Border }]}>
                <PickerComponent itemUnit={itemUnit} theme={theme} lingo={lingo} setItemUnit={setItemUnit} />
            </View>

            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.Input, borderColor: theme.Border, color: theme.InputText,
                }]}
                placeholder={lingo.Amount}
                value={itemQuantity}
                placeholderTextColor={theme.PlaceHolder}
                onChangeText={text => setItemQuantity(text)}
                keyboardType="numeric"
                maxLength={16}
            />

            <View style={styles.radioButtonContainer}>
                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Üretim"
                        status={checked1 === "Üretim" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Üretim")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text style={{ fontSize: 16, color: theme.Text }}>{lingo.Production}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Satın Alma"
                        status={checked1 === "Satın Alma" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Satın Alma")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text style={{ fontSize: 16, color: theme.Text }}>{lingo.Buy}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Satış"
                        status={checked1 === "Satış" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Satış")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text style={{ fontSize: 16, color: theme.Text }}>{lingo.Sales}</Text>
                </View>
            </View>

            <View style={styles.radioButtonContainer}>
                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="hammadde"
                        status={checked2 === "hammadde" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("hammadde")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text style={{ fontSize: 16, color: theme.Text }}>{lingo.Raw}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="yarımamul"
                        status={checked2 === "yarımamul" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("yarımamul")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text style={{ fontSize: 16, color: theme.Text }}>{lingo.SemiProducts}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="mamul"
                        status={checked2 === "mamul" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("mamul")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text style={{ fontSize: 16, color: theme.Text }}>{lingo.Product}</Text>
                </View>
            </View>
        </View>
    )
}

export default FormContainer

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        fontSize: 18,
    },
    pickerContainer: {
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center",
    },
    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    radioButtonItem: {
        flexDirection: "row",
        alignItems: "center",
    },
})