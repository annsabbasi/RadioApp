import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';

const LiveRadio = ({ navigation }) => (
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
                        <Text style={styles.textHead}>Live Radio</Text>
                    </View>
                    <Text>{''}</Text>
                </View>
            </View>

            <View style={styles.musicContainer}>
                <View style={styles.musicBox}>
                    <Image source={require('../assets/onAir.png')} style={styles.channelImg} />
                    <View>
                        <Text style={styles.heading}>Ballina Killaloe Local Radio</Text>
                        <Text style={styles.paragraph}>Streaming Online</Text>
                    </View>

                    <View style={styles.controles}>
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/volumeDown.png')} style={styles.resume} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/resume.png')} style={styles.resume} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/volumeUp.png')} style={styles.resume} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Image source={require('../assets/icons/volumeUp.png')} style={styles.resume} />
                    </TouchableOpacity>
                </View>
            </View>

            <Image source={require('../assets/footer.png')} />

        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ellipseHome: {
        width: '100%',
        marginTop: -70
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
        zIndex: 5
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    musicContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    musicBox: {
        width: '80%',
        alignItems: 'center',
        gap: 10,
    },
    channelImg: {
        width: '100%',
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
        marginBottom: 20,
    },
    controles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 30
    },
    resume: {
        width: 50,
        height: 50,
    },
    textParagraph: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700'
    },
    goBack: { width: 35, height: 35 },
    alignCenter: { alignItems: 'center', gap: 5 },
});

export default LiveRadio;