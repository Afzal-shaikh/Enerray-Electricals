import React from 'react';
import {StyleSheet, View,Text,TextInput,Button,Dimensions, ScrollView} from "react-native";
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';

export default function Verification(){
    return(
      <ScrollView>
    <View style={globalStyles.container}>
      <WavyHeader/>
      <Text style={globalStyles.text}>Mobile N0.</Text>
      <TextInput style={globalStyles.textInput} placeholder="Enter Mobile N0."/>

      <Text style={globalStyles.text} > OTP </Text>
      <TextInput style={globalStyles.textInput}  placeholder="Enter OTP" secureTextEntry={true}/>

        <View style={globalStyles.button} >
            <Button style={globalStyles.button} title = "Submit" />

        </View>
    </View>
    </ScrollView>
    );
}
