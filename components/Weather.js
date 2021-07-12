import React, { useState } from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
                <View style={styles.container}>
                    <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
                    
                    <Forecast {...forecastInfo} />
                </View>

            </ImageBackground>
        </View>
    );


}
const styles = StyleSheet.create({
    backdrop: {

        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
    },
    container: {
        padding: 15,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#000',
        opacity: 0.5,
        
    },
    text:{
        fontSize:24,
        color:'#fff',
    }
});
