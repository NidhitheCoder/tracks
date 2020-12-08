import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 11.6629 + i * 0.001,
      longitude: 76.257 + i * 0.001
    });
  }

  return (
    <MapView
      initialRegion={{
        latitude: 11.6629,
        longitude: 76.257,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      style={styles.mapStyle}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300
  }
});

export default Map;
