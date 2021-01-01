import Slider from '@react-native-community/slider';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Sound from 'react-native-sound';

const img_speaker = require('../assets/ui_speaker.png');
const img_pause = require('../assets/ui_pause.png');
const img_play = require('../assets/ui_play.png');
const img_playjumpleft = require('../assets/ui_playjumpleft.png');
const img_playjumpright = require('../assets/ui_playjumpright.png');

const screenWidth = Dimensions.get('window').width;

export default function AudioPlayer(props) {
  const audioUrl =
    'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignContent: 'center',
        width: screenWidth,
        height: 50,
      }}>
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
        <TouchableOpacity style={styles.button}>
          <Image source={img_play} resizeMode={'contain'} style = {styles.playImage}/>
        </TouchableOpacity>
        <Text style={styles.timeText}>00:00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    marginHorizontal: 40,
    backgroundColor: '#859a9b',
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
