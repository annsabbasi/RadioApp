import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import React, { useRef, useState } from 'react';

export default function Test() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    // const index = Math.round(contentOffsetX / Dimensions.get('window').width);
    // setCurrentIndex(index);
    const index = contentOffsetX / Dimensions.get('window').width;
    setCurrentIndex(index);
  };

  const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ];


  const itemWidth = Dimensions.get('window').width / 3;

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

        <View style={styles.djContainer}>
          <View style={styles.djHead}>
            <Image
              source={require('../assets/icons/guitar.png')}
            />
            <Text style={styles.textDj}>Upcoming Shows</Text>
          </View>
          {/* <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        style={{ flexDirection: 'row' }}
                    >
                        {data.map((item, index) => (
                            <View key={index} style={[styles.item, { width: Dimensions.get('window').width / 3 }]}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView> */}

          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            snapToInterval={itemWidth}
            decelerationRate="fast" // Optional: You can adjust the deceleration rate
            style={{ flexDirection: 'row' }}
          >
            {data.map((item, index) => (
              <View key={index} style={[styles.item, { width: itemWidth }]}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>


        <View style={styles.djContainer}>
          <View style={styles.djHead}>
            <Image
              source={require('../assets/icons/mike.png')}
            />
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


  djContainer: {
    marginVertical: 50,
    gap: 40,
    // paddingHorizontal: 30,
  },
  djHead: {
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  djTeam: {
    flexDirection: 'row',
    // gap: 50
    justifyContent: 'space-around',
    // borderWidth: 2
  },
  textDj: {
    fontWeight: '700',
    fontSize: 25,
  },
  Dj: {
    fontWeight: '700',
    fontSize: 20,
  },
  person: {
    alignItems: 'center',
    gap: 10
  },


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




  item: {
    width: Dimensions.get('window').width,
    marginRight: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginHorizontal: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  controlText: {
    fontSize: 16,
    color: 'blue',
  },
});


