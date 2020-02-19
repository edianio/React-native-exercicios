import React from 'react';
import {Text, View} from 'react-native';
import Padrao from './../Estilos/Padrao';

function Verifica(num) {
    const v = num % 2 == 0 ? 'Par' : 'Impar';
    return <Text style={Padrao.ex}>O número {num} é {v}</Text>
}

export default props => <View>{Verifica(props.num)}</View>