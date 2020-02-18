import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Padrao from './../Estilos/Padrao';

export default class Contador extends Component{
    state = {
        numero: this.props.inicial
    }

    maisUm = () => this.setState({numero: this.state.numero +1})

    limpar = () => this.setState({numero: this.props.inicial})

    render(){
        return (
            <View>
                <Text style={Padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight onPress={this.maisUm} onLongPress={this.limpar}>
                    <Text style={Padrao.ex}>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}