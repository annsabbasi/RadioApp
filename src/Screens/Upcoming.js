import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const showData = [
    {
        image: '18',
        title: 'Country & Irish With Dj Ronan',
        host: 'Ronan Ryazn',
        image: require('../assets/18.png'),
        timeInfo: [
            { icon: require('../assets/icons/calendar.png'), text: 'Saturday, 18 Feb' },
            { icon: require('../assets/icons/clock.png'), text: '10:00 AM' },
        ],
    },
    {
        image: '18',
        title: 'Country & Irish With Dj Ronan',
        host: 'Ronan Ryazn',
        image: require('../assets/27.png'),
        timeInfo: [
            { icon: require('../assets/icons/calendar.png'), text: 'Saturday, 18 Feb' },
            { icon: require('../assets/icons/clock.png'), text: '10:00 AM' },
        ],
    },
    {
        image: '18',
        title: 'Country & Irish With Dj Ronan',
        host: 'Ronan Ryazn',
        image: require('../assets/18.png'),
        timeInfo: [
            { icon: require('../assets/icons/calendar.png'), text: 'Saturday, 18 Feb' },
            { icon: require('../assets/icons/clock.png'), text: '10:00 AM' },
        ],
    },
    {
        image: '18',
        title: 'Country & Irish With Dj Ronan',
        host: 'Ronan Ryazn',
        image: require('../assets/27.png'),
        timeInfo: [
            { icon: require('../assets/icons/calendar.png'), text: 'Saturday, 18 Feb' },
            { icon: require('../assets/icons/clock.png'), text: '10:00 AM' },
        ],
    },
];

export default function UpComing({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={[styles.ellipseHome, styles.relative]}>
                    <Image source={require('../assets/Ellipse3.png')} style={styles.image} />
                    <View style={[styles.absolute, { left: -80, width: '10%', top: -10 }]}>
                        <Image source={require('../assets/Ellipse3Shade.png')} />
                    </View>

                    <View style={styles.header}>
                        <TouchableOpacity style={{ zIndex: 3 }} onPress={() => { navigation.navigate('Home') }}>
                            <Image source={require('../assets/icons/goBack.png')} style={styles.goBack} />
                        </TouchableOpacity>
                        <View style={styles.alignCenter}>
                            <Text style={styles.textHead}>UpComing Shows</Text>
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.showContainer}>
                    {showData.map((show, index) => (
                        <View key={index} style={styles.showsCard}>
                            <Image source={show.image} style={styles.eighteen} />

                            <View style={styles.cardContent}>
                                <Text style={styles.showHeadText}>{show.title}</Text>
                                <Text style={styles.textSizeGlobal}>{show.host}</Text>
                                <View style={styles.cardsTimeInfoMain}>
                                    {show.timeInfo.map((info, i) => (
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
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ellipseHome: {
        width: '100%',
        marginTop: -80
    },
    relative: {
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
        zIndex: 3,
        gap: 10,
    },
    image: {
        width: '100%',
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
    alignCenter: {
        alignItems: 'center',
        gap: 5
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    showContainer: {
        marginVertical: 70,
        gap: 40,
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
        marginTop: 10
    },
    cardsTimeInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    showHeadText: {
        fontSize: 20,
        fontWeight: '700'
    },
    textSizeGlobal: {
        fontSize: 16,
        color: 'gray'
    },
    goBack: { width: 35, height: 35 },
    primaryIcons: { width: 20, height: 20 },
});