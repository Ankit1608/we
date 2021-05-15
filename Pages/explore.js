import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './components/card';
const Explore = props => {
  const [sorterModal, setSorterModal] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 5,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Search: Remdesivir in Hyderabad...</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => setSorterModal(true)}>
              <MaIcon name={'sort'} size={25} />
            </Pressable>
          </View>
        </View>
        <Card
          navigation={navigation}
          gender={0}
          username={'ankit'}
          district={'abc'}
          state={'telang'}
          img={'https://picsum.photos/200/300'}
          description={
            'kdknkfkdnngknsdlnnsdjfjfnasknfdnadskljnflkndsaklnfklasdngknkladsnglnlknlkgnksdngknkladnkndslkng;kgdngknsdkngknankmnknknkjasnkj   hjhj   uhj   nkjnknakj qnki5hjbbjhbjbjbnbkjhbhjbhjbhjbhjbbhjbhjbjhbhjbjhbhjbhbhj'
          }
          votes={10}></Card>
        <Card
          navigation={navigation}
          gender={0}
          username={'ankit'}
          district={'abc'}
          state={'telang'}
          img={'https://picsum.photos/200/300'}
          description={
            'kdknkfkdnngknsdlnnsdjfjfnasknfdnadskljnflkndsaklnfklasdngknkladsnglnlknlkgnksdngknkladnkndslkng;kgdngknsdkngknankmnknknkjasnkj   hjhj   uhj   nkjnknakj qnki5hjbbjhbjbjbnbkjhbhjbhjbhjbhjbbhjbhjbjhbhjbjhbhjbhbhj'
          }
          votes={10}></Card>
        <Card
          gender={0}
          username={'ankit'}
          district={'abc'}
          state={'telang'}
          img={'https://picsum.photos/200/300'}
          description={
            'kdknkfkdnngknsdlnnsdjfjfnasknfdnadskljnflkndsaklnfklasdngknkladsnglnlknlkgnksdngknkladnkndslkng;kgdngknsdkngknankmnknknkjasnkj   hjhj   uhj   nkjnknakj qnki5hjbbjhbjbjbnbkjhbhjbhjbhjbhjbbhjbhjbjhbhjbjhbhjbhbhj'
          }
          votes={10}></Card>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={sorterModal}
            onRequestClose={() => {
              setModalVisible(!sorterModal);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  onPress={() => {
                    setSorterModal(!sorterModal);
                  }}>
                  <Text style={styles.modalText}>New Posts</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setSorterModal(!sorterModal);
                  }}>
                  <Text style={styles.modalText}>Most Upvoted</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setSorterModal(!sorterModal);
                  }}>
                  <Text style={styles.modalText}>Most Downvoted</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setSorterModal(!sorterModal)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  //fhdsjnfjkndl;kkl;fdsklklsdkl
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#1e6485',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Explore;
