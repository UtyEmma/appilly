import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText} key={item.id}>{item.text}</Text>
                <Ionicons name="remove-circle-outline" size={28} color='firebrick' onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem : {
        padding: 15,
        backgroundColor: '#fafafa',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listItemText: {
        fontSize: 18
    }
})

export default ListItem
