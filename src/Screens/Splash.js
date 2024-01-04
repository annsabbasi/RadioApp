import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, StatusBar, Animated } from 'react-native';

const Splash = ({ navigation }) => {
    const opacityValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        const fadeIn = Animated.timing(opacityValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        });
        const fadeOut = Animated.timing(opacityValue, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        });

        Animated.sequence([fadeIn, Animated.delay(2000), fadeOut]).start(() => {
            navigation.navigate('SignUp');
        }, [navigation, opacityValue])
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#97AE26" barStyle="dark-content" />
            <Animated.Image
                source={require('../assets/Splash.png')}
                style={[styles.image, { opacity: opacityValue }]}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default Splash;