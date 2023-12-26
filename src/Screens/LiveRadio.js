import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LiveRadio() {
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
                            <Text style={styles.textHead}>Live Radio</Text>
                            {/* <Text style={styles.textParagraph}>{''}</Text> */}
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.musicContainer}>
                    <View style={styles.musicBox}>
                        <Image
                            source={require('../assets/onAir.png')}
                            style={styles.channelImg} />
                        <View>
                            <Text style={styles.heading}>Ballina Killaloe Local Radio</Text>
                            <Text style={styles.paragraph}>Streaming Online</Text>
                        </View>
                        <View style={styles.controles}>
                            <Image
                                source={require('../assets/icons/volumeDown.png')}
                                style={styles.resume} />
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/icons/resume.png')}
                                    style={styles.resume} />
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/icons/volumeUp.png')}
                                style={styles.resume} />
                        </View>
                        <View>
                            <Image
                                source={require('../assets/icons/volumeUp.png')}
                                style={styles.resume} />
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


    musicContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    musicBox: {
        width: '80%',
        // borderWidth: 2,
        alignItems: 'center',
        gap: 40
    },
    channelImg: {
        width: 300,
        height: 300,
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
        // gap: 15
        justifyContent: 'space-around',
        width: '100%',
        // borderWidth: 2,
        marginBottom: 20
    },
    resume: {
        width: 50,
        height: 50,
    },
});