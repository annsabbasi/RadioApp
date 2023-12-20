import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image
                        source={require('../assets/EllipseHome.png')}
                        style={styles.image} />
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/hamburger.png')}
                                style={styles.hamburger} />
                        </TouchableOpacity>
                        <Text style={styles.centeredText}>Home</Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/power.png')}
                                style={styles.power} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.centeredContainer}>
                        <Image
                            source={require('../assets/icons/Vector.png')}
                            style={styles.power} />
                    </View>
                    <View style={styles.ellipseVol}>
                        <Image
                            source={require('../assets/icons/Ellipse2.png')}
                            style={styles.ellipse2} />
                        <Text style={styles.ellipseVal}>103.5</Text>
                    </View>

                    <View style={styles.homeBtns}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/previous.png')}
                                style={styles.ellipse2} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/pause.png')}
                                style={styles.ellipse2} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/next.png')}
                                style={styles.ellipse2} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.fmTag}>
                    <Text style={styles.fmText}>Listen Our Second FM</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    ellipseHome: {
        position: 'relative',
        width: '100%',
    },
    image: {
        width: '100%',
    },
    header: {
        position: 'absolute',
        // top: '50%',
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 25,
        alignItems: 'center',
    },
    centeredContainer: {
        position: 'absolute',
        top: '40%',
        right: 0,
        alignItems: 'center',
        zIndex: 2,
    },
    centeredText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
    },
    ellipseVol: {
        position: 'absolute',
        top: '23%',
        left: '20%',
        alignItems: 'center',
        zIndex: 3
    },
    ellipseVal: { position: 'absolute', top: '33%', color: 'white', fontWeight: '700', fontSize: 50, left: '26%' },
    homeBtns: {
        position: 'absolute',
        bottom: '10%',
        left: '20%',
        alignItems: 'center',
        zIndex: 3,
        gap: 55,
        flexDirection: 'row',
        // width: '100%',
        // justifyContent: 'space-between'
    },
    fmTag: {
        width: '50%',
        alignSelf: 'center',
        marginTop: 40,
        marginVertical: 10,
        padding: 15,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    fmText: {
        fontSize: 14,
        fontWeight: '700'
    },
});


