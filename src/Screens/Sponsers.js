import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Sponsers() {
    return (
        <SafeAreaView>
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
                            <Text style={styles.textHead}>Sponsers</Text>
                            <Text style={styles.textParagraph}>Our Proud Sponsers</Text>
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.cardsContainer}>
                    <View style={styles.row}>
                        <Image
                            source={require('../assets/cola.png')}
                            style={styles.cardsItem} />
                        <Image
                            source={require('../assets/ceat.png')}
                            style={styles.cardsItem} />
                    </View>
                    <View style={styles.row}>
                        <Image
                            source={require('../assets/ford.png')}
                            style={styles.cardsItem} />
                        <Image
                            source={require('../assets/huawei.png')}
                            style={styles.cardsItem} />
                    </View>
                    <View style={styles.rowLast}>
                        <Image
                            source={require('../assets/bajaj.png')}
                            style={styles.cardsItem} />
                        <Image
                            // source={require('../assets/cola.png')}
                            style={styles.cardsItem} />
                    </View>
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

    cardsContainer: {
        flex: 1,
        paddingVertical: 16,
        marginTop: 30
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
        // borderWidth: 2,
    },
    cardsItem: {
        // width: '30%',
        // height: 110,
        alignSelf: 'center',
        alignItems: 'center',
    },
    rowLast: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: 30,
        width: '97%',
        alignSelf: 'center',
        paddingVertical: 20,
        // alignItems: 'center',
        // borderWidth: 2,
    },
})