import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileSettings = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput placeholder="name" />
      </View>
      <View>
        <Text>Phone Number</Text>
        <TextInput placeholder="phone" />
      </View>
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({});
