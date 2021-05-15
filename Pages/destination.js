import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import SuggestionRow from './suggestionrow';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const demodata = [
  {description: 'Hyderabad', geo: '17.3850 78.4867'},
  {description: 'Manchiryal', geo: '18.8714 79.4443'},
];
const DestinationSearchScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {demodata.map(item => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Explore', {viewport: item.geo});
          }}>
          <SuggestionRow item={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {},
});

{
  /* <GooglePlacesAutocomplete
placeholder="Search a place"
onPress={(data, details = null) => {
  // 'details' is provided when fetchDetails = true
  console.log(data, details);
  navigation.navigate('Guests', {viewport: details.geometry.viewport});
}}
fetchDetails
styles={{
  textInput: styles.textInput,
}}
query={{
  key: 'AIzaSyB9gKz8uOCMjUxj5HM-b03ExNNG1EbpYZI',
  language: 'en',
  types: '(cities)',
}}
suppressDefaultStyles
renderRow={item => <SuggestionRow item={item} />}
/> */
}
