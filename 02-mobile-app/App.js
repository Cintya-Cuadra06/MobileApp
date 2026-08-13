import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="light" />

      <TouchableHighlight
      underlayColor="rgb(8, 42, 58)"
      onPress={() => alert('Hola')}
      style={{ backgroundColor: 'rgb(8, 42, 58)', width: 200, height: 50, 
        alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}
      >
        <Text style={{ color: 'white' }}>Pulsa aquí</Text>
      </TouchableHighlight>
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
  }
});
