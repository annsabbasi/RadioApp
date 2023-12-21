import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Splash() {
    return (
        <SafeAreaView>
            <Image
                source={require('../assets/Splash.png')}
                style={styles.ellipse2} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    ellipse2: {
        width: '100%',
        height: '100%'
    },
})