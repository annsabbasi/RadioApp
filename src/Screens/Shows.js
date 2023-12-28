import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, } from 'react-native';

const data = [
    { img: require('../assets/imgA.jpg'), textHead: 'Love your all the shows, want to thank you.', textParagraph: 'Maciej Kowalski' },
    { img: require('../assets/imgB.jpg'), textHead: 'Awsome, super, Thank you. 😄 ❤️', textParagraph: 'Odeusz Piotrowski' },
    { img: require('../assets/imgC.jpg'), textHead: 'Just amazing', textParagraph: 'Bożenka Malina' },
    { img: require('../assets/imgD.jpg'), textHead: 'Here is another masterpiece', textParagraph: 'Maciej Orłowski' },
    { img: require('../assets/imgE.jpg'), textHead: '😄', textParagraph: 'Krysia Eurydyka' },
    { img: require('../assets/imgF.jpg'), textHead: 'James waraich', textParagraph: 'Type your message here....' },
]

export default function Test() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image source={require('../assets/Ellipse3.png')} style={styles.image} />
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/goBack.png')} style={styles.goBack} />
                        </TouchableOpacity>
                        <Text style={styles.textHead}>Show</Text>
                        <Text>{''}</Text>
                    </View>
                    <View style={styles.profileData}>
                        <Image source={require('../assets/Rectangle82.png')} style={styles.profileImg} />
                    </View>
                    <TouchableOpacity style={styles.camera}>
                        <Image source={require('../assets/icons/live.png')} style={styles.live} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.profileName}>Irish Spring Festival</Text>
                    <Text style={styles.profileName2}>Dj Ronan</Text>
                    <Text style={styles.profileDesc}>
                        The show featuring the best music around the U.K and around the world. Ronan Rocks!
                    </Text>
                </View>

                <View style={styles.cardsContainer}>
                    {[require('../assets/18.png'), require('../assets/27.png'), require('../assets/18.png')].map((source, index) => (
                        <View key={index} style={styles.cardBox}>
                            <Image source={source} style={styles.musicpng} />
                        </View>
                    ))}
                </View>

                <View style={styles.chatContainer}>
                    <View style={styles.chatHead}>
                        <Image source={require('../assets/icons/chatIcn.png')} style={styles.musicpng} />
                        <Text style={styles.chatTag}>Chat here...</Text>
                    </View>
                    <View style={styles.chatItems}>
                        {data.map(({ img, textHead, textParagraph }, index) => (
                            <TouchableOpacity key={index} style={styles.chatContent}>
                                <Image source={img} style={styles.chatUserImg} />
                                <View>
                                    <Text style={styles.chatTextHead}>{textHead}</Text>
                                    <Text style={styles.chatTextParagraph}>{textParagraph}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        marginBottom: 40,
        alignItems: 'center',
        marginTop: 55,
        gap: 5,
    },
    container: {
        flex: 1,
        // marginTop: 20
    },

    ellipseHome: {
        position: 'relative',
        width: '100%',
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
    camera: {
        position: 'absolute',
        bottom: '33%',
        zIndex: 3,
        right: '29%'
    },
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
        width: 35,
        height: 35,
        borderRadius: 100
    },
    chatTextHead: {
        fontSize: 16,
        fontWeight: '700',
    },
    chatTextParagraph: {
        fontSize: 13,
        color: 'silver'
    },
    image: { width: '100%', },
    cardBox: { gap: 5 },
    live: { width: 45, height: 20 },
    musicpng: { alignSelf: 'center', },
    goBack: { width: 35, height: 35 },
});