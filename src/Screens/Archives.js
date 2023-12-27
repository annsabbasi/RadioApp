import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import imgA from '../assets/imgA.jpg';
import imgB from '../assets/imgB.jpg';
import imgC from '../assets/imgC.jpg';
import imgD from '../assets/imgD.jpg';
import imgE from '../assets/imgE.jpg';
import imgF from '../assets/imgF.jpg';
import imgG from '../assets/imgG.jpg';
import imgH from '../assets/imgH.jpg';
import imgI from '../assets/imgI.jpg';
const imageArray = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI];

export default function Archives() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image source={require('../assets/Ellipse3.png')} style={styles.image} />
                    <View style={{ position: 'absolute', left: -80, width: '10%', top: -10 }}>
                        <Image source={require('../assets/Ellipse3Shade.png')} style={styles.goBack} />
                    </View>
                    <View style={styles.header}>
                        <Image source={require('../assets/icons/goBack.png')} style={styles.goBack} />
                        <View style={styles.alignCenter}>
                            <Text style={styles.textHead}>Archives</Text>
                            <Text style={styles.textParagraph}>Lorem ipsum dolor sit amet,</Text>
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <Image source={require('../assets/icons/Union.png')} style={styles.primaryIcon} />
                    <TextInput style={styles.input} placeholder="Search the archives" />
                </View>

                <View style={styles.cardsContainer}>
                    {[1, 2, 3].map((item) => (
                        <View key={item} style={styles.row}>
                            {[1, 2, 3].map((card) => (
                                <TouchableOpacity key={card} style={styles.cardsItem}>
                                    <Image source={imageArray[(item - 1) * 3 + card - 1]} style={styles.img} />
                                    <Text style={styles.textLight}>18 Jan 2020</Text>
                                    <Text style={styles.textBold}>Ronan</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
    },
    ellipseHome: {
        position: 'relative',
        width: '100%',
        marginTop: -80
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        bottom: 90,
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    searchContainer: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 30,
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        gap: 5,
        paddingHorizontal: 10
    },
    input: {
        borderColor: 'transparent',
        borderWidth: 1,
        padding: 8,
        width: '90%',
    },
    cardsContainer: {
        flex: 1,
        paddingVertical: 16,
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 70,
    },
    cardsItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: { width: '100%', },
    alignCenter: { alignItems: 'center', gap: 5 },
    textParagraph: { fontSize: 16, color: 'white', fontWeight: '700' },
    primaryIcon: { width: 25, height: 25 },
    textLight: { textAlign: 'center', fontSize: 14, marginTop: 8 },
    textBold: { fontSize: 18, fontWeight: '700', },
    img: { width: 100, height: 100, borderRadius: 5 }
});