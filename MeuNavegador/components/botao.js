import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const Botao = (props) => {
  return (
    <TouchableHighlight
      style={styles.botao}
      onPress={() => props.onPress()}
    >
      <Text style={styles.textoDoBotao}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  botao: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'rgb(196, 0, 0)',
    marginBottom: 20,
  },
  textoDoBotao: {
    color: 'rgb(200, 255, 255)',
    fontWeight: 'bold'
  }
});

export default Botao;
