import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, {MegaSena} from './componentes/MegaSena'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'
import ComunicacaoIndireta from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator({
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: {title: "Lista (FlexBox)"}
    },
    ComunicacaoIndireta: {
        screen: ComunicacaoIndireta,
        navigationOptions: {title: "Comunicação Indireta"}
    },
    Avo: {
        screen: () => <Avo nome="Ze" sobrenome="Heart" />,
        navigationOptions: {title: "Comunicação Direta"}
    },
    Evento: {
        screen: Evento
    },
    ValidarProps:{
        screen: () => <ValidarProps ano={19} />,
        navigationOptions: {title: "Validar Props"}
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador inicial={0} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='Nativo' />
    },
    ParImpar: {
        screen: () => <ParImpar num={43} />,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='shubiruba'/>
    }
}, {drawerWidth: 300})