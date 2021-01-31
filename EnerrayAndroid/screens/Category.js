import React from 'react';
import {StyleSheet, View,Dimensions ,Image, ScrollView} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';

export default function Category(props){
    return(
      <ScrollView style = {globalStyles.scrollView}>
    <View style = {styles.container}>
        <WavyHeader/>
       
        <View style = {styles.categoryView}>
        <TouchableOpacity 
       
        // uncomment this when solar api is added
        // onPress = {() => { props.navigation.push("Products", {productType : "solar"})}}
        >
        <Image  source ={require('../assets/solar00.png')} style = {styles.image} />
        </TouchableOpacity>
       
        <TouchableOpacity onPress = {() => { props.navigation.push("Products", {productType : "fan"})}}>
        <Image source ={require('../assets/fan00.png')} style = {styles.image}  />
        </TouchableOpacity>
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
  },
  categoryView : {
      flexDirection : "row",
      justifyContent: "center",
  },
  image:{
      // backgroundColor : "black",
      padding : 20,
      margin : 20,
      width : 150,
      height : 150,
      borderRadius : 200,
      borderWidth :2 ,
      borderColor: 'black',
      flex:1,

  }
});