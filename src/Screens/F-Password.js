import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logoImage from '../assets/BKLR.png';
import checkIcon from '../assets/icons/check.png';
import arrowRightIcon from '../assets/icons/arrowright.png';

export default function FPassword() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: 30 }}>
                <View style={styles.mainLogoItem}>
                    <Image source={logoImage} style={styles.mainlogo} />
                </View>
                <View style={styles.headText}>
                    <Text style={styles.heading}>Password Recovery</Text>
                    <Text style={styles.paragraph}>Enter your Phone number to recover your password</Text>
                </View>

                <View style={styles.formContainer}>
                    {renderFormItem('Email for recovery')}
                    {renderContinueButton()}
                </View>
            </View>
        </SafeAreaView>
    );
};

const renderFormItem = (label) => {
    return (
        <View style={styles.formItem}>
            <Text style={styles.emailText}>{label}</Text>
            <View style={styles.inputMain}>
                <TextInput style={styles.inputEmail} placeholder="example@gmail.com" />
                <Image source={checkIcon} style={styles.email} />
            </View>
        </View>
    );
};

const renderContinueButton = () => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text>{''}</Text>
                <Text style={[styles.signupText, styles.textBold]}>CONTINUE</Text>
                <Image source={arrowRightIcon} style={styles.email} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        // marginTop: 20,
    },
    mainLogoItem: {
        alignSelf: 'center',
        paddingVertical: 40,
        marginTop: 20,
    },
    headText: {
        marginVertical: 10,
    },
    heading: {
        fontWeight: '800',
        fontSize: 28,
        paddingVertical: 6,
        marginTop: 10,
    },
    paragraph: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 20,
    },
    formContainer: {
        gap: 60,
        marginTop: 30,
    },
    email: { width: 20, height: 20,marginBottom: 5 },
    emailText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 30,
    },
    inputMain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomColor: 'silver',
        borderWidth: 1,
        gap: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    inputEmail: {
        flex: 1,
    },
    textBold: {
        fontWeight: '700',
    },
    btnContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 40,
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
        backgroundColor: 'rgba(119, 162, 29, 1)',
    },
    signupText: {
        color: 'white',
    },
});