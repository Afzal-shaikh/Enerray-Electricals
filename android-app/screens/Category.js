import React from 'react';
import {StyleSheet, View,Dimensions ,Image, ScrollView} from "react-native";
import WavyHeader from '../components/WavyHeader'

export default function Category(){
    return(
      <ScrollView>
    <View style = {styles.container}>
        <WavyHeader/>
       
        <View style = {styles.categoryView}>
        <Image  source ={require('../assets/logo1.png')} style = {styles.image}/>
        <Image source ={require('../assets/logo1.png')} style = {styles.image}/>
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
      backgroundColor : "black",
      padding : 20,
      margin : 20,
      width : 150,
      height : 150,
      borderRadius : 200,
      

  }
});