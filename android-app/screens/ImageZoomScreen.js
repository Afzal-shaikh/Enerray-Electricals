import ImageZoom from "react-native-image-pan-zoom";
import { View, Dimensions,Image } from "react-native";
import React from 'react';
import globlaStyles from '../styles/globalStyles';

const screenWidth = Dimensions.get("window").width;
const screenHeight =   Dimensions.get("window").Height ;

export default function ImageZoomScreen(props) {

  console.log("Image zoom")
  return (
    <View style = {{ 
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
       justifyContent: "center",}}>
    <ImageZoom
      cropWidth={Dimensions.get("window").width}
      cropHeight={Dimensions.get("window").height}
      imageWidth={screenWidth}
      imageHeight={screenWidth}
    >
      <Image
        style={{ width: screenWidth, height: screenWidth  , backgroundColor : "Red"}}
        source={{
          uri:
            "https://rudvedatrading.com/images/ELEGANCE/ELEGANCE_S_3.jpg",
        }}
      />
    </ImageZoom>

    </View>
  );
}
