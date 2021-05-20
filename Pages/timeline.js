import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from './components/card';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Timeline() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headercontainer}>
          <View style={styles.userprofilecontainer}>
            <Icon name={'person'} size={65} />
          </View>
          <View style={styles.headertextcontainer}>
            <Text style={styles.headertexttitle}>50</Text>
            <Text style={styles.headertextcontent}>Posts</Text>
          </View>
          <View style={styles.headertextcontainer}>
            <Text style={styles.headertexttitle}>50</Text>
            <Text style={styles.headertextcontent}>Upvotes</Text>
          </View>
        </View>
        <View style={styles.usernametextcontainer}>
          <Text style={styles.usernametext}>Kumar Ankit</Text>
          <Text style={styles.emailtext}>ankitkumarak901@gmail.com</Text>
        </View>
        <Pressable
          style={styles.addbutton}
          onPress={() => {
            navigation.navigate('Content Type');
          }}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  headercontainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headersubcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headertextcontainer: {
    alignItems: 'center',
  },
  headertexttitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headertextcontent: {
    fontSize: 15,
  },
  usernametextcontainer: {
    marginLeft: 5,
    marginTop: 5,
  },
  usernametext: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  emailtext: {
    fontSize: 13,
    color: '#222',
  },
  userprofilecontainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#dcdbdc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addbutton: {
    marginTop: 10,
    marginHorizontal: 5,
    height: 25,
    borderRadius: 3,
    backgroundColor: '#1e6485',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
