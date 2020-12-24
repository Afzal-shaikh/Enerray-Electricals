import React, { useState  } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, Image } from "react-native";
import WavyHeader from "../components/WavyHeader";

const { width, height } = Dimensions.get("window");

export default function Products() {

  const getProductsFromApi = () => {
    return fetch('https://www.rudvedatrading.com/api/productshowall/fan')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const [People, setPeople] = useState([
    { name: "shaun1", key: "1" },
    { name: "shaun2", key: "2" },
    { name: "shaun3", key: "3" },
    { name: "shaun4", key: "4" },
    { name: "shaun5", key: "5" },
    { name: "shaun6", key: "6" },
    { name: "shaun7", key: "7" },
    { name: "shaun8", key: "8" },
    { name: "shaun9", key: "9" },
    { name: "shaun0", key: "0" },
    { name: "shaun0", key: "10" },
    
  ]);
  return (
    <View style={styles.container}>
      {/* <View style={styles.childView}><WavyHeader/></View> */}
      <View style={styles.childView}>
        <FlatList
          data={People}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <Text >{item.name}</Text>
            <Image style={styles.itemImage} source={{ uri: 'http://rudvedatrading.com/images/DIANA/DIANA.png',}} />
            </View>
          )}
          numColumns={2}
        />
      </View>

    </View>
  );
}

const itemMargin = 1;
const itemWidth = width / 2 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
   
    

  },
  item: {
    marginHorizontal: itemMargin,
    marginTop: itemMargin,
    width: itemWidth,
    height: itemWidth,
    backgroundColor: "#ECECEC",
  },
  itemImage: {
    backgroundColor: "#F1EAE9",
    flex: 1
  },
  childView: {
    flex: 1,
    
  },
});


