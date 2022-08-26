import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import Botao from './botao';

export default (props) => {

  const navigate = (id) => {
    props.navigator.push({ id });
  };

  return (
    <View style={styles.container}>
      <Botao
        label="Primeira Pagina"
        onPress={() => navigate('PRIMEIRA_PAGINA')}
      />

      <Botao
        label="Segunda Pagina"
        onPress={() => navigate('SEGUNDA_PAGINA')}
      />

      <Botao
        label="Terceira Pagina"
        onPress={() => navigate('TERCEIRA_PAGINA')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
