// // import React, { useState } from 'react';
// // import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

// // import logoImage from '../assets/BKLR.png';
// // import userIcon from '../assets/icons/user.png';
// // import lockIcon from '../assets/icons/lock.png';
// // import eye from '../assets/icons/eye.png';
// // import loginIcon from '../assets/icons/logIn.png';

// // export default function Test() {
// //   const [usernameorEmail, setUsernameorEmail] = useState('')
// //   const [password, setPassword] = useState('')

// //   const React_Native_Server_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/login.php';

// //   const handleSignIn = async () => {
// //     try {
// //       const response = await fetch(React_Native_Server_Url, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(usernameorEmail, password)
// //       })

// //       const responseData = await response.json();

// //       if (response.ok) {
// //         console.log('user Signed Successfully: ', responseData);
// //       }
// //       else {
// //         console.log('Login Failed ', responseData);
// //       }

// //     } catch (error) {
// //       console.log('Error during the login', error);
// //     }
// //   };



// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View>
// //         <View style={styles.mainLogoItem}>
// //           <Image source={logoImage} style={styles.mainlogo} />
// //         </View>
// //         <View style={styles.headText}>
// //           <Text style={styles.heading}>Let's Sign You In</Text>
// //           <Text style={styles.paragraph}>Welcome back, you've been missed!</Text>
// //         </View>

// //         <View style={styles.formContainer}>
// //           {renderFormItem('Username or Email', userIcon, 'examplename')}
// //           {renderFormItem('Password', lockIcon, '********', true)}
// //         </View>

