import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

const Map = ({route}) => {
  const {lat, long} = route.params;
  return (
    <View style={{flex: 1, height: '100%', width: '100%'}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{height: '100%', width: '100%'}}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{latitude: lat, longitude: long}} />
      </MapView>
    </View>
  );
};
export default Map;
