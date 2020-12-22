import React from 'react';
import {StyleSheet, View,Text,TextInput,Button,Dimensions, ScrollView} from "react-native";
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';

export default function Login(){
    return(
      <ScrollView>
    <View style = {globalStyles.container}>
        <WavyHeader/>
      <Text style={globalStyles.text}>User Name</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter UserName" />
      <Text style={globalStyles.text} > Password </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Enter Password" secureTextEntry={true} />
        <View style={globalStyles.button} >
            <Button style={globalStyles.button} title = "Submit" />
        </View>
    </View>
    </ScrollView>
    );
}
