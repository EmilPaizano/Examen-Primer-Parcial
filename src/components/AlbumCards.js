import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity, Touchable,Image,Dimensions} from 'react-native';

const{width}= Dimensions.get("screen");
const{height}= Dimensions.get("screen");

const AlbumCards =  ({
    // albumId,
    // id,
    // title,
    // url,
    // thumbnailUrl
    data
})=>{

    //ordenar albumes
    let mayor = 0;
    

    for(let i=0;i<data.length;i++){
      if(data[i].albumId > mayor){
        mayor = data[i].albumId
      }
    }

    




    return(
      
        <View style={styles.container_reciente}>

            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container_reciente3: {
      flex: 1,
      backgroundColor: '#A71CD7',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    container_reciente2: {
      flex: 1,
      backgroundColor: '#327DF0',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },

    container_reciente: {
      flex: 1,
      backgroundColor: '#009D00',
      alignItems: 'center',
      justifyContent: 'center',
      width:width*0.5,
      height:height*0.5,
      
      
    },
    tinyLogo: {
      width: 200,
      height:200,
      borderColor:  "#009d00"
      
    },
    logo: {
      width: 66,
      height: 58,

      borderColor: "#009d00"
    },
    
    
  });
  
  export default AlbumCards;