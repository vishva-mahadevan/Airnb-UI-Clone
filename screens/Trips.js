import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

class Trips extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text >Trip JS</Text>
            </View>
        )
    }
}
export default Trips;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});