import * as React from 'react';
import axios from 'axios';
import { View, ActivityIndicator } from 'react-native';
import Comic from './Comic';
import apiParams from '../config';
import { FlatList } from 'react-native-gesture-handler';

export default function Comics({ listComics }) {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { ts, apikey, hash } = apiParams;

  React.useEffect(() => {
    const promisesArray = listComics?.map((com) =>
      axios.get(com.resourceURI, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
    );

    Promise.all(promisesArray)
      .then((responses) =>
        setData(responses.map((res) => res?.data?.data?.results[0]))
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          horizontal
          pagingEnabled
          renderItem={({ item }) => (
            <Comic
              key={item.id}
              name={item.title}
              image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}
            />
          )}
        />
      )}
    </View>
  );
}
