import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

const FormContainer = ({ setChecked2, checked2, checked1, setChecked1, itemQuantity,
    setItemQuantity, itemUnit, setItemUnit, itemID, setItemID, itemName, setItemName, }) => {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Ürün Kodu"
                value={itemID}
                onChangeText={text => setItemID(text)}
                maxLength={10}
            />

            <TextInput
                style={styles.input}
                placeholder="Ürün Adı"
                value={itemName}
                onChangeText={text => setItemName(text)}
                maxLength={10}
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
                maxLength={16}
            />

            <View style={styles.radioButtonContainer}>
                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Üretim"
                        status={checked1 === "Üretim" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Üretim")} color={"blue"}
                    />
                    <Text>Üretim</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Satın Alma"
                        status={checked1 === "Satın Alma" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Satın Alma")} color={"red"}
                    />
                    <Text>Satın Alma</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Satış"
                        status={checked1 === "Satış" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Satış")} color={"green"}
                    />
                    <Text>Satış</Text>
                </View>
            </View>

            <View style={styles.radioButtonContainer}>
                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="hammadde"
                        status={checked2 === "hammadde" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("hammadde")} color={"red"}
                    />
                    <Text>Hammadde</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="yarımamul"
                        status={checked2 === "yarımamul" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("yarımamul")} color={"blue"}
                    />
                    <Text>Yarı Mamul</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="mamul"
                        status={checked2 === "mamul" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("mamul")} color={"green"}
                    />
                    <Text>Mamul</Text>
                </View>
            </View>
        </View>
    )
}

export default FormContainer

const styles = StyleSheet.create({
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
})