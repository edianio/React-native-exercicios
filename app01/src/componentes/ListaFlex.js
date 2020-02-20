import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'Jeremia', nota: 5.1},
    {id: 2, nome: 'Josefina', nota: 7.1},
    {id: 3, nome: 'Maria', nota: 8.1},
    {id: 4, nome: 'Geralt', nota: 9.1},
    {id: 5, nome: 'Claudio', nota: 2.1},
    {id: 6, nome: 'Yennefer', nota: 9.1},
    {id: 7, nome: 'Vasemir', nota: 6.0},
    {id: 8, nome: 'Rafael', nota: 9.1},
    {id: 9, nome: 'Vitoria', nota: 7.8},
    {id: 10, nome: 'Yasmin', nota: 9.1},
    {id: 11, nome: 'Emilly', nota: 6.5},
    {id: 12, nome: 'Corvo', nota: 9.1},
    {id: 13, nome: 'Robert', nota: 9.1},
    {id: 14, nome: 'Josafá', nota: 8.1},
    {id: 15, nome: 'Raimunda', nota: 9.1},
    {id: 16, nome: 'Francisco', nota: 7.1},
    {id: 17, nome: 'Edianio', nota: 3.1},
    {id: 18, nome: 'Ronilde', nota: 9.1},
    {id: 19, nome: 'Jose', nota: 6.1},
    {id: 20, nome: 'Leona', nota: 9.1},
    {id: 21, nome: 'Goku', nota: 9.1}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: '#222',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props =>{
    const rendeItem = ({item}) => <Aluno {...item} />

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={rendeItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}