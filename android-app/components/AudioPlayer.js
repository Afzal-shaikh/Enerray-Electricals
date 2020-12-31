import Slider from "@react-native-community/slider";
import { View, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


const screenWidth = Dimensions.get("window").width;

export default function AudioPlayer(props) {

   const audioUrl = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"


  return (
    <View style={{ flex: 1, backgroundColor: "#ccc" , justifyContent : "center",alignContent :"center" , width: screenWidth, height : 50 }}>
    <View style = {{ flex : 1 }}>
      <Slider
        style={{ padding : 20 ,marginHorizontal : 20 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      </View>
      <TouchableOpacity />
    </View>
  );
}
