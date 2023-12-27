import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

export default function Archives() {
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
                            <Text style={styles.textHead}>Archeives</Text>
                            <Text style={styles.textParagraph}>Lorem ipsum dolor sit amet,</Text>
                        </View>
                        <Text>{''}</Text>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <Image
                        source={require('../assets/icons/Union.png')}
                        style={styles.primaryIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search the archives"
                    // onChangeText={handleSearch}
                    // value={searchQuery}
                    />
                </View>

                <View style={styles.cardsContainer}>
                    <View style={styles.row}>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgC.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Ronan</Text>
                        </View>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgB.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Bridget</Text>
                        </View>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgA.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Steave</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgE.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Ronan</Text>
                        </View>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgC.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Bridget</Text>
                        </View>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgA.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Steave</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgD.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Ronan</Text>
                        </View>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgF.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Bridget</Text>
                        </View>
                        <View style={styles.cardsItem}>
                            <Image
                                source={require('../assets/imgE.jpg')}
                                style={styles.img} />
                            <Text style={styles.textLight}>18 Jan 2020</Text>
                            <Text style={styles.textBold}>Steave</Text>
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
    searchContainer: { width: '90%', alignSelf: 'center', marginVertical: 30, borderWidth: 1, borderColor: 'silver', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#F6F6F6', alignItems: 'center', paddingVertical: 10, borderRadius: 5, gap: 5, paddingHorizontal: 10 },
    primaryIcon: { width: 25, height: 25 },
    input: {
        // height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        // marginBottom: 16,
        padding: 8,
        // backgroundColor: 'silver',
        // justifyContent: 'center',
        width: '90%',
        // alignSelf: 'center'
    },
    textLight: { textAlign: 'center', fontSize: 14, marginTop: 8 },
    textBold: { fontSize: 18, fontWeight: '700', },
    cardsContainer: {
        flex: 1,
        paddingVertical: 16,
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 70,
    },
    cardsItem: {
        flex: 1,
        // backgroundColor: '#ddd',
        // padding: 20,
        // margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // gap: 4
    },
    img: { width: 100, height: 100, borderRadius: 5 }
});