import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/common/Header';
import Input from '../components/common/Input';
import List from '../components/common/List';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            ...props,
            searchTerm: '',
            data: [
                {id: 1, name: 'Francesco Raoux'},
                {id: 2, name: 'Tasha Bonanno'},
                {id: 3, name: 'Merle Braunstein'},
                {id: 4, name: 'Aleda Bouzan'},
                {id: 5, name: 'Issiah Elnaugh'}              
            ],
            result: []
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Header title={'Flatlist Filter'} />

                <Input onChangeText={ (text) => this.setState({searchTerm: text }) }/>

                <List 
                    data={this.state.data.filter(item => item.name.includes(this.state.searchTerm))}
                    renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 20
    },
});