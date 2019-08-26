import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {COLORS} from '../constants';

const {BLUE} = COLORS;

export default ({children}) => (
  <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: BLUE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
