import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps'

const Map =() => {
    return <MapView
    initialRegion={{
         latitude:11.6629,
         longitude:76.2570,
         latitudeDelta:0.01,
         longitudeDelta:0.01
    }}
     style={styles.mapStyle}
     />
};

const styles = StyleSheet.create({
    mapStyle:{
        height:300
    }
});
 
export default Map;
