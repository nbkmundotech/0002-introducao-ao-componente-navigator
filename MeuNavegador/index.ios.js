/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';

import PrimeiraPagina from './components/primeira_pagina';
import SegundaPagina from './components/segunda_pagina';
import NavMenu from './components/nav_menu';

class MeuNavegador extends Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case 'PRIMEIRA_PAGINA':
        return <PrimeiraPagina navigator={navigator} />;
        break;
      case 'SEGUNDA_PAGINA':
        return <SegundaPagina navigator={navigator} />;
        break;
      default:
        return <NavMenu navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'NAV_MENU' }}
        renderScene={this.renderScene}
      />
    );
  }
}

// const styles = StyleSheet.create({
// });

AppRegistry.registerComponent('MeuNavegador', () => MeuNavegador);
