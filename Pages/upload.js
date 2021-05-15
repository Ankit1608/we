import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Picker,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Upload = () => {
  const uploadfromlib = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImagePath(image.path);
      refRBSheet.current.close();
    });
  };
  const uploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImagePath(image.path);
      refRBSheet.current.close();
    });
  };
  const [image, setImagePath] = useState(null);
  const [selectedValue, setSelectedValue] = useState('Oxygen Cylinde');
  const refRBSheet = useRef();

  return (
    <View>
      <ScrollView>
        <View style={styles.logincontainer}>
          <Formik
            initialValues={{email: '', description: ''}}
            onSubmit={async values => {
              () => console.log(values);
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TouchableWithoutFeedback
                  onPress={() => refRBSheet.current.open()}>
                  <View style={styles.uploadphoto}>
                    {image != null && (
                      <ImageBackground
                        source={{uri: image}}
                        style={{flex: 1}}></ImageBackground>
                    )}
                    {image === null && (
                      <View style={{alignItems: 'center'}}>
                        <MaIcon name={'camera'} size={75} color="gray" />
                        <Text style={{color: '#555', fontSize: 15}}>
                          {' '}
                          Upload Picture
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <TextInput
                  numberOfLines={4}
                  multiline={true}
                  style={styles.logintextinput}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  placeholder="Add a Description"
                  textContentType="text"
                  value={values.description}
                />
                <View>
                  <Pressable style={styles.proceedButton}>
                    <Text style={styles.searchButtonText}>Proceed</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View>
            <TouchableWithoutFeedback onPress={uploadfromlib}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <MaIcon name={'folder-image'} size={25} color="gray" />
                <Text style={styles.popuptext}>Upload from Gallery</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback onPress={uploadfromcamera}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <MaIcon name={'camera'} size={25} color="gray" />
                <Text style={styles.popuptext}>Take a photo</Text>
              </View>
            </TouchableNativeFeedback>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <MaIcon name={'logout'} size={25} color="gray" />
              <Text style={styles.popuptext}>Cancel</Text>
            </View>
          </View>
        </RBSheet>
      </ScrollView>
    </View>
  );
};
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
  logincontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logintextinput: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 5,
    width: 380,
    backgroundColor: '#E0E5EB',
  },
  loginbuttoncontainer: {
    margin: 10,
    height: 40,
    backgroundColor: '#1e6485',
  },
  loginnewuser: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  uploadphoto: {
    marginHorizontal: 5,
    height: 400,
    backgroundColor: '#d1d1d1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popuptext: {
    paddingLeft: 5,
  },
});

export default Upload;
