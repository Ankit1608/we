import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  ScrollView,
  Pressable,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
export default function ContType() {
  const navigation = useNavigation();
  const [oxygen, setOxygen] = useState(false);
  const [ambulance, setAmbulance] = useState(false);
  const [plasma, setPlasma] = useState(false);
  const [bed, setBed] = useState(false);
  const [icu, setICU] = useState(false);
  const [remdesiver, setRemdesiver] = useState(false);
  const [fabiflu, setFabiflu] = useState(false);
  const [more, setMore] = useState(false);
  let stateArray = [
    oxygen,
    ambulance,
    plasma,
    bed,
    icu,
    remdesiver,
    fabiflu,
    more,
  ];
  let contentArray = [
    'oxygen',
    'ambulance',
    'plasma',
    'bed',
    'icu',
    'remdesiver',
    'fabiflu',
    'more',
  ];
  const checker = arr => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === true) return i;
    }
    return null;
  };
  const redirect = () => {
    if (checker(stateArray)) {
      navigation.navigate('Select Location', {
        contType: contentArray[checker(stateArray)],
      });
    } else {
      alert('please select an option');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setOxygen(!oxygen);
              setAmbulance(false);
              setPlasma(false);
              setBed(false);
              setFabiflu(false);
              setRemdesiver(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {oxygen ? (
                <MaIcon name={'gas-cylinder'} size={40} color="#1e6485" />
              ) : (
                <MaIcon name={'gas-cylinder'} size={40} color="gray" />
              )}

              <Text style={oxygen ? styles.textActive : styles.text}>
                Oxygen
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setAmbulance(!ambulance);
              setOxygen(false);
              setPlasma(false);
              setBed(false);
              setFabiflu(false);
              setRemdesiver(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {ambulance ? (
                <MaIcon name={'ambulance'} size={40} color="#1e6485" />
              ) : (
                <MaIcon name={'ambulance'} size={40} color="gray" />
              )}
              <Text style={ambulance ? styles.textActive : styles.text}>
                Ambulance
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setOxygen(false);
              setAmbulance(false);
              setPlasma(!plasma);
              setBed(false);
              setFabiflu(false);
              setRemdesiver(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {plasma ? (
                <MaIcon name={'water'} size={40} color="#1e6485" />
              ) : (
                <MaIcon name={'water'} size={40} color="gray" />
              )}
              <Text style={plasma ? styles.textActive : styles.text}>
                Plasma
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setOxygen(false);
              setAmbulance(false);
              setPlasma(false);
              setBed(!bed);
              setFabiflu(false);
              setRemdesiver(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {bed ? (
                <MaIcon name={'bed-empty'} size={40} color="#1e6485" />
              ) : (
                <MaIcon name={'bed-empty'} size={40} color="gray" />
              )}

              <Text style={bed ? styles.textActive : styles.text}>Beds</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setICU(!icu);
              setOxygen(false);
              setAmbulance(false);
              setPlasma(false);
              setBed(false);
              setFabiflu(false);
              setRemdesiver(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {icu ? (
                <FaIcon name={'procedures'} size={37} color="#1e6485" />
              ) : (
                <FaIcon name={'procedures'} size={37} color="gray" />
              )}
              <Text style={icu ? styles.textActive : styles.text}>ICU</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setOxygen(false);
              setAmbulance(false);
              setPlasma(false);
              setBed(false);
              setFabiflu(false);
              setRemdesiver(!remdesiver);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {remdesiver ? (
                <FaIcon name={'syringe'} size={38} color="#1e6485" />
              ) : (
                <FaIcon name={'syringe'} size={38} color="gray" />
              )}
              <Text style={remdesiver ? styles.textActive : styles.text}>
                Remdesiver
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setOxygen(false);
              setAmbulance(false);
              setPlasma(false);
              setBed(false);
              setRemdesiver(false);
              setMore(false);
              setFabiflu(!fabiflu);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {fabiflu ? (
                <MaIcon name={'pill'} size={40} color="#1e6485" />
              ) : (
                <MaIcon name={'pill'} size={40} color="gray" />
              )}
              <Text style={fabiflu ? styles.textActive : styles.text}>
                Fabiflu
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setICU(false);
              setOxygen(false);
              setAmbulance(false);
              setPlasma(false);
              setBed(false);
              setFabiflu(false);
              setRemdesiver(false);
              setMore(!more);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {more ? (
                <MaIcon name={'pill'} size={40} color="#1e6485" />
              ) : (
                <MaIcon name={'pill'} size={40} color="gray" />
              )}
              <Text style={more ? styles.textActive : styles.text}>
                Fabiflu
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Pressable style={styles.proceedButton} onPress={redirect}>
            <Text style={styles.searchButtonText}>Proceed</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  proceedButton: {
    marginTop: 20,
    backgroundColor: '#1e6485',
    height: 50,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 25,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  imageActive: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
    borderColor: '#1e6485',
    borderWidth: 1,
  },
  text: {
    color: '#000000',
  },
  textActive: {
    color: '#1e6485',
  },
});
