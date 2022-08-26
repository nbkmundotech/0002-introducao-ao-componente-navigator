import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Botao from './botao';

// functional Component; nao tem estado (stateless)
const SegundaPagina = (props) => {

  // this.props.navigator.push({ id: 'SegundaPagina' })
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'antiquewhite' }}>
        <Botao
          label="Voltar"
          onPress={() => props.navigator.pop()}
        />

        <Text>
          Essa é a Segunda Pagina!!!
        </Text>
      </View>
    );
}

export default SegundaPagina;
