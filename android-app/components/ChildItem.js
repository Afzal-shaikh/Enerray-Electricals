import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';


export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height
}) => {
  return (

    <ImageZoom 
    cropWidth={height}
    cropHeight={height}
    imageWidth={200}
    imageHeight={200}>
  <Image style={{width:200, height:200}}
    source={{uri:item[imageKey]}}/>
</ImageZoom>

);

    {/* <TouchableOpacity
      style={styles.container}
      // onPress={() => onPress(index)}
      >
      <Image
        style={[styles.image, style, {height: height}]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
    </TouchableOpacity> */}


});

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});
