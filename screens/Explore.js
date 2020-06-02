import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from './components/Explore/Category';
import Around from './components/Explore/Around';


const { height, width } = Dimensions.get('window')
class Explore extends Component {

    componentDidMount() {
        this.startHeaderheight = 80
        if (Platform.OS == 'android') {
            this.startHeaderheight = 100 + StatusBar.currentHeight;
        }
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderheight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd', padding: 15 }}>
                        <View style={{
                            flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.5,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ paddingRight: 10 }}></Icon>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search Place, Hotels"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 21, fontWeight: '700', paddingHorizontal: 20 }}>Find nearby hotel with Kumbipatham</Text>
                            <ScrollView
                                horizontal={true}>
                                <Category imageUri={{ uri: 'https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg' }} name="Bonjour Allez" />
                                <Category imageUri={{ uri: 'https://thumbnails.trvl-media.com/CGhWvHF2Z_cjLXMRt9EXLfQEDHc=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/31000000/30330000/30328900/30328883/bb25deca_z.jpg' }} name="The K-Resort" />
                                <Category imageUri={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E1BAQECiFYYLI7b2Q/company-background_10000/0?e=2159024400&v=beta&t=E657184KLAW9vf0bKGVxSMhX8xd7csJ54FohT4OjaZY' }} name="Playa Hotel" />
                                <Category imageUri={{ uri: 'https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg' }} name="Bonjour Allez" />
                                <Category imageUri={{ uri: 'https://thumbnails.trvl-media.com/CGhWvHF2Z_cjLXMRt9EXLfQEDHc=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/31000000/30330000/30328900/30328883/bb25deca_z.jpg' }} name="The K-Resort" />
                                <Category imageUri={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E1BAQECiFYYLI7b2Q/company-background_10000/0?e=2159024400&v=beta&t=E657184KLAW9vf0bKGVxSMhX8xd7csJ54FohT4OjaZY' }} name="Playa Hotel" />
                            </ScrollView>
                            <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 21, fontWeight: '700' }}>Welcome to Kumbipatham</Text>
                                <Text style={{ fontWeight: '100', marginTop: 6 }}>Find nearby destination</Text>
                                <View style={{ marginTop: 20, height: 130, width: width - 40 }}>
                                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E1BAQECiFYYLI7b2Q/company-background_10000/0?e=2159024400&v=beta&t=E657184KLAW9vf0bKGVxSMhX8xd7csJ54FohT4OjaZY' }} />
                                </View>
                            </View>
                            <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 21, fontWeight: '700' }}>Things Around the World</Text>
                                <Around style={{ borderWidth: 1, borderColor: '#dddddd' }} address1="9999 S. Saxton Street
                                Chippewa Falls, WI 54729" address2="7109 Bridge St.
                                Monroeville, PA 15146" hotel1="Bonjour" hotel2="Atuz" price1="$1000" price2="$2000"
                                    imageUri1={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E1BAQECiFYYLI7b2Q/company-background_10000/0?e=2159024400&v=beta&t=E657184KLAW9vf0bKGVxSMhX8xd7csJ54FohT4OjaZY' }}
                                    imageUri2={{ uri: 'https://thumbnails.trvl-media.com/CGhWvHF2Z_cjLXMRt9EXLfQEDHc=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/31000000/30330000/30328900/30328883/bb25deca_z.jpg' }}
                                />

                                <Around style={{ borderWidth: 1, borderColor: '#dddddd' }} address1="9999 S. Saxton Street
                                Chippewa Falls, WI 54729" address2="7109 Bridge St.
                                Monroeville, PA 15146" hotel1="Bonjour" hotel2="Atuz" price1="$1000" price2="$2000"
                                    imageUri1={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E1BAQECiFYYLI7b2Q/company-background_10000/0?e=2159024400&v=beta&t=E657184KLAW9vf0bKGVxSMhX8xd7csJ54FohT4OjaZY' }}
                                    imageUri2={{ uri: 'https://thumbnails.trvl-media.com/CGhWvHF2Z_cjLXMRt9EXLfQEDHc=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/31000000/30330000/30328900/30328883/bb25deca_z.jpg' }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
