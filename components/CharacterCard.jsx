import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CharacterCard({ image, name, id }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', { id })}
    >
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
