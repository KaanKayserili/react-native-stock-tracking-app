import { Picker } from '@react-native-picker/picker'
import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import darkColors from '../assets/colors/darkColors'
import lightColors from '../assets/colors/lightColors'
import { ThemeContext } from '../providers/ThemeProvider'
import { LanguageContext } from '../providers/LanguageProvider'
import turkish from '../assets/languages/turkish'
import english from '../assets/languages/english'

const FormContainer = ({ setChecked2, checked2, checked1, setChecked1, itemQuantity,
    setItemQuantity, itemUnit, setItemUnit, itemID, setItemID, itemName, setItemName, }) => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const theme = isDarkMode ? darkColors : lightColors;

    const { language, toggleLanguage } = useContext(LanguageContext);
    const lingo = language === "tr" ? turkish : english;


    return (
        <View style={styles.formContainer}>
            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.Input, borderColor: theme.Border, placeholderTextColor: theme.PlaceHolder, color: theme.InputText,
                }]}
                placeholder={lingo.ProductCode}
                value={itemID}
                onChangeText={text => setItemID(text)}
                maxLength={10}
            />

            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.Input, borderColor: theme.Border, placeholderTextColor: theme.PlaceHolder, color: theme.InputText,
                }]}
                placeholder={lingo.ProductName}
                value={itemName}
                onChangeText={text => setItemName(text)}
                maxLength={10}
            />

            <View style={[styles.pickerContainer, { backgroundColor: theme.Input, borderColor: theme.Border }]}>
                <Picker selectedValue={itemUnit} onValueChange={(itemValue, itemIndex) => {
                    setItemUnit(itemValue)
                }} style={[itemUnit === "bos" ? { color: theme.PlaceHolder } : { color: theme.InputText }]} >
                    <Picker.Item label={lingo.SelectUnit} value="bos" color={theme.PlaceHolder} />
                    <Picker.Item label={lingo.Piece} value="adet" color={theme.InputText} />
                    <Picker.Item label={lingo.Sack} value="çuval" color={theme.InputText} />
                    <Picker.Item label={lingo.Dozen} value="düzine" color={theme.InputText} />
                    <Picker.Item label={lingo.Ball} value="top" color={theme.InputText} />
                    <Picker.Item label={lingo.Barrel} value="varil" color={theme.InputText} />
                    <Picker.Item label={lingo.Layer} value="tabaka" color={theme.InputText} />
                    <Picker.Item label={lingo.Box} value="kutu" color={theme.InputText} />
                    <Picker.Item label={lingo.Package} value="koli" color={theme.InputText} />
                    <Picker.Item label={lingo.Decimeter} value="desimetre" color={theme.InputText} />
                    <Picker.Item label={lingo.Container} value="konteyner" color={theme.InputText} />
                    <Picker.Item label={lingo.Mg} value="mg" color={theme.InputText} />
                    <Picker.Item label={lingo.Gr} value="gr" color={theme.InputText} />
                    <Picker.Item label={lingo.Kg} value="kg" color={theme.InputText} />
                    <Picker.Item label={lingo.Ton} value="ton" color={theme.InputText} />
                    <Picker.Item label={lingo.Cm} value="cm" color={theme.InputText} />
                    <Picker.Item label={lingo.Mt} value="m" color={theme.InputText} />
                    <Picker.Item label={lingo.Km} value="km" color={theme.InputText} />
                    <Picker.Item label={lingo.M2} value="metrekare" color={theme.InputText} />
                    <Picker.Item label={lingo.Literes} value="litre" color={theme.InputText} />
                    <Picker.Item label={lingo.M3} value="metreküp" color={theme.InputText} />
                </Picker>
            </View>

            <TextInput
                style={[styles.input, {
                    backgroundColor: theme.Input, borderColor: theme.Border, placeholderTextColor: theme.PlaceHolder, color: theme.InputText,
                }]}
                placeholder={lingo.Amount}
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
                        onPress={() => setChecked1("Üretim")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text>{lingo.Production}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Satın Alma"
                        status={checked1 === "Satın Alma" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Satın Alma")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text>{lingo.Buy}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="Satış"
                        status={checked1 === "Satış" ? "checked" : "unchecked"}
                        onPress={() => setChecked1("Satış")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text>{lingo.Sales}</Text>
                </View>
            </View>

            <View style={styles.radioButtonContainer}>
                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="hammadde"
                        status={checked2 === "hammadde" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("hammadde")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text>{lingo.Raw}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="yarımamul"
                        status={checked2 === "yarımamul" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("yarımamul")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text>{lingo.SemiProducts}</Text>
                </View>

                <View style={styles.radioButtonItem}>
                    <RadioButton
                        value="mamul"
                        status={checked2 === "mamul" ? "checked" : "unchecked"}
                        onPress={() => setChecked2("mamul")} color={theme.Radio} uncheckedColor={theme.Radio}
                    />
                    <Text>{lingo.Product}</Text>
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