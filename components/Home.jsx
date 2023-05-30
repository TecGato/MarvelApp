import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import CharacterCard from './CharacterCard';
import apiParams from '../config';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  React.useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => {
        setData(response.data.data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="00ff00" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <CharacterCard
              id={item.id}
              image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              name={item.name}
            />
          )}
        />
      )}
    </View>
  );
}
