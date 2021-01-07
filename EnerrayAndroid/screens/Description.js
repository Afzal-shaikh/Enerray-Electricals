import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import AudioPlayer from '../components/AudioPlayer';

const screenWidth = Dimensions.get('window').width;
const HINDI = "hindi";
const ENGLISH ="english";

export default function Description(props) {
  console.log("++++++++++++++++++++++++Description screen rendering+++++++++++++++++++++++++++++" )
  console.log(props)
  
  const itemId = props.navigation.getParam('itemId');

   


 
  let imagesPaths = [];

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [audioSelected, setaudioSelected] = useState(ENGLISH)
  console.log("isLoading ==" + isLoading);

  useEffect(() => {
    const URL = `http://www.rudvedatrading.com/api/productshow/${itemId}`;
    console.log('URL===' + URL);
    
    fetch(URL)
      .then((response) => response.json())
      .then((json) =>  setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


//load image paths once data is loaded 
  isLoading
    ? console.log('no data')
    : (imagesPaths = data.productimages.map((item) => item.image_path));

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <ActivityIndicator animating={true} size="large" color="#00ff00" />
        </View>
      ) : (
        <SafeAreaView>
          <ScrollView>
          <Text style={styles.productName}>
              {data.productdata.product_name}
            </Text>
            <SliderBox
              images={imagesPaths}
              sliderBoxHeight={screenWidth}
              onCurrentImagePressed={(index) =>
                props.navigation.push('ImageZoomScreen', {
                  ImagePath: imagesPaths[index],
                })
              }
            />
          
            <View>
              {/* View for data under the slider  */}
              {/* Features */}
              <View style={styles.headingview}>
                <Text style={styles.headingText}>Features :</Text>
              </View>
              {data.productfetures.map((item) => {
                return (
                  <View style={styles.row}>
                    <View style={styles.cell}>
                      <Text style={styles.cellTextBold}>
                        {item.feture_name}:
                      </Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.cellText}>
                        {item.feture_explanation}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            {/* Description */}
            {(data.productdata.product_description == null )? null : (
              <View>
                <View style={styles.headingview}>
                  <Text style={styles.headingText}>Description</Text>
                </View>
                <View style={styles.row}>

                  <View style={styles.cell}>
                    <Text style={styles.cellText}>
                      {data.productdata.product_description}
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Audio Player View  */}

            <View style={styles.audioPlayerView}>
            <Text>Audio Player here</Text>
            <View style = {{flexDirection : 'row' ,flex : 1 ,justifyContent : "center" }} >
              <TouchableOpacity  style = {{flex : 1,  backgroundColor :  (audioSelected == HINDI) ? "green" : "gray" }}  onPress = {() => setaudioSelected(HINDI)}><Text> Hindi</Text></TouchableOpacity>
              <TouchableOpacity  style = {{flex : 1,   backgroundColor :  (audioSelected == ENGLISH) ? "green" : "gray" }}  onPress = {() => setaudioSelected(ENGLISH)} ><Text> English</Text></TouchableOpacity>
            </View>
              {(audioSelected==HINDI) && (<AudioPlayer audioURL = 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'/>)}
              {(audioSelected==ENGLISH) && (<AudioPlayer audioURL =  'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' />)}
              {/* <AudioPlayer /> */}
            </View>

            {/* Flatlist horizontal related products line */}
            <FlatList
              style = {{  
                          flexGrow: 0}}
              horizontal
              data={data.otherproducts}
              keyExtractor={(item) => item.user_product_id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    props.navigation.push('Description', {itemId: item.id});
                    // FIX THIS: - add passing product data to the screen on onpress of this flatlist component
                  }}>
                  <View style={styles.item}>
                    <ImageBackground
                      style={styles.itemImage}
                      source={{uri: item.product_thumbnail_path}}>
                      <View
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'grey'}}>
                          {item.user_product_id}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.Button} onPress = {getQuote()}>
              {/* FIX THIS : add email functionality on onpress event for the get a quote touchabel opacity */}
              <Text style={styles.quoteText}>Get a Quote</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </View>
  );


  //functions
  function getQuote(){
    
  }
}

const itemMargin = 1;
const itemWidth = screenWidth / 2 - 60;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    width: screenWidth,
    flexDirection: 'row',
    backgroundColor: '#d5dde8',
    marginTop: 10,
  },
  cell: {
    flex: 1,
  },
  cellText: {
    fontSize: 17,
    padding: 10,
  },
  cellTextBold: {
    fontSize: 17,
    padding: 10,
    fontWeight: 'bold',
  },

  headingText: {
    // textDecorationLine: 'underline',
    fontSize: 20,
    padding: 10,
    marginTop : 30,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingview: {
    width: screenWidth,
    alignContent: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: screenWidth,
    backgroundColor: 'cyan',
    height: 40,
  },
  button: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignContent: 'center',
  },
  quoteText: {
    fontSize: 24,
    justifyContent: 'center',
    alignContent: 'center',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  item: {
    marginHorizontal: itemMargin,
    marginTop: itemMargin,
    width: itemWidth,
    height: itemWidth,
    backgroundColor: '#ECECEC',
  },
  itemImage: {
    backgroundColor: '#F1EAE9',
    flex: 1,
  },
  childView: {
    flex: 1,
  },
  audioPlayerView: {
    marginVertical: 20,
   flex : 1,
   minHeight : 300,

  },
  productName: {
    fontSize: 24,
    padding: 10,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
