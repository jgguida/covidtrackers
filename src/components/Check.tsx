import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Check = () => (
  <Image source={require('../assets/log2.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 298,
    height: 458,
    marginBottom: 12,
  },
});

export default memo(Check);
