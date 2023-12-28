import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import Ellipse3 from '../assets/Ellipse3.png';
import Ellipse3Shade from '../assets/Ellipse3Shade.png';
import goBackIcon from '../assets/icons/goBack.png';
import musicIcon from '../assets/icons/music.png';
import paintIcon from '../assets/icons/paint.png';
import locationIcon from '../assets/icons/location.png';
import guitarIcon from '../assets/icons/guitar.png';
import calendarIcon from '../assets/icons/calendar.png';
import clockIcon from '../assets/icons/clock.png';
import eighteenImage from '../assets/18.png';
import twentySevenImage from '../assets/27.png';
import MaleAvatar from '../assets/MaleAvatar.png';
import { StatusBar } from 'expo-status-bar';

export default function DjProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image source={Ellipse3} style={styles.image} />
                    <View style={styles.header}>
                        <TouchableOpacity style={{ zIndex: 3 }}>
                            <Image source={goBackIcon} style={styles.goBack} />
                        </TouchableOpacity>
                        <View style={styles.elipseShadeMain}>
                            <Image
                                source={Ellipse3Shade} />
                        </View>
                        <Text style={styles.textHead}>Dj Profile</Text>
                        <Text>{''}</Text>
                    </View>

                    <View style={styles.profileData}>
                        <Image source={MaleAvatar} style={styles.profileImg} />
                    </View>
                </View>
                <View style={{ marginBottom: 40, alignItems: 'center', marginTop: 55, gap: 5 }}>
                    <Text style={styles.profileName}>Ronan Ryan</Text>
                    <Text style={styles.profileDesc}>Ronan is the top DJ featuring shows like classic country and blues.</Text>
                </View>
                <View style={[styles.cardsContainer, { justifyContent: 'space-around', paddingHorizontal: 10, marginTop: 30 }]}>
                    {[
                        { icon: musicIcon, heading: 'Genre', paragraph: 'Country' },
                        { icon: paintIcon, heading: 'Interest', paragraph: 'Playing, Reading, Drama' },
                        { icon: locationIcon, heading: 'Location', paragraph: 'Ireland' },
                    ].map((item, index) => (
                        <View key={index} style={{ gap: 5 }}>
                            <Image source={item.icon} style={styles.musicpng} />
                            <Text style={styles.musicHeading}>{item.heading}</Text>
                            <Text style={item.heading === 'Interest' ? styles.musicInterestParagraph : styles.musicParagraph}>{item.paragraph}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.showContainer}>
                    <View style={styles.djHead}>
                        <Image source={guitarIcon} style={styles.headIcon} />
                        <Text style={styles.textDj}>Shows</Text>
                    </View>
                    {[
                        { image: eighteenImage, text: 'Country & Irish With Dj Ronan', name: 'Ronan Ryazn', date: 'Saturday, 18 Feb', time: '10:00 AM' },
                        { image: twentySevenImage, text: 'Country & Irish With Dj Ronan', name: 'Ronan Ryazn', date: 'Saturday, 18 Feb', time: '10:00 AM' },
                    ].map((item, index) => (
                        <View key={index} style={styles.showsCard}>
                            <Image source={item.image} style={styles.eighteen} />
                            <View style={styles.cardContent}>
                                <Text style={styles.showHeadText}>{item.text}</Text>
                                <Text style={styles.textSizeGlobal}>{item.name}</Text>
                                <View style={styles.cardsTimeInfoMain}>
                                    {[
                                        { icon: calendarIcon, text: item.date },
                                        { icon: clockIcon, text: item.time },
                                    ].map((info, i) => (
                                        <View key={i} style={styles.cardsTimeInfo}>
                                            <Image source={info.icon} style={styles.primaryIcons} />
                                            <Text style={styles.textSizeGlobal}>{info.text}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20,
        // backgroundColor: 'green',
    },
    ellipseHome: {
        position: 'relative',
        width: '100%',
    },
    elipseShadeMain: {
        position: 'absolute',
        left: -80,
        width: '10%',
        top: -40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        top: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    profileData: {
        position: 'absolute',
        bottom: '-15%',
        left: '30%',
        alignItems: 'center',
        zIndex: 3,
        gap: 10,
    },
    profileImg: {
        width: 160,
        height: 210,
    },
    profileName: {
        fontSize: 24,
        fontWeight: '700',
    },
    profileDesc: {
        fontSize: 16,
        textAlign: 'center',
        width: '78%',
        backgroundColor: 'white',
        lineHeight: 25,
    },
    cardsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 40,
        marginTop: 30,
        justifyContent: 'space-around',
    },
    musicHeading: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700'
    },
    musicParagraph: {
        textAlign: 'center',
        fontSize: 17
    },
    musicInterestParagraph: {
        textAlign: 'center',
        fontSize: 17,
        width: '80%',
        alignSelf: 'center',
        lineHeight: 25,
    },
    showContainer: {
        marginVertical: 30,
        gap: 40,
    },
    djHead: {
        marginHorizontal: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    textDj: {
        fontWeight: '700',
        fontSize: 25,
    },
    showsCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        gap: 10,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
    },
    eighteen: {
        width: 80,
        height: 90,
        borderRadius: 10,
    },
    cardContent: {
        width: '75%',
        gap: 5,
    },
    cardsTimeInfoMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    cardsTimeInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    goBack: { width: 35, height: 35 },
    musicpng: { alignSelf: 'center' },
    image: { width: '100%', },
    headIcon: { width: 50, height: 50 },
    showHeadText: { fontSize: 20, fontWeight: '700' },
    primaryIcons: { width: 20, height: 20 },
    textSizeGlobal: { fontSize: 16, color: 'gray' },
});