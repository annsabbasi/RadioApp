import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logoImage from '../assets/BKLR.png';
import userIcon from '../assets/icons/user.png';
import lockIcon from '../assets/icons/lock.png';
import eye from '../assets/icons/eye.png';
import loginIcon from '../assets/icons/logIn.png';

export default function SignIn() {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.mainLogoItem}>
                    <Image source={logoImage} style={styles.mainlogo} />
                </View>
                <View style={styles.headText}>
                    <Text style={styles.heading}>Let's Sign You In</Text>
                    <Text style={styles.paragraph}>Welcome back, you've been missed!</Text>
                </View>

                <View style={styles.formContainer}>
                    {renderFormItem('Username or Email', userIcon, 'examplename')}
                    {renderFormItem('Password', lockIcon, '********', true)}
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>{''}</Text>
                        <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
                        <Image source={loginIcon} style={styles.email} />
                    </TouchableOpacity>
                </View>

                <View style={styles.haveAccount}>
                    <Text style={[styles.text, { color: 'gray' }]}>
                        Don't have an account? <Text style={[styles.textBold, { color: 'black' }]}>Sign up</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const renderFormItem = (label, icon, placeholder, isPassword = false) => {
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
                />
                {isPassword && <Image source={eye} style={styles.email} />}
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
        gap: 60,
        marginTop: 30
    },
    email: { width: 20, height: 20 },
    emailText: {
        fontSize: 16,
        color: "gray",
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10
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
    textBold: {
        fontWeight: '700',
    },
    btnContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 40
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