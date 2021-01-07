import React from 'react';
import {StyleSheet, View,Text,TextInput,Button,Dimensions, ScrollView, TouchableOpacity} from "react-native";
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';
import Registration from './Registration';

export default function Login(props){
    return(
      <ScrollView style = {globalStyles.scrollView}>
    <View style = {globalStyles.container}>
        <WavyHeader/>
      <Text style={globalStyles.text}>User Name</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter UserName" />
      <Text style={globalStyles.text} > Password </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Enter Password" secureTextEntry={true} />
        <View style={globalStyles.button} >
            <Button style={globalStyles.button} title = "Submit" onPress = {() => { props.navigation.replace("Category")}} />
        </View>
        <View style = {{ marginTop : 20 }}> 
        <Text>Need an account ? 
        <TouchableOpacity onPress = {() => { props.navigation.replace("Registration")}} >
        <Text style = {globalStyles.textLink }> Sign up</Text>
        </TouchableOpacity>
        </Text>
        </View>
    </View>
    </ScrollView>
    );


    function callLoginApi(){
      
    }
}
