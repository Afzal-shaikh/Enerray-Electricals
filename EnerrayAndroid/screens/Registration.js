import React, {useEffect, useState} from 'react';
import { StyleSheet ,View,Text,TextInput,Button ,Dimensions, ScrollView , TouchableOpacity} from "react-native";
import {globalStyles} from '../styles/globalStyles';
import WavyHeader from '../components/WavyHeader'


export default function Registration(props){

    const [fullName, setFullName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return(
    <ScrollView style={globalStyles.scrollView}>
        <View style ={styles.container}>
    <WavyHeader/>
      <Text style={globalStyles.text}>Full Name</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Full Name" 
        onChangeText = { (text) => {setFullName(text)}}
      />

      <Text style={globalStyles.text}>Mobile No</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Mobile No"  keyboardType = "numeric" 
          onChangeText = { (text) => {setMobileNo(text)}}
      />

      <Text style={globalStyles.text}>Email id</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Email id" 
          onChangeText = { (text) => {setEmail(text)}}
      />

      <Text style={globalStyles.text} > Password </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Enter Password" secureTextEntry={true}
          onChangeText = { (text) => {setPassword(text)}}
      />

      <Text style={globalStyles.text} > Confirm Password </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Re-enter Password" secureTextEntry={true} 
          onChangeText = { (text) => {setConfirmPassword(text)}}
      />      


        <View style={globalStyles.button} >
        <Button
             style={globalStyles.button}
             title = "Submit" 
             onPress = {() => {
           
            validateInformation()
               }}
            />
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
    





    function validateInformation(){
      let mobReg = /^[6-9]\d{9}$/;
      let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if ( fullName == "") {alert("please enter valid name")}
      else if (mobReg.test(mobileNo) == false ){alert("please enter valid phone number")}
      else if (emailReg.test(email) == false){alert("please enter email id")}
      else if ( password.length <= 6 ){alert("please enter valid password greater than 6 characters")}
      else if ((password === confirmPassword) != true){alert("password and confirm password should be same")}
      else{
        let userData = {
          fullName : fullName,
          mobileNo : mobileNo,
          email : email,
          password : password
        }

        props.navigation.push("Verification" ,userData)
      } 
    }
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