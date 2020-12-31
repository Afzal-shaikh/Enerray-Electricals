import Slider from "@react-native-community/slider";
import { View, Dimensions , Image } from "react-native";
import React from "react";
import { TouchableOpacity  } from "react-native-gesture-handler";
import  Sound from 'react-native-sound';

const img_speaker = require('../assets/ui_speaker.png');
const img_pause = require('../assets/ui_pause.png');
const img_play = require('../assets/ui_play.png');
const img_playjumpleft = require('../assets/ui_playjumpleft.png');
const img_playjumpright = require('../assets/ui_playjumpright.png');

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
      <View style={{flexDirection:'row', justifyContent:'center', marginVertical:15}}>
                    <TouchableOpacity onPress={this.jumpPrev15Seconds} style={{justifyContent:'center'}}>
                        <Image source={img_playjumpleft} style={{width:30, height:30}}/>
                        <Text style={{position:'absolute', alignSelf:'center', marginTop:1, color:'white', fontSize:12}}>15</Text>
                    </TouchableOpacity>
                    {this.state.playState == 'playing' && 
                    <TouchableOpacity onPress={this.pause} style={{marginHorizontal:20}}>
                        <Image source={img_pause} style={{width:30, height:30}}/>
                    </TouchableOpacity>}
                    {this.state.playState == 'paused' && 
                    <TouchableOpacity onPress={this.play} style={{marginHorizontal:20}}>
                        <Image source={img_play} style={{width:30, height:30}}/>
                    </TouchableOpacity>}
                    <TouchableOpacity onPress={this.jumpNext15Seconds} style={{justifyContent:'center'}}>
                        <Image source={img_playjumpright} style={{width:30, height:30}}/>
                        <Text style={{position:'absolute', alignSelf:'center', marginTop:1, color:'white', fontSize:12}}>15</Text>
                    </TouchableOpacity>
                </View>
    </View>
  );
}
