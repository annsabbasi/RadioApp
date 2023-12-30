// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

// const Test2 = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const openSidebar = () => {
//         setIsSidebarOpen(true);
//     };

//     const closeSidebar = () => {
//         setIsSidebarOpen(false);
//     };


//     const handleSidebarItemPress = () => {
//         // Handle sidebar item press logic here
//         // For example, navigate to another screen or perform an action
//         // ...

//         // Close the sidebar after handling the item press
//         closeSidebar();
//     };

//     return (
//         <TouchableWithoutFeedback onPress={closeSidebar}>
//             <View style={styles.container}>
//                 <TouchableOpacity onPress={openSidebar}>
//                     <Text style={styles.hamburger}>☰</Text>
//                 </TouchableOpacity>

//                 <View style={[styles.content, isSidebarOpen && styles.contentWithSidebar]}>
//                     <Text>Main Content</Text>
//                 </View>

//                 {isSidebarOpen && (
//                     <View style={styles.sidebar}>
//                         <TouchableOpacity onPress={handleSidebarItemPress}>
//                             <Text>Sidebar Item 1</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )}
//             </View>
//         </TouchableWithoutFeedback>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//     },
//     hamburger: {
//         fontSize: 20,
//         margin: 10,
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     contentWithSidebar: {
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',  },
//     sidebar: {
//         width: 200,
//         backgroundColor: '#fff',
//         position: 'absolute',
//         left: 0,
//         top: 0,
//         height: '100%',
//         padding: 10,
//         borderRightWidth: 1,
//         borderColor: '#ccc',
//     },
// });

// export default Test2;




// // // import React, { useState, useEffect } from 'react';
// // // import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

// // // const Test2 = () => {
// // //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //     const animatedValue = new Animated.Value(0);

// // //     const openSidebar = () => {
// // //         Animated.timing(animatedValue, {
// // //             toValue: 1,
// // //             duration: 300,
// // //             useNativeDriver: false,
// // //         }).start(() => {
// // //             setIsSidebarOpen(true);
// // //         });
// // //     };

// // //     const closeSidebar = () => {
// // //         Animated.timing(animatedValue, {
// // //             toValue: 0,
// // //             duration: 300,
// // //             useNativeDriver: false,
// // //         }).start(() => {
// // //             setIsSidebarOpen(false);
// // //         });
// // //     };

// // //     const handleSidebarItemPress = () => {
// // //         closeSidebar();
// // //         // Handle sidebar item press logic here
// // //         // For example, navigate to another screen or perform an action
// // //         // ...
// // //     };

// // //     const contentTranslateX = animatedValue.interpolate({
// // //         inputRange: [0, 1],
// // //         outputRange: [0, 200],
// // //     });

// // //     return (
// // //         <TouchableWithoutFeedback onPress={closeSidebar}>
// // //             <View style={styles.container}>
// // //                 <TouchableOpacity onPress={openSidebar}>
// // //                     <Text style={styles.hamburger}>☰</Text>
// // //                 </TouchableOpacity>

// // //                 <Animated.View style={[styles.content, isSidebarOpen && styles.contentWithSidebar, { transform: [{ translateX: contentTranslateX }] }]}>
// // //                     <Text>Main Content</Text>
// // //                 </Animated.View>

// // //                 {isSidebarOpen && (
// // //                     <View style={styles.sidebar}>
// // //                         <TouchableOpacity onPress={handleSidebarItemPress}>
// // //                             <Text>Sidebar Item 1</Text>
// // //                         </TouchableOpacity>
// // //                     </View>
// // //                 )}
// // //             </View>
// // //         </TouchableWithoutFeedback>
// // //     );
// // // };

// // // const styles = StyleSheet.create({
// // //     container: {
// // //         flex: 1,
// // //         flexDirection: 'row',
// // //         backgroundColor: '#fff',
// // //     },
// // //     hamburger: {
// // //         fontSize: 20,
// // //         margin: 10,
// // //     },
// // //     content: {
// // //         flex: 1,
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //         backgroundColor: '#fff',
// // //     },
// // //     contentWithSidebar: {
// // //         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dull the background when sidebar is open
// // //     },
// // //     sidebar: {
// // //         width: 200,
// // //         backgroundColor: '#fff',
// // //         position: 'absolute',
// // //         left: 0,
// // //         top: 0,
// // //         height: '100%',
// // //         padding: 10,
// // //         borderRightWidth: 1,
// // //         borderColor: '#ccc',
// // //     },
// // // });

// // // export default Test2;


// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';

// // const Test2 = () => {
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //     const animatedValue = new Animated.Value(0);

// //     useEffect(() => {
// //         if (isSidebarOpen) {
// //             openSidebar();
// //         } else {
// //             closeSidebar();
// //         }
// //     }, [isSidebarOpen]);

// //     const openSidebar = () => {
// //         Animated.timing(animatedValue, {
// //             toValue: 1,
// //             duration: 300,
// //             useNativeDriver: false,
// //         }).start();
// //     };

// //     const closeSidebar = () => {
// //         Animated.timing(animatedValue, {
// //             toValue: 0,
// //             duration: 300,
// //             useNativeDriver: false,
// //         }).start();
// //     };

// //     const handleSidebarItemPress = () => {
// //         closeSidebar();
// //         // Handle sidebar item press logic here
// //         // For example, navigate to another screen or perform an action
// //         // ...
// //     };

// //     const contentTranslateX = animatedValue.interpolate({
// //         inputRange: [0, 100],
// //         outputRange: [0, 200],
// //     });

// //     return (
// //         <TouchableWithoutFeedback onPress={closeSidebar}>
// //             <View style={styles.container}>
// //                 <TouchableOpacity onPress={() => setIsSidebarOpen(!isSidebarOpen)}>
// //                     <Text style={styles.hamburger}>☰</Text>
// //                 </TouchableOpacity>

// //                 <Animated.View style={[styles.content, isSidebarOpen && styles.contentWithSidebar, { transform: [{ translateX: contentTranslateX }] }]}>
// //                     <Text>Main Content</Text>
// //                 </Animated.View>

// //                 {isSidebarOpen && (
// //                     <View style={styles.sidebar}>
// //                         <TouchableOpacity onPress={handleSidebarItemPress}>
// //                             <Text>Sidebar Item 1</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 )}
// //             </View>
// //         </TouchableWithoutFeedback>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         flexDirection: 'row',
// //         backgroundColor: '#fff',
// //     },
// //     hamburger: {
// //         fontSize: 20,
// //         margin: 10,
// //     },
// //     content: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#fff',
// //         transition: 'background-color 0.3s', // Add transition for background color
// //     },
// //     contentWithSidebar: {
// //         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dull the background when sidebar is open
// //     },
// //     sidebar: {
// //         width: 200,
// //         backgroundColor: '#fff',
// //         position: 'absolute',
// //         left: 0,
// //         top: 0,
// //         height: '100%',
// //         padding: 10,
// //         borderRightWidth: 1,
// //         borderColor: '#ccc',
// //     },
// // });

// // export default Test2;



import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logoImage from '../assets/BKLR.png';
import mailIcon from '../assets/icons/mail.png';
import userIcon from '../assets/icons/user.png';
import lockIcon from '../assets/icons/lock.png';
import eyeIcon from '../assets/icons/eye.png';
import loginIcon from '../assets/icons/logIn.png';

const React_Native_SignUp_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/register.php';


export default function Test2() {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const [agreementErrorMessage, setAgreementErrorMessage] = useState('');

    const handleSignup = async () => {
        try {
            if (!email || !username || !password) {
                console.log('Please fill in all required fields.');
                return;
            }

            if (!isAgreementChecked) {
                setAgreementErrorMessage('Please accept the Terms & Conditions.');
                return;
            }

            // Clear the agreement error message if the conditions are met
            setAgreementErrorMessage('');

            const response = await fetch(React_Native_SignUp_Url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    name: username,
                    password,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                console.log('User SignUp Successfully', responseData);
            } else {
                console.log('User SignUp Failed', responseData);
            }
        } catch (error) {
            console.log('Error during the SignUp', error);
        }
    };


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.mainLogoItem}>
                        <Image source={logoImage} style={styles.mainlogo} />
                    </View>
                    <View style={styles.headText}>
                        <Text style={styles.heading}>Getting Started</Text>
                        <Text style={styles.paragraph}>Create an account to continue!</Text>
                    </View>

                    <View style={styles.formContainer}>
                        {renderFormItem('Email', mailIcon, 'example@gmail.com', false, setEmail)}
                        {renderFormItem('Username', userIcon, 'examplename', false, setUsername)}
                        {renderFormItem('Password', lockIcon, '********', true, setPassword)}
                    </View>

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                            style={styles.checkbox}
                            onPress={() => setIsAgreementChecked(!isAgreementChecked)}
                        >
                            {isAgreementChecked && <Text>&#10003;</Text>}
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            By creating an account, you agree to our {'\n'}
                            <Text style={styles.textBold}>Term & Conditions</Text>
                        </Text>
                    </View>

                    {agreementErrorMessage ? (
                        <Text style={{ color: 'red', marginBottom: 10 }}>
                            {agreementErrorMessage}
                        </Text>
                    ) : null}

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
                            <Text>{''}</Text>
                            <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
                            <Image source={loginIcon} style={styles.email} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.haveAccount}>
                        <Text style={[styles.text, { color: 'gray' }]}>
                            Already have an account? <Text style={[styles.textBold, { color: 'black' }]}>Sign in</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const renderFormItem = (label, icon, placeholder, isPassword = false, onChange) => {
    return (
        <View style={styles.formItem}>
            <Text style={styles.emailText}>{label}</Text>
            <View style={styles.inputMain}>
                <Image source={icon} style={styles.email} />
                <TextInput
                    style={styles.inputEmail}
                    placeholder={placeholder}
                    secureTextEntry={isPassword}
                    placeholderTextColor="gray"
                    onChangeText={onChange} />
                {isPassword && <Image source={eyeIcon} style={styles.email} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        paddingHorizontal: 30,
        // marginTop: 20
    },
    mainLogoItem: {
        alignSelf: 'center',
        paddingVertical: 40,
        marginTop: 20
    },
    headText: {
        marginVertical: 10,
    },
    heading: {
        fontWeight: '800',
        fontSize: 28,
        paddingVertical: 6,
        marginTop: 10
    },
    paragraph: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 10,
    },
    formContainer: {
        gap: 30
    },
    email: { width: 20, height: 20 },
    emailText: {
        fontSize: 16,
        color: "gray",
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10,
    },
    inputMain: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomColor: 'silver',
        borderWidth: 1,
        gap: 10
    },
    inputEmail: {
        flex: 1
    },
    checkboxContainer: {
        flexDirection: 'row',
        gap: 15,
        marginVertical: 25,
        marginTop: 50
    },
    checkbox: {
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'flex-start',
        padding: 2,
        borderRadius: 5,
        paddingHorizontal: 5,
        alignSelf: 'center'
    },
    textBold: {
        fontWeight: '700',
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
    },
    btnContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 20
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flexDirection: 'row',
        borderWidth: 2,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 25,
        borderWidth: 0,
        backgroundColor: 'rgba(119, 162, 29, 1)'
    },
    signupText: {
        color: 'white',
    },
    haveAccount: {
        alignSelf: 'center',
        marginVertical: 10
    }
})