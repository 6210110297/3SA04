import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.list}>

            <Text style={styles.title}>main</Text>
            <Text style={styles.content}> {props.main}</Text>
            <View style={styles.iconContent}><Image source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }}
                style={styles.iconContent} /></View>

            <Text style={styles.title}>description</Text>
            <Text style={styles.content}>{props.description}</Text>
            <View>
                <Text style={styles.title}>{props.temp} °C</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    list:{
        
        alignItems:'center',

    },
    title: {
        margin: 10,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',

        color: '#fff',
    },
    iconContent:{
        height:80,
        width:80,
        alignItems:'center',
    },
    content: {
        margin: 10,
        fontSize: 18,
        textAlign: 'center',

        color: '#fff',
    }
});

