import React from 'react';
import {StyleSheet, View,Text,TextInput,Button,Dimensions} from "react-native";
import WavyHeader from '../components/WavyHeader'

export default function Login(){
    return(
    <View style = {styles.container}>
        <WavyHeader/>
      <Text style={styles.text}>User Name</Text>
      <TextInput style={styles.textInput} placeholder="Enter UserName" />
      <Text style={styles.text} > Password </Text>
      <TextInput style={styles.textInput}  placeholder="Enter Password" secureTextEntry={true} />
        <View style={styles.button} >
            <Button style={styles.button} title = "Submit" />
        </View>
    </View>
    );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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