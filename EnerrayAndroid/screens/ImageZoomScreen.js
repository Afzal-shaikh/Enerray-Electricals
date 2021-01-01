import ImageZoom from "react-native-image-pan-zoom";
import { View, Dimensions,Image,SafeAreaView } from "react-native";
import React from 'react';
import globlaStyles from '../styles/globalStyles';

const screenWidth = Dimensions.get("window").width;
const screenHeight =   Dimensions.get("window").Height ;

export default function ImageZoomScreen(props) {

  const imagePath = props.navigation.getParam('ImagePath')

  console.log(props)
  console.log("props.params === " + props.state)
  return (

    <View style = {{ 
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
       justifyContent: "center",}}>
    <ImageZoom
      cropWidth={Dimensions.get("window").width}
      cropHeight={Dimensions.get("window").height}
      imageWidth={screenWidth}
      imageHeight={screenWidth}
    >
      <Image
        style={{ width: screenWidth, height: screenWidth  }}
        source={{
          uri: imagePath,
        }
        }
      />
    </ImageZoom>

    </View>
   
  );
}
