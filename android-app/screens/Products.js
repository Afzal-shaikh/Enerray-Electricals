import React, { useEffect, useState  } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, Image, ImageBackground } from "react-native";


const { width, height } = Dimensions.get("window");

export default function Products() {

  const [isLoading, setLoading] = useState(true);
  const[data,setData] = useState([]);
  console.log(data)

  useEffect(()=>{
    fetch('http://www.rudvedatrading.com/api/productshowall/fan')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  },[]);

  return (
    <View style={styles.container}>

  {isLoading ? <Text>Loading...</Text> : (
    <View style={styles.childView}>
        <FlatList
          data={data.allproductdata.data}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <ImageBackground style={styles.itemImage} source={{ uri: item.product_thumbnail_path }}>
            <View style={{position: 'absolute', top: 0, left: 0,  justifyContent: 'center', alignItems: 'center'}}>
            <Text >{item.user_product_id}</Text>
            </View>
            </ImageBackground>
            </View>
          )}
          numColumns={2}
        />
      </View>
  )}     
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


