import React from 'react';
import { StyleSheet ,View,Text,TextInput,Button ,Dimensions, ScrollView} from "react-native";
import globalStyles from '../styles/globalStyles';
import WavyHeader from '../components/WavyHeader'

export default function Registration(){
    return(
    <ScrollView>
        <View style ={styles.container}>
    <WavyHeader/>
      <Text style={styles.text}>Full Name</Text>
      <TextInput style={styles.textInput} placeholder="Enter Full Name" />

      <Text style={styles.text}>Mobile No</Text>
      <TextInput style={styles.textInput} placeholder="Enter Mobile No"  keyboardType = "numeric" />

      <Text style={styles.text}>Email id</Text>
      <TextInput style={styles.textInput} placeholder="Enter Email id" />

      <Text style={styles.text} > Password </Text>
      <TextInput style={styles.textInput}  placeholder="Enter Password" secureTextEntry={true}/>

      <Text style={styles.text} > Confirm Password </Text>
      <TextInput style={styles.textInput}  placeholder="Re-enter Password" secureTextEntry={true} />      


        <View style={styles.button} >
            <Button style={styles.button} title = "Submit" />
        </View>
    </View>
    </ScrollView>
    );
    
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom : 100
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