// //         <View style={styles.btnContainer}>
// //           <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
// //             <Text>{''}</Text>
// //             <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
// //             <Image source={loginIcon} style={styles.email} />
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.haveAccount}>
// //           <Text style={[styles.text, { color: 'gray' }]}>
// //             Don't have an account? <Text style={[styles.textBold, { color: 'black' }]}>Sign up</Text>
// //           </Text>
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const renderFormItem = (label, icon, placeholder, isPassword = false, onChange) => {
// //   return (
// //     <View style={styles.formItem}>
// //       <Text style={styles.emailText}>{label}</Text>
// //       <View style={styles.inputMain}>
// //         <Image source={icon} style={styles.email} />
// //         <TextInput
// //           style={styles.inputEmail}
// //           placeholder={placeholder}
// //           secureTextEntry={isPassword}
// //           placeholderTextColor="gray"
// //           onChangeText={onChange}
// //         />
// //         {isPassword && <Image source={eye} style={styles.email} />}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 10,
// //     flex: 1,
// //     paddingHorizontal: 30,
// //     // marginTop: 20
// //   },
// //   mainLogoItem: {
// //     alignSelf: 'center',
// //     paddingVertical: 40,
// //     marginTop: 20
// //   },
// //   headText: {
// //     marginVertical: 10,
// //   },
// //   heading: {
// //     fontWeight: '800',
// //     fontSize: 28,
// //     paddingVertical: 6,
// //     marginTop: 10
// //   },
// //   paragraph: {
// //     fontSize: 15,
// //     color: 'gray',
// //     marginBottom: 10,
// //   },
// //   formContainer: {
// //     gap: 60,
// //     marginTop: 30
// //   },
// //   email: { width: 20, height: 20 },
// //   emailText: {
// //     fontSize: 16,
// //     color: "gray",
// //     fontWeight: "600",
// //     marginTop: 20,
// //     marginBottom: 10
// //   },
// //   inputMain: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     borderTopWidth: 0,
// //     borderRightWidth: 0,
// //     borderLeftWidth: 0,
// //     borderBottomColor: 'silver',
// //     borderWidth: 1,
// //     gap: 10
// //   },
// //   inputEmail: {
// //     flex: 1
// //   },
// //   textBold: {
// //     fontWeight: '700',
// //   },
// //   btnContainer: {
// //     alignSelf: 'center',
// //     width: '100%',
// //     marginTop: 40
// //   },
// //   linearGradient: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   btn: {
// //     flexDirection: 'row',
// //     borderWidth: 2,
// //     width: '100%',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 20,
// //     borderRadius: 25,
// //     borderWidth: 0,
// //     backgroundColor: 'rgba(119, 162, 29, 1)'
// //   },
// //   signupText: {
// //     color: 'white',
// //   },
// //   haveAccount: {
// //     alignSelf: 'center',
// //     marginVertical: 10
// //   }
// // })




// import React, { useState } from 'react';
// import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

// import logoImage from '../assets/BKLR.png';
// import mailIcon from '../assets/icons/mail.png';
// import userIcon from '../assets/icons/user.png';
// import lockIcon from '../assets/icons/lock.png';
// import eyeIcon from '../assets/icons/eye.png';
// import loginIcon from '../assets/icons/logIn.png';

// // export default function Test() {
// //   const React_Native_Register_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/register.php'
// export default function Test() {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [agreedToTerms, setAgreedToTerms] = useState(false);

//   const React_Native_Register_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/register.php';

//   const handleSignUp = async () => {
//     try {
//       // Validate the form data before sending the request
//       if (!email || !username || !password) {
//         console.error('Please fill in all required fields.');
//         return;
//       }

//       // if (!agreedToTerms) {
//       //   console.error('Please agree to the terms and conditions.');
//       //   return;
//       // }

//       const response = await fetch(React_Native_Register_Url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           name: username,
//           password,
//           // Add other parameters as needed
//         }),
//       });

//       const responseData = await response.json();

//       // Handle the response from the server
//       if (response.ok) {
//         // Successful signup
//         console.log('User signed up successfully:', responseData);
//         // You may want to navigate to the next screen or perform other actions here
//       } else {
//         // Signup failed
//         console.error('Signup failed:', responseData);
//         // You may want to display an error message to the user
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       // Handle other errors, such as network issues
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <View style={styles.mainLogoItem}>
//           <Image source={logoImage} style={styles.mainlogo} />
//         </View>
//         <View style={styles.headText}>
//           <Text style={styles.heading}>Getting Started</Text>
//           <Text style={styles.paragraph}>Create an account to continue!</Text>
//         </View>

//         <View style={styles.formContainer}>
//           {/* {renderFormItem('Email', mailIcon, 'example@gmail.com')}
//           {renderFormItem('Username', userIcon, 'examplename')}
//           {renderFormItem('Password', lockIcon, '********', true)} */}

//           {renderFormItem('Email', mailIcon, 'example@gmail.com', false, setEmail)}
//           {renderFormItem('Username', userIcon, 'examplename', false, setUsername)}
//           {renderFormItem('Password', lockIcon, '********', true, setPassword)}
//         </View>

//         {/* <View style={styles.checkboxContainer}>
//           <View style={styles.checkbox}>
//             <Text>&#10003;</Text>
//           </View>
//           <Text style={styles.text}>
//             By creating an account, you agree to our {'\n'}
//             <Text style={styles.textBold}>Term & Conditions</Text>
//           </Text>
//         </View> */}

//         {/* <View style={styles.checkboxContainer}>
//           <TouchableOpacity style={styles.checkbox} onPress={() => setAgreedToTerms(!agreedToTerms)}>
//             {agreedToTerms ? <Text>&#10003;</Text> : null}
//           </TouchableOpacity>
//           <Text style={styles.text}>
//             By creating an account, you agree to our {'\n'}
//             <Text style={styles.textBold}>Term & Conditions</Text>
//           </Text>
//         </View> */}

//         <View style={styles.checkboxContainer}>
//           <TouchableOpacity style={styles.checkbox} onPress={() => setAgreedToTerms(agreedToTerms)}>
//             {agreedToTerms ? <Text>&#10003;</Text> : null}
//           </TouchableOpacity>
//           <Text style={styles.text}>
//             By creating an account, you agree to our {'\n'}
//             <Text style={styles.textBold}>Term & Conditions</Text>
//           </Text>
//         </View>

//         {/* <View style={styles.btnContainer}>
//           <TouchableOpacity style={styles.btn}>
//             <Text>{''}</Text>
//             <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
//             <Image source={loginIcon} style={styles.email} />
//           </TouchableOpacity>
//         </View> */}

//         {/* <View style={styles.btnContainer}>
//           <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
//             <Text>{''}</Text>
//             <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
//             <Image source={loginIcon} style={styles.email} />
//           </TouchableOpacity>
//         </View> */}

//         <View style={styles.btnContainer}>
//           <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
//             <Text>{''}</Text>
//             <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
//             <Image source={loginIcon} style={styles.email} />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.haveAccount}>
//           <Text style={[styles.text, { color: 'gray' }]}>
//             Already have an account? <Text style={[styles.textBold, { color: 'black' }]}>Sign in</Text>
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// // const renderFormItem = (label, icon, placeholder, isPassword = false) => {
// //   return (
// //     <View style={styles.formItem}>
// //       <Text style={styles.emailText}>{label}</Text>
// //       <View style={styles.inputMain}>
// //         <Image source={icon} style={styles.email} />
// //         <TextInput
// //           style={styles.inputEmail}
// //           placeholder={placeholder}
// //           secureTextEntry={isPassword}
// //           placeholderTextColor="gray"
// //         />
// //         {isPassword && <Image source={eyeIcon} style={styles.email} />}
// //       </View>
// //     </View>
// //   );
// // };


// const renderFormItem = (label, icon, placeholder, isPassword = false, onChange) => {
//   return (
//     <View style={styles.formItem}>
//       <Text style={styles.emailText}>{label}</Text>
//       <View style={styles.inputMain}>
//         <Image source={icon} style={styles.email} />
//         <TextInput
//           style={styles.inputEmail}
//           placeholder={placeholder}
//           secureTextEntry={isPassword}
//           placeholderTextColor="gray"
//           onChangeText={onChange}
//         />
//         {isPassword && <Image source={eyeIcon} style={styles.email} />}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     flex: 1,
//     paddingHorizontal: 30,
//     // marginTop: 20
//   },
//   mainLogoItem: {
//     alignSelf: 'center',
//     paddingVertical: 40,
//     marginTop: 20
//   },
//   headText: {
//     marginVertical: 10,
//   },
//   heading: {
//     fontWeight: '800',
//     fontSize: 28,
//     paddingVertical: 6,
//     marginTop: 10
//   },
//   paragraph: {
//     fontSize: 15,
//     color: 'gray',
//     marginBottom: 10,
//   },
//   formContainer: {
//     gap: 30
//   },
//   email: { width: 20, height: 20 },
//   emailText: {
//     fontSize: 16,
//     color: "gray",
//     fontWeight: "600",
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   inputMain: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//     borderBottomColor: 'silver',
//     borderWidth: 1,
//     gap: 10
//   },
//   inputEmail: {
//     flex: 1
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     gap: 15,
//     marginVertical: 25,
//     marginTop: 50
//   },
//   checkbox: {
//     borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'flex-start',
//     padding: 2,
//     borderRadius: 5,
//     paddingHorizontal: 5,
//     alignSelf: 'center'
//   },
//   textBold: {
//     fontWeight: '700',
//   },
//   text: {
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   btnContainer: {
//     alignSelf: 'center',
//     width: '100%',
//     marginTop: 20
//   },
//   linearGradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn: {
//     flexDirection: 'row',
//     borderWidth: 2,
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     borderRadius: 25,
//     borderWidth: 0,
//     backgroundColor: 'rgba(119, 162, 29, 1)'
//   },
//   signupText: {
//     color: 'white',
//   },
//   haveAccount: {
//     alignSelf: 'center',
//     marginVertical: 10
//   }
// })




import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';

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

  const sidebarData = [
    { icon: require('../assets/icons/house.png'), text: 'Home' },
    { icon: require('../assets/icons/user.png'), text: 'Profile' },
    { icon: require('../assets/icons/photo-camera.png'), text: 'Live Radio' },
    { icon: require('../assets/icons/ticket.png'), text: 'Upcoming Shows' },
    { icon: require('../assets/icons/headphones.png'), text: 'Dj Profile' },
    { icon: require('../assets/icons/folder.png'), text: 'Archives' },
    { icon: require('../assets/icons/comment.png'), text: 'About Us' },
    { icon: require('../assets/icons/turn-off.png'), text: 'Logout' },
  ]

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / itemWidth);
    setCurrentIndex(index);
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
    <TouchableWithoutFeedback onPress={sidebarClose}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
        <ScrollView>
          <View style={styles.ellipseHome}>
            <Image source={EllipseHome} style={styles.image} />
            <View style={styles.header}>
              <TouchableOpacity onPress={sidebarOpen}>
                <Image source={hamburgerIcon} style={[styles.hamburger, styles.Icons]} />
              </TouchableOpacity>

              {/* SIDEBAR */}
              {isSidebarOpen && <View style={styles.sidebarContainer}>
                <View style={styles.sidebarHeader}>
                  <Image source={require('../assets/img4.png')} style={styles.sidebarHeaderImg} />
                  <Text style={styles.sidebarHeadText}>Mike Adams</Text>
                </View>

                <View style={{ gap: 20 }}>
                  {sidebarData.map((e, index) => (
                    <TouchableOpacity key={index} style={styles.sidebarItems}>
                      <Image source={e.icon} style={styles.sidebarContentIcons} />
                      <Text style={styles.sidebarText}>{e.text}</Text>
                    </TouchableOpacity>
                  ))}

                  <View style={styles.sponserContent}>
                    <Image source={require('../assets/icons/dollar.png')} style={styles.Icons} />
                    <Text style={styles.sponserText}>Sponser Your favourite Djs and shows.</Text>
                  </View>

                </View>
              </View>}
              {/* SIDEBAR */}

              <Text style={styles.centeredText}>Home</Text>
              <TouchableOpacity>
                <Image source={powerIcon} style={[styles.power, styles.Icons]} />
              </TouchableOpacity>
            </View>

            {/* <View style={styles.header}>
              <TouchableOpacity>
                <Image source={hamburgerIcon} style={[styles.hamburger, styles.Icons]} />
              </TouchableOpacity>

              <Text style={styles.centeredText}>Home</Text>
              <TouchableOpacity>
                <Image source={powerIcon} style={[styles.power, styles.Icons]} />
              </TouchableOpacity>
            </View> */}


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

          {/* <View style={styles.ellipseHome}>
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleSidebar}>
              <Image source={hamburgerIcon} style={[styles.hamburger, styles.Icons]} />
            </TouchableOpacity>

            <Animated.View style={[styles.sidebarContainer, { left: slideAnimation }]}>
              <View style={styles.sidebarHeader}>
                <Image source={require('../assets/img4.png')} style={styles.sidebarHeaderImg} />
                <Text style={styles.sidebarHeadText}>Mike Adams</Text>
              </View>

              <View style={{ gap: 20 }}>
                {sidebarData.map((e, index) => (
                  <TouchableOpacity key={index} style={styles.sidebarItems}>
                    <Image source={e.icon} style={styles.sidebarContentIcons} />
                    <Text style={styles.sidebarText}>{e.text}</Text>
                  </TouchableOpacity>
                ))}

                <View style={styles.sponserContent}>
                  <Image source={require('../assets/icons/dollar.png')} style={styles.Icons} />
                  <Text style={styles.sponserText}>Sponsor Your favourite DJs and shows.</Text>
                </View>
              </View>
            </Animated.View>

            <Text style={styles.centeredText}>Home</Text>
            <TouchableOpacity>
              <Image source={powerIcon} style={[styles.power, styles.Icons]} />
            </TouchableOpacity>
          </View>

        </View> */}

          <TouchableOpacity style={styles.fmTag}>
            <Text style={styles.fmText}>Listen Our Second FM</Text>
          </TouchableOpacity>

          <View style={styles.djContainer}>
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

        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    // flex: 1,
    // borderWidth: 2
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
  // headIcon: { width: 50, height: 50 },
  sidebarContainer: {
    position: 'absolute',
    top: -25,
    gap: 50,
    left: 0,
    width: '80%',
    backgroundColor: 'whitesmoke',
    // flex: 1,
    zIndex: 5,
    paddingVertical: 30,
    paddingTop: 40,
    height: '5000%'
  },
  sidebarHeaderImg: { width: 35, height: 35, borderRadius: 100 },
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
  sidebarItems: { flexDirection: 'row', gap: 20, alignItems: 'center', paddingHorizontal: 25, paddingVertical: 15, },
  sidebarContentIcons: { width: 20, height: 20 },
  sidebarText: { fontSize: 18, fontWeight: '600' },
  sponserContent: { marginTop: 70, backgroundColor: '#AEB02B', paddingVertical: 50, paddingHorizontal: 20, flexDirection: 'row', gap: 15, width: '80%', alignSelf: 'center', borderRadius: 10, alignItems: 'center' },
  sponserText: { width: '70%', fontSize: 16, fontWeight: '700', lineHeight: 23 },
});