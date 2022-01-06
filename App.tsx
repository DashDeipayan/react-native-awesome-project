import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Nav from './src/Nav';
import Generate from './src/Generate';
import ListItem from './src/ListItem';

const App = () => {
  const [listRandom, setListRandom] = useState([]);

  const onAddrandom = () => {
    const randomVal = Math.floor(Math.random() * 100) + 1;
    setListRandom([...listRandom, randomVal]);
  };

  const onItemRemove = () => {
    
  }

  return (
    <View style={styles.mainView}>
      <Nav nameOfApp="Hello App" />
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Hello World 1</Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Hello World 2</Text>
      </View>
      <View>
        <Generate onAddrandom={onAddrandom} />
      </View>
      <ListItem items={listRandom} itemRemove={onItemRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'blue',
  },
  basicView: {
    backgroundColor: 'yellow',
    width: '100%',
    marginBottom: 10,
  },
  basicText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
