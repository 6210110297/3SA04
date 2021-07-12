import React, { useState,useEffect } from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=a8367b27fb8a3aeaac60724d023d590a`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])


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
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.5,

    },
    text: {
        fontSize: 24,
        color: '#fff',
    }
});
