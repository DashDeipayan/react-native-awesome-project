import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  nameOfApp: string;
}

const Nav: FC<Props> = ({nameOfApp}) => {
  return (
    <View style={styles.mainView}>
      <Text>{nameOfApp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default Nav;
