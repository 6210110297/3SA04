import React from "react";
import { StyleSheet,View, StatusBar,ImageBackground } from "react-native";
import Weather from "../components/Weather";

export default function WeatherScreen({ route }) {
    return (
        <View >
            <ImageBackground source={require('../bg.png')} style={styles.bg}>
                <Weather zipCode={route.params.zipCode} />
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        justifyContent:'space-evenly',
        width: '100%',
        height: '100%',
    },
})
