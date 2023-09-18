import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [entrada, setEntrada] = useState('')
  const [reveillon, setReveillon] = useState('')
  const [reveillonDate, setReveillonDate] = useState('')
  const [carnaval, setCarnaval] = useState('')
  const [carnavalDate, setCarnavalDate] = useState('')
  const [tiradentes, setTiradentes] = useState('')
  const [tiradentesDate, setTiradentesDate] = useState('')

  const takeJson = () => {
    try {
      const json = JSON.parse(entrada);
      for (const i in json) {
      if (json.date == "2024-02-13") setCarnaval(json.name);
      if (json.date == "2024-02-13") setCarnavalDate(json.date);
      if (json.date == "2024-01-01") setReveillon(json.date);
      if (json.date == "2024-01-01") setReveillonDate(json.date);
      if (json.date == "2024-04-21") setTiradentes(json.date);
      if (json.date == "2024-04-21") setTiradentesDate(json.date);      
      }

    } catch (error) {
      alert('JSON Error')
    }
  };


  return (
    <View style={styles.container}>
      <Text>Feriados: </Text>
      <TextInput multiline value={entrada} onChangeText={setEntrada} 
      placeholder='JSON' style={styles.input}></TextInput>
      <Button title='Ver feriados' onPress={takeJson}></Button>
      <Text>Feriados:</Text>
      <Text>{reveillon} {reveillonDate}</Text>
      <Text>{carnaval} {carnavalDate}</Text>
      <Text>{tiradentes} {tiradentesDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
     borderWidth: 1,
     borderColor: 'gray',
     marginBottom: 16,
     padding: 8,

   } 
});
