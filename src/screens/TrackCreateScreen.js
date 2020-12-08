import '../_mockLocations';
import React, { useState, useEffect,useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync,watchPositionAsync,Accuracy} from "expo-location";
import {Context as LocationContext} from '../context/LocationContext';
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      let response = await requestPermissionsAsync();
      if(!response.granted){
        setErr("Not Granded");
        return ;
      }

      await watchPositionAsync({
        accuracy:Accuracy.BestForNavigation,
        timeInterval:1000,
        distanceInterval:10
      },(location)=>{
        addLocation(location);
      });

    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styels = StyleSheet.create({});

export default TrackCreateScreen;
