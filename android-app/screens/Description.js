import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text,SafeAreaView,ScrollView, Dimensions} from 'react-native';
import {Table} from 'react-native-table-component';
import FlatListSlider from '../components/FLatListSlider';




const screenWidth = Dimensions.get('window').width
export default function Description(){

    const [isLoading, setLoading] = useState(true);
    const[data,setData] = useState([]);
    console.log(data)
  
    useEffect(()=>{
      fetch('http://www.rudvedatrading.com/api/productshow/3')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    },[]);
  
    return (
      <View style={styles.container}>
  
    {isLoading ? <Text>Loading...</Text> : (
      <SafeAreaView>
        <ScrollView>
          <FlatListSlider
            data={data.productimages}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            indicatorContainerStyle={{position:'absolute', bottom: 20}}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />
            <View>
               <Table>
                   {data.productfetures.map((item) => {return }) }
               </Table>
            </View>

        </ScrollView>
      </SafeAreaView>
    )}
    </View>
    );
  
    }













    {/* const [Data, setData] = useState(
        [
            {
              image:
                'http:\/\/rudvedatrading.com\/images\/CLASSIC\/CLASSIC.png',
              desc: 'Silent Waters in the mountains in midst of Himilayas',
            },
            {
              image:
                'http:\/\/rudvedatrading.com\/images\/DIANA\/DIANA.png',
              desc:
                'Red fort in India New Delhi is a magnificient masterpeiece of humans',
            },
            {
              image:
                'http:\/\/rudvedatrading.com\/images\/ELEGANCE\/ELEGANCE.png',
              desc:
                'Sample Description below the image for representation purpose only',
            },
          ],
    )

    return(
        <SafeAreaView>
        <ScrollView>
          <FlatListSlider
            data={Data}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            indicatorContainerStyle={{position:'absolute', bottom: 20}}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />
        </ScrollView>
      </SafeAreaView>
    </View>
}
 */}
 
const styles = StyleSheet.create({
    container: {
        flex : 1
    }
})