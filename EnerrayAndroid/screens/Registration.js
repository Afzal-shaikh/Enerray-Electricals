import React from 'react';
import { StyleSheet ,View,Text,TextInput,Button ,Dimensions, ScrollView , TouchableOpacity} from "react-native";
import {globalStyles} from '../styles/globalStyles';
import WavyHeader from '../components/WavyHeader'

export default function Registration(props){
    return(
    <ScrollView style={globalStyles.scrollView}>
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

        <View style = {{ marginTop : 20 ,}}> 
        <Text>Already a member? 
        <TouchableOpacity  onPress = {() => { props.navigation.replace("Login")}} >
        <View style={{ justifyContent: 'center',alignContent : 'center'}}><Text style = {globalStyles.textLink }> Log in</Text></View>
        
        </TouchableOpacity>
        </Text>
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