import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

const sponsorRows = [
    [require('../assets/cola.png'), require('../assets/ceat.png')],
    [require('../assets/ford.png'), require('../assets/huawei.png')],
    [require('../assets/bajaj.png')],
];

export default function Sponsors({navigation}) {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
            <ScrollView>
                <View style={[styles.ellipseHome, styles.relative]}>
                    <Image source={require('../assets/Ellipse3.png')} style={styles.image} />
                    <View style={[styles.absolute, { left: -80, width: '10%', top: -10 }]}>
                        <Image source={require('../assets/Ellipse3Shade.png')} />
                    </View>
                    <View style={styles.header}>
                        <TouchableOpacity style={{ zIndex: 3 }} onPress={() => {navigation.navigate('Home')}}>
                            <Image source={require('../assets/icons/goBack.png')} style={styles.goBack} />
                        </TouchableOpacity>
                        <View style={styles.alignCenter}>
                            <Text style={styles.textHead}>Sponsors</Text>
                            <Text style={styles.textParagraph}>Our Proud Sponsors</Text>
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>
                <View style={styles.cardsContainer}>
                    {sponsorRows.map((row, index) => (
                        <View key={index} style={[styles.row, index === sponsorRows.length - 1 && styles.rowLast]}>
                            {row.map((sponsor, value) => (
                                <Image key={value} source={sponsor} style={styles.cardsItem} />
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    cardsContainer: {
        flex: 1,
        paddingVertical: 16,
        marginTop: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 70,
        marginTop: 50,
        width: '97%',
        alignSelf: 'center',
        paddingVertical: 20,
        alignItems: 'center',
    },
    cardsItem: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    rowLast: {
        marginBottom: 30,
        width: '60%',
        alignSelf: 'center',
        paddingVertical: 20,
    },
    goBack: { width: 35, height: 35 },
    alignCenter: { alignItems: 'center', gap: 5 },
    textParagraph: { fontSize: 16, color: 'white', fontWeight: '700' },
});