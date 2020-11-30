import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Haze",
    subTitle: "Just don't go outside."
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#536974", "#292e49"],
    title: "Thunderstorm",
    subTitle: "an electrical storm or a lightning storm"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "Drizzle",
    subTitle: "rain in very small, light drops"
  }, 
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00c6fb", "#005bea"],
    title: "Rain",
    subTitle: "Bring un umbrella"
  }, 
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"],
    title: "Snow",
    subTitle: "full of or like snow"
  }, 
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "CleAtmospherear",
    subTitle: "hammering down onto the roof"
  }, 
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff7300", "#fff253"],
    title: "Clear",
    subTitle: "Look at the sky"
  }, 
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#73c8a9", "#373b44"],
    title: "Clouds",
    subTitle: "they couldn't look down upon the people on earth"
  }
}


export default function Weather({ temp, condition }) {
  return (    
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°asd</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere", 
    "Clear", 
    "Clouds",
    "Haze"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
