import { Picker } from '@react-native-picker/picker'
import React from 'react'

export const PickerComponent = ({ itemUnit, theme, lingo, setItemUnit }) => {
    return (
        <Picker selectedValue={itemUnit} onValueChange={(itemValue) => { setItemUnit(itemValue); }}
            style={[itemUnit === "bos" ?
                { color: theme.PlaceHolder } : { color: theme.InputText }]}
            dropdownIconRippleColor={theme.Border} dropdownIconColor={theme.Border}>
            <Picker.Item label={lingo.SelectUnit} value="bos" color={theme.PlaceHolder} />
            <Picker.Item label={lingo.Piece} value="adet" color={theme.PickerText} />
            <Picker.Item label={lingo.Sack} value="çuval" color={theme.PickerText} />
            <Picker.Item label={lingo.Dozen} value="düzine" color={theme.PickerText} />
            <Picker.Item label={lingo.Ball} value="top" color={theme.PickerText} />
            <Picker.Item label={lingo.Barrel} value="varil" color={theme.PickerText} />
            <Picker.Item label={lingo.Layer} value="tabaka" color={theme.PickerText} />
            <Picker.Item label={lingo.Box} value="kutu" color={theme.PickerText} />
            <Picker.Item label={lingo.Package} value="koli" color={theme.PickerText} />
            <Picker.Item label={lingo.Decimeter} value="desimetre" color={theme.PickerText} />
            <Picker.Item label={lingo.Container} value="konteyner" color={theme.PickerText} />
            <Picker.Item label={lingo.Mg} value="mg" color={theme.PickerText} />
            <Picker.Item label={lingo.Gr} value="gr" color={theme.PickerText} />
            <Picker.Item label={lingo.Kg} value="kg" color={theme.PickerText} />
            <Picker.Item label={lingo.Ton} value="ton" color={theme.PickerText} />
            <Picker.Item label={lingo.Cm} value="cm" color={theme.PickerText} />
            <Picker.Item label={lingo.Mt} value="m" color={theme.PickerText} />
            <Picker.Item label={lingo.Km} value="km" color={theme.PickerText} />
            <Picker.Item label={lingo.M2} value="metrekare" color={theme.PickerText} />
            <Picker.Item label={lingo.Literes} value="litre" color={theme.PickerText} />
            <Picker.Item label={lingo.M3} value="metreküp" color={theme.PickerText} />
        </Picker>
    )
}