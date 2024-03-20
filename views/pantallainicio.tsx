
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const pantallainicio = ({ navigation }) => {
  const goToOtraPantalla = () => {
    
     navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <TouchableOpacity onPress={goToOtraPantalla} style={styles.button}>
        <Text style={styles.buttonText}>Ir al pokedex</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4FDAD3', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', 

  },
  button: {
    backgroundColor: '#FFCC00', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default pantallainicio;
