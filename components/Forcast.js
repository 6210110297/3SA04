import React from "react";
import { StyleSheet,Text,View } from "react-native";

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.title}>main</Text>
            <Text style={styles.content}>{props.main}</Text>
            <Text style={styles.content}>description</Text>
            <Text style={styles.content}>{props.description}</Text>
            <View>
                <Text style={styles.title}>{props.temp} °C</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    title:{
        margin:10,
        fontSize:24,
        textAlign:'center',
        color:'#fff',
    },
    content:{
        margin:10,
        fontSize:18,
        textAlign:'center',

        color:'#fff',
    }
});

