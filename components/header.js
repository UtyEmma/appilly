import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: "Shopping List"
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        marginTop: 20,
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700'
    }
})

export default Header;