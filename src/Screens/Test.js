import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, Animated, TouchableWithoutFeedback, } from 'react-native';

import imgA from '../assets/imgA.jpg';
import imgB from '../assets/imgB.jpg';
import imgC from '../assets/imgC.jpg';
import imgD from '../assets/imgD.jpg';
import imgE from '../assets/imgE.jpg';
import imgF from '../assets/imgF.jpg';

import EllipseHome from '../assets/EllipseHome.png';
import hamburgerIcon from '../assets/icons/mike.png';
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

export default function Test({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { image: imgA, text: 'Irish Moutarde' },
    { image: imgB, text: 'Irish Heartbeat' },
    { image: imgC, text: 'Irish Bearmats' },
    { image: imgD, text: 'Irish Moutarde' },
    { image: imgE, text: 'Irish Heartbeat' },
    { image: imgF, text: 'Irish Bearmats' },
  ];

  const sidebarData = [
    { icon: require('../assets/icons/house.png'), text: 'Home', pageChange: 'Home' },
    { icon: require('../assets/icons/user.png'), text: 'Profile', pageChange: 'Profile' },
    { icon: require('../assets/icons/photo-camera.png'), text: 'Live Radio', pageChange: 'LiveRadio' },
    { icon: require('../assets/icons/ticket.png'), text: 'Upcoming Shows', pageChange: 'UpComing' },
    { icon: require('../assets/icons/headphones.png'), text: 'Dj Profile', pageChange: 'DjProfile' },
    { icon: require('../assets/icons/folder.png'), text: 'Archives', pageChange: 'Archeives' },
    { icon: require('../assets/icons/comment.png'), text: 'About Us', pageChange: 'Sponsers' },
    { icon: require('../assets/icons/turn-off.png'), text: 'Logout', pageChange: 'SignIn' },
  ]

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / itemWidth);
    setCurrentIndex(index);
    console.log('Scrolled clicked');
  };

  const imagesToShow = 3;
  const gap = 10;
  const itemWidth = (Dimensions.get('window').width - gap * (imagesToShow - 1)) / imagesToShow;

  // SIDEBAR FUNCTIONALITY
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarOpen = () => {
    setIsSidebarOpen(true)
  }
  const sidebarClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={sidebarClose}>
          <View style={{ zIndex: isSidebarOpen ? 3 : 1 }}>

            <View style={styles.ellipseHome}>
              <Image source={EllipseHome} style={[styles.image, isSidebarOpen && styles.opacityEffect]} />
              <View style={styles.header}>
                <TouchableOpacity onPress={sidebarOpen}>
                  <Image source={hamburgerIcon} style={[styles.hamburger, styles.Icons]} />
                </TouchableOpacity>
                <Text style={styles.centeredText}>Home</Text>
                <TouchableOpacity>
                  <Image source={powerIcon} style={[styles.power, styles.Icons]} />
                </TouchableOpacity>
              </View>

              {/* SIDEBAR */}
              {isSidebarOpen &&
                <View style={styles.sidebarContainer}>
                  <View style={styles.sidebarHeader}>
                    <Image source={require('../assets/img4.png')} style={styles.sidebarHeaderImg} />
                    <Text style={styles.sidebarHeadText}>Mike Adams</Text>
                  </View>
                  {/* onPress={() => navigation.navigate(e.pageChange)} */}
                  <View style={{ gap: 20, }}>
                    {sidebarData.map((e, index) => (
                      <TouchableOpacity key={index} style={styles.sidebarItems}
                        onPress={() => {
                          sidebarClose;
                          navigation.navigate(e.pageChange)
                        }}
                      >
                        <Image source={e.icon} style={styles.sidebarContentIcons} />
                        <Text style={styles.sidebarText}>{e.text}</Text>
                      </TouchableOpacity>
                    ))}
                    <View style={styles.sponserContent}>
                      <Image source={require('../assets/icons/dollar.png')} style={styles.Icons} />
                      <Text style={styles.sponserText}>Sponser Your favourite Djs and shows.</Text>
                    </View>
                  </View>

                </View>
              }
              {/* SIDEBAR */}

              <View style={styles.centeredContainer}>
                <Image source={vectorIcon} style={styles.power} />
              </View>

              <View style={styles.ellipseVol}>
                <Image source={ellipse2Icon} />
                <Text style={styles.ellipseVal}>103.5</Text>
              </View>

              <View style={[styles.homeBtns, isSidebarOpen && styles.opacityEffect]}>
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

            <TouchableOpacity style={[styles.fmTag, isSidebarOpen && styles.opacityEffect]}>
              <Text style={styles.fmText}>Listen Our Second FM</Text>
            </TouchableOpacity>

            <View style={[styles.djContainer, isSidebarOpen && styles.opacityEffect, styles.bottomContainer]} onPress={handleScroll}>
              <View style={styles.djHead}>
                <Image source={guitar} style={styles.Icons} />
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

          </View>
        </TouchableWithoutFeedback>

        <View style={[styles.djContainer, styles.carousalContainer]}>
          <View style={styles.djHead}>
            <Image source={mikeIcon} style={styles.Icons} />
            <Text style={styles.textDj}>Upcoming Shows</Text>
          </View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            snapToInterval={itemWidth + gap}
            style={[isSidebarOpen && styles.opacityEffect]}
            contentContainerStyle={{ flexDirection: 'row', gap }} >
            {data.map((item, index) => (
              <View key={index} style={[styles.item, { width: itemWidth }]}>
                <Image source={item.image} style={styles.imageCrousal} />
                <Text style={styles.carousaltxt}>{item.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    zIndex: 3
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
    zIndex: 2,
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
    zIndex: 1
  },
  fmText: {
    fontSize: 14,
    fontWeight: '700',
  },
  djContainer: {
    marginVertical: 30,
    gap: 40,
    marginTop: 70,
    zIndex: 1
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
  ellipseVal: {
    position: 'absolute',
    top: '33%',
    color: 'white',
    fontWeight: '700',
    fontSize: 50,
    left: '26%',
  },
  sidebarContainer: {
    position: 'absolute',
    top: -25,
    gap: 50,
    left: 0,
    width: '80%',
    backgroundColor: 'white',
    zIndex: 10,
    paddingVertical: 30,
    paddingTop: 90,
    height: '5000%'
  },
  sidebarHeader: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 25,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    alignItems: 'center'
  },
  sidebarHeadText: {
    fontSize: 18,
    fontWeight: '700'
  },
  sidebarHeaderImg: {
    width: 35,
    height: 35,
    borderRadius: 100
  },
  sidebarItems: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  sidebarContentIcons: {
    width: 20,
    height: 20
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: '600'
  },
  sponserContent: {
    marginTop: 70,
    backgroundColor: '#AEB02B',
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 15,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center'
  },
  sponserText: {
    width: '70%',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 23
  },
  carousalContainer: {
    position: 'absolute',
    bottom: '22%',
    zIndex: 1
  },
  bottomContainer: { marginTop: 430 },
  opacityEffect: { opacity: 0.4 },
  image: { width: '100%', zIndex: 1 },
  Icons: { width: 50, height: 50 },
});