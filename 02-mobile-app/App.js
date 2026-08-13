import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView} from 'react-native';
import { getLatestGames } from './lib/metacritic';

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <View style={styles.container}>
    <StatusBar style="light" />

   {games.map((game) => (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image}/>
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
      </View>
   ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 10,
  },

  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  
  description: {
    fontSize: 16,
    color: '#eee',
  },
  
  score: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'green',
  }, 

});

