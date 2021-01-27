import React,{useContext} from "react";
import {  Text, StyleSheet,FlatList,TouchableOpacity } from "react-native";
import {NavigationEvents } from 'react-navigation';
import {ListItem } from 'react-native-elements';
import {Context as trackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {

  const {state,fetchTracks} = useContext(trackContext);
  console.log(state);
  return (
    <>
    <NavigationEvents onWillFocus={()=>fetchTracks()} />
      <Text>Track List Screen</Text>
      <FlatList 
      data ={state}
      keyExtractor={item => item._id}
      renderItem ={({item})=> {
        return <TouchableOpacity
        onPress={()=>{
          navigation.navigate('TrackDetail',{_id:item._id})
        }}
        >
        <ListItem chevron title={item.name} />
        </TouchableOpacity>
      }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
