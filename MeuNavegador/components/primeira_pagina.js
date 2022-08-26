import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Botao from './botao';

// functional Component; nao tem estado (stateless)
const PrimeiraPagina = (props) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Botao
          label="Voltar"
          onPress={() => props.navigator.pop()}
        />

        <Text>
          Essa é a Primeira Pagina!!!
        </Text>
      </View>
    );
}

export default PrimeiraPagina;
