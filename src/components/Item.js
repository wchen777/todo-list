import React from 'react';
import { Octicons } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Icon } from 'native-base'

const { width } = Dimensions.get('window')
const Item = ({ textValue, id, deleteTodo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Octicons name="primitive-dot" size={16} color="black" />
                
                <Text style={styles.text}>{textValue}</Text>
            </View>
            <TouchableOpacity onPressOut={() => deleteTodo(id)}>
				<Icon name='md-trash' style={{ color: '#ABADF9', paddingRight: 10 }} />
			</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#2f95dc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        width: width / 1.4,
        alignItems: 'center',
        marginLeft: 20
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Baskerville',
        marginVertical: 20,
        paddingLeft: 10
    }
})

export default Item;