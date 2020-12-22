import {StyleSheet ,Dimensions } from 'react-native';
import React from 'react';


const { width, height } = Dimensions.get("window");
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom : 100
    // justifyContent: "center",
  },
  textInput: {
    
    borderBottomColor : "#8a8f91",
    borderBottomWidth : 1,
    height: 30,
    width: width * 0.5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "#8a8f91",
    height: 30,
    width: width * 0.5,
    marginTop: 10,
  },
  text: {
    textAlign: "left",
    width: width * 0.5,
    marginTop: 20,
  },
});
