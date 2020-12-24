import {
    Svg,
    Path,
    Circle,
    Rect,
    LinearGradient,
    Image,
    ImageProps,
    Text,
    Defs,
    Stop,
    ClipPath
  } from "react-native-svg";
  import { StyleSheet, View, TextInput, Dimensions } from "react-native";
  import React from "react";
  
  const { width, height } = Dimensions.get("window");
  
  export default function WavyHeader() {
    return (
      <View style={styles.container}>
        <Svg width={width} height={height / 2}>
          <Defs>
            <LinearGradient id="path" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#90FFA7" stopOpacity="1" />
              <Stop offset="1" stopColor="#030682" stopOpacity="1" />
            </LinearGradient>
  
            <ClipPath id="logoImage">
              <Circle  
              
              cx={width / 2}
            cy={height / 5}
            r= {width / 5 /2}
            stroke="red"
            fill = "#fff" 
            />
            </ClipPath>
          </Defs>
  
          <Circle
            cx={width /2}
            cy={-height / 8 }
            r={height / 2}
            stroke="none"
            fill="url(#path)"
          />
          <Image style = {styles.image} x= "40%" y ="98" width="20%" height ="23%" clipPath= "url(#logoImage"   preserveAspectRatio="xMidYMid slice"  href={require('../assets/logo1.png')} />
          <Text
              x={width / 2}
              y={height / 3.5}
              fill="white"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle">
           Enerray Electricals
            </Text>
        </Svg>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
        backgroundColor: 'red',
    },
    image: {
        flex: 1,
        width: 10,
        height: 10,
        resizeMode: 'contain'
    }
  
  });
  