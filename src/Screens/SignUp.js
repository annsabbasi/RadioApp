import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logoImage from '../assets/BKLR.png';
import mailIcon from '../assets/icons/mail.png';
import userIcon from '../assets/icons/user.png';
import lockIcon from '../assets/icons/lock.png';
import eyeIcon from '../assets/icons/eye.png';
import loginIcon from '../assets/icons/logIn.png';

const React_Native_SignUp_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/register.php';


export default function SignUp() {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSignup = async () => {
        try {
            if (!email, !username, !password) {
                console.log('Please fill in the all required fields.');
                return;
            }
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
        <SafeAreaView style={styles.container}>
            <View>
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
                    <View style={styles.checkbox}>
                        <Text>&#10003;</Text>
                    </View>
                    <Text style={styles.text}>
                        By creating an account, you agree to our {'\n'}
                        <Text style={styles.textBold}>Term & Conditions</Text>
                    </Text>
                </View>

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
                    onChangeText={onChange}
                />
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