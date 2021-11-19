import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const FlatListBasics = (props) => {
    
return (
    <View style={styles.container}>
    <FlatList
        data={props.donnee}
        renderItem={({item}) => 
            <TouchableOpacity onPress={() => {Alert.alert(item.value)}}>
                <Text style={styles.item}>
                    {item.value}
                </Text>
            </TouchableOpacity>
        }
    />
    </View>
    );
}


export default FlatListBasics;