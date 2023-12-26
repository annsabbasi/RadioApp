import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function DjProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image
                        source={require('../assets/Ellipse3.png')}
                        style={styles.image} />
                    <View style={{ position: 'absolute', left: -80, width: '10%', top: -10 }}>
                        <Image
                            source={require('../assets/Ellipse3Shade.png')}
                            style={styles.goBack} />
                    </View>
                    <View style={styles.header}>
                        <Image
                            source={require('../assets/icons/goBack.png')}
                            style={styles.goBack} />
                        <Text style={styles.textHead}>Dj Profile</Text>
                        <Text>{''}</Text>
                    </View>


                    <View style={styles.profileData}>
                        <Image
                            source={require('../assets/MaleAvatar.png')}
                            style={styles.profileImg} />
                    </View>
                </View>
                <View style={{ marginBottom: 40, alignItems: 'center', marginTop: 55, gap: 5 }}>
                    <Text style={styles.profileName}>Ronan Ryan</Text>
                    <Text style={styles.profileDesc}>Ronan is the top DJ featuring shows like classic country and blues.</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <View style={styles.cardBox}>
                        <Image
                            source={require('../assets/icons/music.png')}
                            style={styles.musicpng} />
                        <Text style={styles.musicHeading}>Genre</Text>
                        <Text style={styles.musicParagraph}>Country</Text>
                    </View>
                    <View style={styles.cardBox}>
                        <Image
                            source={require('../assets/icons/paint.png')}
                            style={styles.musicpng} />
                        <Text style={styles.musicHeading}>Interest</Text>
                        <Text style={styles.musicInterestParagraph}>Playing, Reading, Drama</Text>
                    </View>
                    <View style={styles.cardBox}>
                        <Image
                            source={require('../assets/icons/location.png')}
                            style={styles.musicpng} />
                        <Text style={styles.musicHeading}>Location</Text>
                        <Text style={styles.musicParagraph}>Ireland</Text>
                    </View>
                </View>

                <View style={styles.showContainer}>
                    <View style={styles.djHead}>
                        <Image
                            source={require('../assets/icons/guitar.png')} style={styles.headIcon} />
                        <Text style={styles.textDj}>Shows</Text>
                    </View>

                    <View style={styles.showsCard}>
                        <Image
                            source={require('../assets/18.png')} style={styles.eighteen} />
                        <View style={styles.cardContent}>
                            <Text style={styles.showHeadText}>Country & Irish With Dj Ronan</Text>
                            <Text style={styles.textSizeGlobal}>Ronan Ryazn</Text>
                            <View style={styles.cardsTimeInfoMain}>
                                <View style={styles.cardsTimeInfo}>
                                    <Image
                                        source={require('../assets/icons/calendar.png')} style={styles.primaryIcons} />
                                    <Text style={styles.textSizeGlobal}>Saturday, 18 Feb</Text>
                                </View>
                                <View style={styles.cardsTimeInfo}>
                                    <Image
                                        source={require('../assets/icons/clock.png')} style={styles.primaryIcons} />
                                    <Text style={styles.textSizeGlobal}>10: 00 AM</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.showsCard}>
                        <Image
                            source={require('../assets/27.png')} style={styles.eighteen} />
                        <View style={styles.cardContent}>
                            <Text style={styles.showHeadText}>Country & Irish With Dj Ronan</Text>
                            <Text style={styles.textSizeGlobal}>Ronan Ryazn</Text>
                            <View style={styles.cardsTimeInfoMain}>
                                <View style={styles.cardsTimeInfo}>
                                    <Image
                                        source={require('../assets/icons/calendar.png')} style={styles.primaryIcons} />
                                    <Text style={styles.textSizeGlobal}>Saturday, 18 Feb</Text>
                                </View>
                                <View style={styles.cardsTimeInfo}>
                                    <Image
                                        source={require('../assets/icons/clock.png')} style={styles.primaryIcons} />
                                    <Text style={styles.textSizeGlobal}>10: 00 AM</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green',
    },

    ellipseHome: {
        position: 'relative',
        width: '100%',
    },
    image: {
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        top: 0,
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
        // justifyContent: 'space-between',
        // padding: 20,
        // top: '50%',
        // position: 'absolute',
        // paddingTop: 100,
        // alignItems: 'center',
        // borderWidth: 2,
        // zIndex: 3,
        // width: '100%',
        // marginTop: 25,
        // paddingVertical: 20,
        // alignSelf: 'center',

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
        // borderWidth: 2,
        // padding: 20
    },
    profileName: {
        fontSize: 24,
        fontWeight: '700'
    },
    profileDesc: {
        fontSize: 16,
        // fontWeight: '700',
        // zIndex: 3,
        textAlign: 'center',
        width: '78%',
        backgroundColor: 'white',
        lineHeight: 25
    },
    cardsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 40,
        marginTop: 30,
        // borderWidth: 2,
        // alignItems: 'center',
        justifyContent: 'space-around',
        // paddingTop: 100
    },
    cardBox: { gap: 5 },
    musicpng: { alignSelf: 'center' },
    musicHeading: { textAlign: 'center', fontSize: 15, fontWeight: '700', },
    musicParagraph: { textAlign: 'center', fontSize: 17 },
    musicInterestParagraph: { textAlign: 'center', fontSize: 17, width: '80%', alignSelf: 'center', lineHeight: 25 },

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
    // djTeam: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    // },
    headIcon: { width: 50, height: 50 },
    textDj: {
        fontWeight: '700',
        fontSize: 25,
    },
    showsCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        // borderWidth: 2,
        alignSelf: 'center',
        // paddingVertical: 15,
        // paddingHorizontal: 15,
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
        borderRadius: 10
    },
    cardContent: {
        width: '75%',
        // borderWidth: 2,
        gap: 5
    },
    cardsTimeInfoMain: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 },
    cardsTimeInfo: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 },
    showHeadText: { fontSize: 20, fontWeight: '700' },
    primaryIcons: { width: 20, height: 20 },
    textSizeGlobal: { fontSize: 16, color: 'gray' },
});