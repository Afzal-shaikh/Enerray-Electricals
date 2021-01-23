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
import SoundPlayer from 'react-native-sound-player'

const img_speaker = require('../assets/ui_speaker.png');
const img_pause = require('../assets/ui_pause.png');
const img_play = require('../assets/ui_play.png');
const img_playjumpleft = require('../assets/ui_playjumpleft.png');
const img_playjumpright = require('../assets/ui_playjumpright.png');

const STOPPED = "stopped";
const PAUSED = "paused";
const PLAYING = "playing";


const screenWidth = Dimensions.get('window').width;

export default function AudioPlayer(props) {

  console.log("AudioPlayer screen rendering")//

useEffect(()=>{
  SoundPlayer.loadUrl(audioUrl)
 let  _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
   setplayingState(STOPPED)
    console.log('finished loading url', success, url)
  })

  const interval = setInterval(() => sliderEditing ? console.log("slider editing") : getPlayerInfo() , 1000);

  return () => {
    SoundPlayer.stop()
    _onFinishedLoadingURLSubscription.remove()
    clearInterval(interval);
  }
},[]);

//state
const [playingState, setplayingState] = useState()
const [currentTime, setCurrentTime] = useState(0)
const [duration, setDuration] = useState(0)
const [sliderEditing, setsliderEditing] = useState(false)
// const [time, setTime] = useState(Date.now());


  const audioUrl = props.audioURL
    // 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';

    // events

     async function getPlayerInfo  (){
     let playerInfo = await SoundPlayer.getInfo()
    //  console.log(playerInfo)
     setCurrentTime( playerInfo.currentTime)
     setDuration(playerInfo.duration)
    }

    function onPlayPauseClicked(){


      switch(playingState){
        case STOPPED : 
        SoundPlayer.play();
        setplayingState(PLAYING);
        break;

        case PAUSED :
        SoundPlayer.play()
        setplayingState(PLAYING);
        break;

        case PLAYING :
          SoundPlayer.pause();
          setplayingState(PAUSED);
         
        break;
        
        

        default:
          console.log("Audio player default");
          break;
      }
    }


    //functions
    function secsToMin(time) {
      var minutes = Math.floor(time / 60);
      var seconds =   Math.floor (time - (minutes * 60))
      return {
        minutes : minutes,
        seconds : seconds
      }
    }


  return (
    <View
      style={styles.container}>
      <View style = {styles.playerButtonView}>

      </View>
      <View style={{flex: 1}}>
      {/* <Text>{audioUrl}</Text> */}
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange = { val => setCurrentTime(val) }
          onSlidingComplete = {() => {
            
               SoundPlayer.seek(currentTime)
               SoundPlayer.play()
          }}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onTouchStart = {() => setsliderEditing(true)}
          onTouchEnd = {() => {
            setsliderEditing(false)
           
            // console.log("curren time = " + currentTime)
            }}
        />
      </View>
      <View style={styles.playerButtonView}>
        <Text style={styles.timeText}>{secsToMin(currentTime).minutes} : {secsToMin(currentTime).seconds}</Text>
        <TouchableOpacity style={styles.button} onPress = {() => onPlayPauseClicked()  }>
         <Image source={(playingState == PLAYING ) ? img_pause : img_play} resizeMode={'contain'} style = {styles.playImage}/>
        </TouchableOpacity>
        <Text style={styles.timeText}>{secsToMin(duration).minutes} : {secsToMin(duration).seconds}</Text>
      </View>
    </View>
  );
}


// styles
const styles = StyleSheet.create({

  container : {
    flex: 1,
    // backgroundColor: '#90faa7',
    // backgroundColor: '#d5dde8',
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
    height: 45,
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
    // backgroundColor: 'red',
    fontSize : 16
    
  },
  playerButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop : 20,
    padding : 10
    // backgroundColor: 'blue',
  },
  slider: {
    padding: 5,
    marginHorizontal: 20,
  },
  playImage:{
    flex : 1,
  },
});
