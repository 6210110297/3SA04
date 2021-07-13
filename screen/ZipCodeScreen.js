import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]



const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })} style={styles.zipItem}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>Zipcode: {code}</Text>
        </View>

    </TouchableHighlight>
)
const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg.png')} style={styles.bg}>
            <View style={styles.zipList}>

                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
                <StatusBar style="auto" />
            </View>
        </ImageBackground>

    );

}

const styles = StyleSheet.create({
    bg: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    zipList: {
        flex: 1,
        width: '100%',
        
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFDFA',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        borderRadius:20,
        opacity: 0.75,
    },

    zipPlace: {
        flex: 2,
        fontSize: 40,
    
    },
    zipCode: {
        flex: 1,
        fontSize:18,
    }
})