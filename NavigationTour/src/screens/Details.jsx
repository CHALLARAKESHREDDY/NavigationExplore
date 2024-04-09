import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})