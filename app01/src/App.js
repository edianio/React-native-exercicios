import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Padrao from './estilos/Padrao';

export default class App extends Component{
  render(){
    return(
      <View>
        <Text style={Padrao.fonte40}>Relô uôrd!</Text>
      </View>
    )
  }
}