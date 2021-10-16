import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AddItem = ({addItem, textInput}) => {

    const [text, setText] = useState('')

    const onChange = text => setText(text)

    const update = () => {
        addItem(text)
    }

    return (
        <View>
            <TextInput placeholder="Add Item..." ref={textInput} style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={update} >
                <Text style={styles.btnText} > 
                    <Ionicons name="add" style={{color: 'green', fontSize: 20}}  />
                    Add Item
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default AddItem;
