import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

const Splash = () => {
    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor="#ffffff" barStyle="dark-content" /> */}
            <StatusBar backgroundColor="#97AE26" barStyle="dark-content" />
            <Image
                source={require('../assets/Splash.png')}
                style={styles.image}
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
