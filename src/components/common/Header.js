import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
    const { container, text, textContainer } = styles;

    return(
        <View style={container}>
            <View style={textContainer}>
                <Text style={text}>{title}</Text>
            </View>
        </View>
    );
}

const styles = {
    container: {
        paddingTop: 20,
        backgroundColor: '#404041',
        height: 50,
    },
    textContainer: {
        paddingTop: 10,
        justifyContent: 'flex-end'
    },
    text: {
        color: '#FAA919',
        fontWeight: '400',
        textAlign: 'center',
        justifyContent: 'flex-end',
    }
}

export default Header;