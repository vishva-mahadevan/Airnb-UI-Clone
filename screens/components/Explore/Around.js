import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';


class Around extends Component {
    render() {
        return (
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <View style={{ flex: 1, paddingRight: 10 }} >
                    <Image style={{ flex: 1, height: 110, width: 150, resizeMode: 'cover', }} source={this.props.imageUri1} />
                    <Text style={{ fontSize: 17, fontWeight: '600', alignContent: 'center' }}>{this.props.hotel1}</Text>
                    <Text>{this.props.address1}</Text>
                    <Text style={{ fontSize: 11, fontWeight: '600' }} >{this.props.price1}</Text>
                </View>

                <View style={{ flex: 1, paddingRight: 10 }} >
                    <Image style={{ flex: 1, height: 110, width: 150, resizeMode: 'cover', }} source={this.props.imageUri2} />
                    <Text style={{ fontSize: 17, fontWeight: '600', alignContent: 'center' }}>{this.props.hotel2}</Text>
                    <Text>{this.props.address2}</Text>
                    <Text style={{ fontSize: 11, fontWeight: '600' }} >{this.props.price2}</Text>
                </View>
            </View>
        )
    }
}
export default Around;