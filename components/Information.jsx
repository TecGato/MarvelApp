import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './CharacterCard';

export default function Information({ image, name, description }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image style={{ width: '100%', height: '50%' }} source={{ uri: image }} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.container}>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
