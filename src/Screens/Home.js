import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import imgA from '../assets/imgA.jpg';
import imgB from '../assets/imgB.jpg';
import imgC from '../assets/imgC.jpg';
import imgD from '../assets/imgD.jpg';
import imgE from '../assets/imgE.jpg';
import imgF from '../assets/imgF.jpg';

import EllipseHome from '../assets/EllipseHome.png';
import hamburgerIcon from '../assets/icons/hamburger.png';
import powerIcon from '../assets/icons/power.png';
import vectorIcon from '../assets/icons/Vector.png';
import ellipse2Icon from '../assets/icons/Ellipse2.png';
import previousIcon from '../assets/icons/previous.png';
import pauseIcon from '../assets/icons/pause.png';
import nextIcon from '../assets/icons/next.png';
import mikeIcon from '../assets/icons/mike.png';
import guitar from '../assets/icons/guitar.png';
import MaleAvatar from '../assets/MaleAvatar.png';
import FemaleAvatar from '../assets/FemaleAvatar.png';
import { StatusBar } from 'expo-status-bar';

export default function Test() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        { image: imgA, text: 'Irish Moutarde' },
        { image: imgB, text: 'Irish Heartbeat' },
        { image: imgC, text: 'Irish Bearmats' },
        { image: imgD, text: 'Irish Moutarde' },
        { image: imgE, text: 'Irish Heartbeat' },
        { image: imgF, text: 'Irish Bearmats' },
    ];

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / itemWidth);
        setCurrentIndex(index);
    };

    const imagesToShow = 3;
    const gap = 10;
    const itemWidth = (Dimensions.get('window').width - gap * (imagesToShow - 1)) / imagesToShow;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image source={EllipseHome} style={styles.image} />
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image source={hamburgerIcon} style={[styles.hamburger, styles.Icons]} />
                        </TouchableOpacity>
                        <Text style={styles.centeredText}>Home</Text>
                        <TouchableOpacity>
                            <Image source={powerIcon} style={[styles.power, styles.Icons]} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.centeredContainer}>
                        <Image source={vectorIcon} style={styles.power} />
                    </View>
                    <View style={styles.ellipseVol}>
                        <Image source={ellipse2Icon} />
                        <Text style={styles.ellipseVal}>103.5</Text>
                    </View>

                    <View style={styles.homeBtns}>
                        <TouchableOpacity>
                            <Image source={previousIcon} style={styles.Icons} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={pauseIcon} style={styles.Icons} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={nextIcon} style={styles.Icons} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.fmTag}>
                    <Text style={styles.fmText}>Listen Our Second FM</Text>
                </TouchableOpacity>

                <View style={styles.djContainer}>
                    <View style={styles.djHead}>
                        <Image source={mikeIcon} style={styles.headIcon} />
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
                                <Image source={item.image} style={styles.imageCrousal} />
                                <Text style={styles.carousaltxt}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.djContainer}>
                    <View style={styles.djHead}>
                        <Image source={guitar} style={styles.headIcon} />
                        <Text style={styles.textDj}>DJs</Text>
                    </View>
                    <View style={styles.djTeam}>
                        {['Bridget', 'Ronan', 'Bridget', 'Ronan'].map((name, index) => (
                            <TouchableOpacity key={index} style={styles.person}>
                                <Image source={index % 2 === 0 ? MaleAvatar : FemaleAvatar} />
                                <Text style={styles.Dj}>{name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        // marginTop: 20,
    },
    ellipseHome: {
        position: 'relative',
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
        zIndex: 3,
    },
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
        fontWeight: '700',
    },
    djContainer: {
        marginVertical: 30,
        gap: 40,
        marginTop: 70,
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
        marginTop: 20,
    },
    person: {
        alignItems: 'center',
        gap: 10,
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
    image: { width: '100%', },
    ellipseVal: { position: 'absolute', top: '33%', color: 'white', fontWeight: '700', fontSize: 50, left: '26%' },
    Icons: { width: 50, height: 50 },
    headIcon: { width: 50, height: 50 },
});