import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function UpComing() {
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
                        <View style={styles.alignCenter}>
                            <Text style={styles.textHead}>UpComing Shows</Text>
                            {/* <Text style={styles.textParagraph}>{''}</Text> */}
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.showContainer}>

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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
        // backgroundColor: 'green',
    },
    ellipseHome: {
        position: 'relative',
        width: '100%',
        // bottom: 50,
        marginTop: -80
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
    alignCenter: { alignItems: 'center', gap: 5 },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    textParagraph: { fontSize: 16, color: 'white', fontWeight: '700' },
    // 


    showContainer: {
        marginVertical: 70,
        gap: 40,
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
    cardsTimeInfo: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 },
    showHeadText: { fontSize: 20, fontWeight: '700' },
    primaryIcons: { width: 20, height: 20 },
    textSizeGlobal: { fontSize: 16, color: 'gray' },
});