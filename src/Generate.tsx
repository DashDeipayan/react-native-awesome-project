import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

interface Props {
  onAddrandom: Function;
}

const Generate: FC<Props> = ({onAddrandom}) => {
  return (
    <TouchableHighlight onPress={() => onAddrandom()} underlayColor="blue">
      <View style={styles.generate}>
        <Text>Add Number </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  generate: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default Generate;
