import React, { useEffect, useState  } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions, Image, ImageBackground ,ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("window");

export default function Products(props) {

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

  {isLoading ?
  ( <View style = {{flex : 1, alignContent : "center",justifyContent : "center"}}>
          <ActivityIndicator
            animating= {true}
            size="large"
            color="#00ff00"
          />
        </View> ) : (
    <View style={styles.childView}>
        <FlatList
          data={data.allproductdata.data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress = {() => { props.navigation.push("Description",{itemId : item.id})}}>
            <ImageBackground style={styles.itemImage} source={{ uri: item.product_thumbnail_path }}>
            <View style={{position: 'absolute', top: 0, left: 0,  justifyContent: 'center', alignItems: 'center'}}>
            <Text >{item.user_product_id}</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
  )}     
    </View>
  );
}

const itemMargin = 1;
const itemWidth = width / 2 ;
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


