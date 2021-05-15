import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import {Avatar, Title, Caption, Text} from 'react-native-paper';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const signOut = async () => {
    try {
      alert('sheesh');
      await Auth.signOut({global: true});
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{marginLeft: 0}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Text style={{color: '#777777'}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: '#777777'}}>john_doe@email.com</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('Profile Settings');
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingVertical: 15,
              alignItems: 'center',
            }}>
            <MaIcon name={'cog'} size={18} />
            <Text style={{paddingLeft: 10}}>Profile Settings</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('Saved Posts');
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingVertical: 15,
              alignItems: 'center',
            }}>
            <MaIcon name={'bookmark'} size={18} />
            <Text style={{paddingLeft: 10}}>Saved Posts</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            console.warn('sheesh');
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingVertical: 15,
              alignItems: 'center',
            }}>
            <MaIcon name={'star'} size={18} />
            <Text style={{paddingLeft: 10}}>Rate us on Play Store</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            signOut();
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingVertical: 15,
              alignItems: 'center',
            }}>
            <MaIcon name={'logout'} size={18} />
            <Text style={{paddingLeft: 10}}>Logout</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userInfoSection: {
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
