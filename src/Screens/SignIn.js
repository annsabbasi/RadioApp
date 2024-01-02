import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import logoImage from '../assets/BKLR.png';
import userIcon from '../assets/icons/user.png';
import lockIcon from '../assets/icons/lock.png';
import eye from '../assets/icons/eye.png';
import loginIcon from '../assets/icons/logIn.png';

export default function SignIn({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const React_Native_SignIn_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/login.php'

    const handleSignIn = async () => {
        try {
            const response = await fetch(React_Native_SignIn_Url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(username, password)
            });
            const responseData = await response.json();
            if (response.ok) {
                console.log('Login Successfully', responseData);
            } else {
                console.log('LogIn Failed', responseData);
            }

        } catch (error) {
            console.log('Error in the LogIn', error)
        }
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.mainLogoItem}>
                        <Image source={logoImage} style={styles.mainlogo} />
                    </View>
                    <View style={styles.headText}>
                        <Text style={styles.heading}>Let's Sign You In</Text>
                        <Text style={styles.paragraph}>Welcome back, you've been missed!</Text>
                    </View>

                    <View style={styles.formContainer}>
                        {renderFormItem('Username or Email', userIcon, 'examplename', false, username)}
                        {renderFormItem('Password', lockIcon, '********', true, password)}
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
                            <Text>{''}</Text>
                            <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
                            <Image source={loginIcon} style={styles.email} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.haveAccount}>
                        <Text style={[styles.text, { color: 'gray' }]}>
                            Don't have an account? <Text style={[styles.textBold, { color: 'black' }]} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
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
                    onChangeText={onChange}
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
    email: { width: 20, height: 20, marginBottom: 5 },
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