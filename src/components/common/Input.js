import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText }) => {
    const { container, textInputContainer, textInput } = styles;

    return(
        <View style={container}>
            <View style={textInputContainer}>
                <TextInput
                    style={textInput}
                    placeholder={'Search'}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
}

const styles = {
    container: {
        height: 50,
    },
    textInputContainer: {
        paddingTop: 10,
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10
    },
    textInput: {
        alignContent: 'center',
        paddingLeft: 10,
        marginBottom: 4,
        fontWeight: '200',
    }
}

export default Input;