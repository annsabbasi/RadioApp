import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';

export default function ArcheiveInner() {
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
                            <Text style={styles.textHead}>Ronan Archeives</Text>
                            <Text style={styles.textParagraph}>18 January 2020</Text>
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.musicContainer}>
                    <View style={styles.musicBox}>
                        <Image
                            source={require('../assets/show.png')}
                            style={styles.channelImg} />
                        <View style={styles.playlistName}>
                            <Text>{''}</Text>
                            <View>
                                <Text style={styles.heading}>Archeive 1</Text>
                                <Text style={styles.paragraph}>Ronan Ryan</Text>
                            </View>
                            <Image
                                source={require('../assets/icons/volumeDown.png')}
                                style={styles.resume} />
                        </View>

                        <View style={styles.timeLapsContent}>
                            <Text>00:00</Text>
                            <Text>{''}</Text>
                            <Text>04:00</Text>
                        </View>

                        <View style={styles.sliderContent}>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="black"
                                maximumTrackTintColor="black"
                                thumbTintColor='black'
                                value={50} />

                        </View>

                        <View style={styles.controles}>
                            <Image
                                source={require('../assets/icons/audioprev.png')}
                                style={styles.goBack} />
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/icons/resume.png')}
                                    style={styles.resume} />
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/icons/audionext.png')}
                                style={styles.goBack} />
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        source={require('../assets/footer.png')} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    ellipseHome: {
        position: 'relative',
        width: '100%',
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


    musicContainer: {
        alignItems: 'center',
        marginVertical: 50,
    },
    musicBox: {
        width: '95%',
        alignItems: 'center',
    },
    timeLapsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%'
    },
    sliderContent: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 10
    },
    slider: {
        width: '100%',
        height: 0,
        paddingVertical: 10,
        marginVertical: 5
    },
    playlistName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        width: '100%'
    },
    channelImg: {
        width: '100%',
        borderRadius: 10,

    },
    heading: {
        fontSize: 26,
        fontWeight: '700',
    },
    paragraph: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    controles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20
    },
    resume: {
        width: 50,
        height: 50,
    },
});