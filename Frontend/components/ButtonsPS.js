import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ButtonsPS = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btnTxt} >{props.title}</Text>
    </View>
  )
}

export default ButtonsPS

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    textAlign: "center",
    backgroundColor: "#3B37FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },

  btnTxt: {
    color: "#fff",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
  },
})