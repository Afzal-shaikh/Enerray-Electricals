import Slider from '@react-native-community/slider';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React ,{useEffect, useState} from 'react';
import Sound from 'react-native-sound';

const img_speaker = require('../assets/ui_speaker.png');
const img_pause = require('../assets/ui_pause.png');
const img_play = require('../assets/ui_play.png');
const img_playjumpleft = require('../assets/ui_playjumpleft.png');
const img_playjumpright = require('../assets/ui_playjumpright.png');

const screenWidth = Dimensions.get('window').width;

export default function AudioPlayer(props) {

  console.log("AudioPlayer screen rendering")//

let audio 
useEffect(()=>{
   audio = new Sound(audioUrl, Sound.MAIN_BUNDLE, error => {console.log(error)});

},[]);


const [isPlaying, setisPlaying] = useState(false)
// const isPlaying = false


  const audioUrl =
    'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';



    
    // events
    function onPlayPauseClicked(){
      console.log("audio is playing == " + audio.isPlaying())
      audio.isPlaying() ? audio.pause() : audio.play() 
     setisPlaying(!isPlaying)
      
     return (()=> {audio.stop()})
    }

  return (
    <View
      style={styles.container}>
      <View style = {styles.playerButtonView}>

      </View>
      <View style={{flex: 1}}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View style={styles.playerButtonView}>
        <Text style={styles.timeText}>00:00</Text>
        <TouchableOpacity style={styles.button} onPress = {() => onPlayPauseClicked()  }>
         <Image source={isPlaying ? img_pause : img_play} resizeMode={'contain'} style = {styles.playImage}/>
        </TouchableOpacity>
        <Text style={styles.timeText}>00:00</Text>
      </View>
    </View>
  );
}


// styles
const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#90faa7',
    justifyContent: 'center',
    alignContent: 'center',
    width: screenWidth,
    height: 50,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

  button: {
    height: 40,
    marginHorizontal: 40,
    backgroundColor: '#5761b2',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  timeText: {
    backgroundColor: 'red',
    fontSize : 15
    
  },
  playerButtonView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop : 20,
    padding : 10
    // backgroundColor: 'blue',
  },
  slider: {
    padding: 20,
    marginHorizontal: 20,
  },
  playImage:{
    flex : 1,
   
  
  },
});
