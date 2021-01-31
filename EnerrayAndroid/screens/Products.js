import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  ActivityIndicator,
  PlatformColor,
  Settings,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const img_back = require('../assets/back.png');

export default function Products(props) {
  const productType = props.navigation.getParam('productType');
  const allProductURL = `http://www.rudvedatrading.com/api/productshowall/${productType}`;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    callDataApi(allProductURL);
  }, []);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View
        style={{
          minHeight: 50,
          shadowColor: '#ccc',
          shadowOffset: {width: 0, height: 2},
          flexDirection : 'row'
        }}>
        <TouchableOpacity style={{height : 35 , width : 35 , margin:10}} onPress={()=> {props.navigation.goBack()}}>
            <Image source={img_back} resizeMode={'contain'} style = {{flex:1}}/>
            </TouchableOpacity>

        <TextInput
          style={{flex: 1, padding: 5, height: 40, minHeight: 60, fontSize: 20}}
          placeholder="Search products..."
          onChangeText={(text) => {
            setLoading(true);
            // let searchUrl = `http://www.rudvedatrading.com/api/productsearch/${text}/${productType}`;
            let searchUrl = `http://www.rudvedatrading.com/api/productsearchpost`;
            const requestOptions = {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                postsearch: `${text}`,
                posttype: `${productType}`,
              }),
            };

            fetch(searchUrl , requestOptions)
              .then((response) => response.json())
              .then((json) => setData(json))
              .catch((error) => {
                console.error(error);
                callDataApi(allProductURL);
              })
              .finally(() => setLoading(false));
          }}></TextInput>
      </View>

      {isLoading ? (
        <View
          style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <ActivityIndicator animating={true} size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.childView}>
          <FlatList
            // data={data.allproductdata.data}
            data={
              data.hasOwnProperty('allproductdata')
                ? data.allproductdata.data
                : data.searchproduct.data
            }
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  props.navigation.push('Description', {itemId: item.id ,productName: item.product_name});
                }}>
                <ImageBackground
                  style={styles.itemImage}
                  source={{uri: item.product_thumbnail_path}}>
                  <View
                    style={{
                      position: 'absolute',
                      top: 5,
                      left: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'grey'}}>{item.user_product_id}</Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      left: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'grey'}}>{item.product_name}</Text>
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

  //api calling

  function callDataApi(url) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }
}

const itemMargin = 1;
const itemWidth = width / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
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
});
