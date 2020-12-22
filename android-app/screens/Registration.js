import React from 'react';
import { StyleSheet ,View,Text,TextInput,Button ,Dimensions, ScrollView} from "react-native";
import {globalStyles} from '../styles/globalStyles';
import WavyHeader from '../components/WavyHeader'

export default function Registration(){
    return(
    <ScrollView>
        <View style ={styles.container}>
    <WavyHeader/>
      <Text style={globalStyles.text}>Full Name</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Full Name" />

      <Text style={globalStyles.text}>Mobile No</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Mobile No"  keyboardType = "numeric" />

      <Text style={globalStyles.text}>Email id</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Email id" />

      <Text style={globalStyles.text} > Password </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Enter Password" secureTextEntry={true}/>

      <Text style={globalStyles.text} > Confirm Password </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Re-enter Password" secureTextEntry={true} />      


        <View style={globalStyles.button} >
            <Button style={globalStyles.button} title = "Submit" />
        </View>
    </View>
    </ScrollView>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom : 100
  },
  
});