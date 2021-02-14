import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchAlbums from './src/api';
import AlbumCards from './src/components/AlbumCards'

export default function App() {

  const [albums, setAlbums] = useState([]);

  useEffect(()=>{
    

    const getAlbums = async ()=>{
      const newAlbums= await fetchAlbums();
      
      setAlbums(newAlbums);
    
    };

    getAlbums();

    
  },[]);

  const definido = () =>{  ///SOLUCION NUMERO 5 ACERTADA, EVALUAR QUE ESTE DEFINIDO
    if(albums[1] != undefined){
      
      return(<AlbumCards
        // title = {(albums[0][0].title)} 
        // url = {albums[0][0].url}
        data = {albums}
            
        />);
      
    }

  }
  

  return (
    <View style={styles.container}>
      <Text>Photo Album</Text>
        <View>
            {definido()}
          
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
