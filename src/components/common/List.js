import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';

const List = ({ data, renderItem, keyExtractor, extraData, refreshing }) => {
    const { container } = styles;

    return(
        <View style={container}>
            <FlatList
                data={data}
                refreshing={refreshing}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                extraData={extraData}
            />
        </View>
    );
}

const styles = {
    container: {
        borderWidth: 1,
        margin: 10,
        height: Dimensions.get('screen').height / 1.3
    },
}

export default List;