import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types'

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: '비',
        subtitle: '우산 챙겨요',
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: '맑음',
        subtitle: '해가 쨍쨍',
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: '천둥',
        subtitle: '무서워...',
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: '구름',
        subtitle: '나도 알아, 너의 그 마음',
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: '눈',
        subtitle: 'Do you want to build a snowman?',
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: 'Drizzle',
        subtitle: 'Is like rain',
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: '안개',
        subtitle: '안개',
        icon: 'ios-rainy-outline'
    },
}

// export default class Weather extends Component {
//     render(){
//         return (
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container} >
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>35*C</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining</Text>
//                     <Text style={styles.subtitle}>For more information look outside.</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

function Weather({ weatherName, temp }){
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container} >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}*C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: 30
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10        
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 90
    },
    title: {
        fontSize: 30,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 20,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
})