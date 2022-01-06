import React, {FC} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

interface Props {
  items: number[];
  itemRemove: Function;
}

const ListItem: FC<Props> = ({items, itemRemove}) => {
  return (
    <Pressable>
    <View style={styles.listitem}>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    margin: 10,
    width: '100%',
  },
});

export default ListItem;
