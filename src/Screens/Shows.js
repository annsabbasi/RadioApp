import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Shows() {
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
                        <Text style={styles.textHead}>Show</Text>
                        <Text>{''}</Text>
                    </View>


                    <View style={styles.profileData}>
                        <Image
                            source={require('../assets/Rectangle82.png')}
                            style={styles.profileImg} />
                    </View>
                    <TouchableOpacity style={styles.camera}>
                        <Image
                            source={require('../assets/icons/camera.png')}
                            style={styles.cameraLogo} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 40, alignItems: 'center', marginTop: 55, gap: 5 }}>
                    <Text style={styles.profileName}>Irish Spring Festival</Text>
                    <Text style={styles.profileName2}>Dj Ronan</Text>
                    <Text style={styles.profileDesc}>RThe show featuring best music arouns rhw U.K and around the world. Ronan Rocks!</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <View style={styles.cardBox}>
                        <Image
                            source={require('../assets/18.png')}
                            style={styles.musicpng} />
                    </View>
                    <View style={styles.cardBox}>
                        <Image
                            source={require('../assets/27.png')}
                            style={styles.musicpng} />
                    </View>
                    <View style={styles.cardBox}>
                        <Image
                            source={require('../assets/18.png')}
                            style={styles.musicpng} />
                    </View>
                </View>

                <View style={styles.chatContainer}>
                    <View style={styles.chatHead}>
                        <Image
                            source={require('../assets/icons/chatIcn.png')}
                            style={styles.musicpng} />
                        <Text style={styles.chatTag}>Chat here...</Text>
                    </View>
                    <View style={styles.chatItems}>
                        <TouchableOpacity style={styles.chatContent}>
                            <Image
                                source={require('../assets/favicon.png')}
                                style={styles.chatUserImg} />
                            <View>
                                <Text style={styles.chatTextHead}>Love your all the shows, want to thank you.</Text>
                                <Text style={styles.chatTextParagraph}>Maciej Kowalski</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
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
        position: 'absolute',
        bottom: '-15%',
        right: '30%',
        alignItems: 'center',
        zIndex: 3,
        gap: 10,
    },
    profileImg: {
        width: 180,
        height: 180,
        borderRadius: 100
    },
    profileName: {
        fontSize: 18,
        fontWeight: '700'
    },
    profileName2: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10
    },
    profileDesc: {
        fontSize: 16,
        textAlign: 'center',
        width: '90%',
        backgroundColor: 'white',
        lineHeight: 25
    },
    cardsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 40,
        marginTop: 30,
        justifyContent: 'space-around',
    },
    cardBox: { gap: 5 },
    camera: {
        position: 'absolute',
        bottom: '25%',
        zIndex: 3,
        right: '29%'
    },
    musicpng: { alignSelf: 'center', },
    chatContainer: {
        backgroundColor: 'green',
        width: '95%',
        alignSelf: 'center',
        marginVertical: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,

        elevation: 5,
        backgroundColor: 'green',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
    },
    chatTag: {
        fontSize: 20,
        fontWeight: '800',
    },
    chatHead: {
        flexDirection: 'row',
        gap: 10,
        padding: 20,
        alignItems: 'center'
    },
    chatItems: {
        gap: 30,
        backgroundColor: 'white',
        paddingVertical: 40,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
    },
    chatContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        gap: 15,
        paddingVertical: 5
    },
    chatUserImg: {
        width: 30,
        height: 30,
        borderRadius: 100
    },
    chatTextHead: {
        fontSize: 16,
        fontWeight: '700',
    },
    chatTextParagraph: {
        fontSize: 13,
        color: 'silver'
    }
});