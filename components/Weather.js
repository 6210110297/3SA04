import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        name: '-',
        main: '-',
        description: '-',
        temp: 0,
        pressure:0,
        humidity:0,
        clouds:0,
        icon:'01d',
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=a8367b27fb8a3aeaac60724d023d590a`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        pressure: json.main.pressure,
                        humidity: json.main.humidity,
                        clouds: json.clouds.all,
                        icon: json.weather[0].icon
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    if(forecastInfo.name!='-'){
        return (
            <View style={styles.backdrop}>
                <View style={styles.container}>
                    <Text style={styles.title}>{forecastInfo.name}</Text>
                    <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
    
                    <Forecast {...forecastInfo} />
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.skyText}>Pressure</Text>
                        <Text style={styles.skyText}>Humidity</Text>
                        <Text style={styles.skyText}>Clouds</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.skyText}>{forecastInfo.pressure} hPa</Text>
                        <Text style={styles.skyText}>{forecastInfo.humidity}%</Text>
                        <Text style={styles.skyText}>{forecastInfo.clouds}%</Text>
                    </View>
                </View>
            </View>
        );
    }
    else{
        return (<View style={styles.container}><Text style={styles.title}>...Loading</Text></View>);
    }


}
const styles = StyleSheet.create({

    backdrop: {

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',

    },
    container: {
        padding: 15,
        margin: 10,

        width: '90%',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        opacity: 0.75,
        justifyContent: 'space-evenly'

    },
    row: {

        width: '90%',
        alignItems: 'center',


        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',

    },
    skyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    title: {
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',

    },
    text: {
        fontSize: 24,
        color: '#fff',
    }
});
