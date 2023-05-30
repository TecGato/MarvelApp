import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    width: '100%',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: '#fff',
    gap: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
