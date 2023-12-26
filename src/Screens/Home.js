import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import React, { useRef, useState } from 'react';

export default function Test() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        { image: require('../assets/imgA.jpg'), text: 'Irish Moutarde' },
        { image: require('../assets/imgB.jpg'), text: 'Irish Heartbeat' },
        { image: require('../assets/imgC.jpg'), text: 'Irish Bearmats' },
        { image: require('../assets/imgD.jpg'), text: 'Irish Moutarde' },
        { image: require('../assets/imgE.jpg'), text: 'Irish Heartbeat' },
        { image: require('../assets/imgF.jpg'), text: 'Irish Bearmats' },
    ];

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / itemWidth);
        setCurrentIndex(index);
    };
    const imagesToShow = 3;
    const gap = 10;
    const itemWidth = (Dimensions.get('window').width - (gap * (imagesToShow - 1))) / imagesToShow;

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
                                style={[styles.hamburger, styles.Icons]} />
                        </TouchableOpacity>
                        <Text style={styles.centeredText}>Home</Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/power.png')}
                                style={[styles.power, styles.Icons]} />
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
                                style={[styles.ellipse2, styles.Icons]} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/pause.png')}
                                style={[styles.ellipse2, styles.Icons]} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/icons/next.png')}
                                style={[styles.ellipse2, styles.Icons]} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.fmTag}>
                    <Text style={styles.fmText}>Listen Our Second FM</Text>
                </TouchableOpacity>

                <View style={styles.djContainer}>
                    <View style={styles.djHead}>
                        <Image
                            source={require('../assets/icons/guitar.png')} style={styles.headIcon} />
                        <Text style={styles.textDj}>Upcoming Shows</Text>
                    </View>

                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        snapToInterval={itemWidth + gap}
                        contentContainerStyle={{ flexDirection: 'row', gap }}>
                        {data.map((item, index) => (
                            <View key={index} style={[styles.item, { width: itemWidth }]}>
                                <Image
                                    source={item.image}
                                    style={styles.imageCrousal} />
                                <Text style={styles.carousaltxt}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView>

                </View>
                <View style={styles.djContainer}>
                    <View style={styles.djHead}>
                        <Image
                            source={require('../assets/icons/mike.png')} style={styles.headIcon} />
                        <Text style={styles.textDj}>DJs</Text>
                    </View>
                    <View style={styles.djTeam}>
                        <TouchableOpacity style={styles.person}>
                            <Image
                                source={require('../assets/MaleAvatar.png')}
                                style={styles.ellipse2} />
                            <Text style={styles.Dj}>Bridget</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.person}>
                            <Image
                                source={require('../assets/FemaleAvatar.png')}
                                style={styles.ellipse2} />
                            <Text style={styles.Dj}>Ronan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.person}>
                            <Image
                                source={require('../assets/MaleAvatar.png')}
                                style={styles.ellipse2} />
                            <Text style={styles.Dj}>Bridget</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.person}>
                            <Image
                                source={require('../assets/FemaleAvatar.png')}
                                style={styles.ellipse2} />
                            <Text style={styles.Dj}>Ronan</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
    Icons: { width: 50, height: 50 },
    homeBtns: {
        position: 'absolute',
        bottom: '10%',
        left: '20%',
        alignItems: 'center',
        zIndex: 3,
        gap: 55,
        flexDirection: 'row',
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
    djContainer: {
        marginVertical: 30,
        gap: 40,
        marginTop: 70
    },
    djHead: {
        marginHorizontal: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    djTeam: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headIcon: { width: 50, height: 50 },
    textDj: {
        fontWeight: '700',
        fontSize: 25,
    },
    Dj: {
        fontWeight: '700',
        fontSize: 20,
    },
    carousaltxt: {
        fontWeight: '700',
        fontSize: 16,
        marginTop: 20
    },
    person: {
        alignItems: 'center',
        gap: 10
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    imageCrousal: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        alignSelf: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
});
