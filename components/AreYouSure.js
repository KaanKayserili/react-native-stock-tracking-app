import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const AreYouSure = (props) => {
    return (
        <View>
            <Text>Uyarı</Text>
            <Text>Bütün verileri silmek istediğinize emin misiniz?</Text>

            <View>
                <TouchableOpacity>
                    <Text>Evet</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Hayır</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AreYouSure

const styles = StyleSheet.create({})