import React ,{useState} from 'react';
import {StyleSheet,View,Text, FlatList ,Dimensions} from 'react-native';
import WavyHeader from '../components/WavyHeader';

const { width, height } = Dimensions.get("window");

export default function Products() {
    const [People  , setPeople] = useState([
        {name : 'shaun1' , key : '1'},
        {name : 'shaun2' , key : '2'},
        {name : 'shaun3' , key : '3'},
        {name : 'shaun4' , key : '4'},
        {name : 'shaun5' , key : '5'},
        {name : 'shaun6' , key : '6'},
        {name : 'shaun7' , key : '7'},
        {name : 'shaun8' , key : '8'},
        {name : 'shaun9' , key : '9'},
        {name : 'shaun0' , key : '0'},

    ]);
    return(
        <View style = {styles.container}>
        <WavyHeader />
        <View>
        <FlatList 
           data = {People}
           renderItem = {({item}) => (
              
               <Text  style = {styles.item}>{item.name}</Text>
              
           )}
           numColumns = {2}
       />
       </View>
       </View>
    )
}

const itemMargin = 10;
const itemWidth = (width/2)- 20
const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor : "blue",
        paddingTop: 40,
        paddingHorizontal : 20,
        alignContent : 'center',
        justifyContent : "center"

    },
    item : {
       marginHorizontal : itemMargin,
       marginTop : itemMargin,
        width : itemWidth,
        height : itemWidth,
        backgroundColor : "cyan"
      

    },
})