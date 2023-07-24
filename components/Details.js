import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Detaylar</Text>
      <Text>Ürün Kodu: { }</Text>
      <Text>Ürün Adı: { }</Text>
      <Text>Miktar: { } { }</Text>
      <Text>Tedarik Tipi: { }</Text>
      <Text>Stok Tipi: { }</Text>
      <Text>Tarih: { }</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {

  },
})