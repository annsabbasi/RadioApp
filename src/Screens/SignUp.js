import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import logoImage from '../assets/BKLR.png';
import mailIcon from '../assets/icons/mail.png';
import userIcon from '../assets/icons/user.png';
import lockIcon from '../assets/icons/lock.png';
import eyeIcon from '../assets/icons/eye.png';
import loginIcon from '../assets/icons/logIn.png';

const React_Native_SignUp_Url = 'https://ballinakillaloelocalradio.com/ballina_web/ws/register.php';

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [check, setCheck] = useState(false);
    const [attemptedSignup, setAttemptedSignup] = useState(false);
    const [messageShown, setMessageShown] = useState(false);
    const [fields, setFields] = useState(false);
    const [fieldsShown, setFieldsShown] = useState(false);


    const checkTrue = () => { setCheck(!check); setAgreedTerms(!agreedTerms); };

    const handleSignup = async () => {
        try {
            setFields(true)
            setAttemptedSignup(true);

            if (!email || !username || !password) {
                console.log('Please fill in the all required fields.');
                setFieldsShown(true)
                setTimeout(() => {
                    setFieldsShown(false)
                }, 3000)
                return;
            }
            if (!agreedTerms) {
                console.log('Please Agreed to our terms and conditions');
                setMessageShown(true)
                setTimeout(() => {
                    setMessageShown(false)
                }, 3000)
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
                navigation.navigate('SignIn')
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

                    <View style={styles.checkboxMain}>
                        <View style={styles.checkboxContainer}>
                            <View style={styles.checkbox} onTouchEnd={() => setAgreedTerms(!agreedTerms)}>
                                {check && <Text>&#10003;</Text>}
                            </View>
                            <Text style={styles.text} onPress={checkTrue}>
                                By creating an account, you agree to our {'\n'}
                                <Text style={styles.textBold}>Term & Conditions</Text>
                            </Text>
                        </View>
                        {attemptedSignup && !check && messageShown && <Text style={styles.errorText}>Please check the terms and conditions.</Text>}
                        {fields && !email && !username && !password && fieldsShown && <Text style={styles.errorText}>Please fill in the all required fields.</Text>}
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={handleSignup}>
                            <LinearGradient
                                colors={['#F0D042', '#77A21D']}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                style={styles.btn} >
                                <Text>{''}</Text>
                                <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
                                <Image source={loginIcon} style={styles.email} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.haveAccount}>
                        <Text style={[styles.text, { color: 'gray' }]}>
                            Already have an account? <Text style={[styles.textBold, { color: 'black' }]} onPress={() => navigation.navigate('SignIn')}>Sign in</Text>
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const renderFormItem = (label, icon, placeholder, isPassword = false, onChange) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.formItem}>
            <Text style={styles.emailText}>{label}</Text>
            <View style={styles.inputMain}>
                <Image source={icon} style={styles.email} />
                <TextInput
                    style={styles.inputEmail}
                    placeholder={placeholder}
                    secureTextEntry={isPassword && !showPassword}
                    placeholderTextColor="gray"
                    onChangeText={onChange} />
                {isPassword &&
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Image source={eyeIcon} style={styles.email} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        paddingHorizontal: 30,
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
    email: {
        width: 20,
        height: 20,
        marginBottom: 5
    },
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
    checkboxMain: {
        marginTop: 40,
        paddingVertical: 20,
        gap: 15,
        height: 100,
    },
    checkboxContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 14,
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
    },
    signupText: {
        color: 'white',
    },
    haveAccount: {
        alignSelf: 'center',
        marginVertical: 10
    }
})