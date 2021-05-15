import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Card from './components/card';
const SavedPosts = props => {
  return (
    <View>
      <ScrollView>
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
});

export default SavedPosts;
