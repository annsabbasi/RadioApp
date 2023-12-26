import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignUp() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.mainLogoItem}>
                    <Image
                        source={require('../assets/BKLR.png')}
                        style={styles.mainlogo}
                    />
                </View>
                <View style={styles.headText}>
                    <Text style={styles.heading}>Getting Started</Text>
                    <Text style={styles.paragraph}>Create an account to continue!</Text>
                </View>

                <View style={styles.formContainer}>

                    <View style={styles.formItem}>
                        <Text style={styles.emailText}>Email</Text>
                        <View style={styles.inputMain}>
                            <Image
                                source={require('../assets/icons/mail.png')}
                                style={styles.email}
                            />
                            <TextInput style={styles.inputEmail} placeholder='example@gmail.com' />
                        </View>
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.emailText}>Username</Text>
                        <View style={styles.inputMain}>
                            <Image
                                source={require('../assets/icons/user.png')}
                                style={styles.email}
                            />
                            <TextInput style={styles.inputEmail} placeholder='examplename' />
                        </View>
                    </View>

                    <View style={styles.formItem}>
                        <Text style={styles.emailText}>Password</Text>
                        <View style={styles.inputMain}>
                            <Image
                                source={require('../assets/icons/lock.png')}
                                style={styles.email}
                            />
                            <TextInput style={styles.inputEmail} placeholder='********' />
                            <Image
                                source={require('../assets/icons/eye.png')}
                                style={styles.email}
                            />
                        </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <View style={styles.checkbox}>
                            <Text>&#10003;</Text>
                        </View>
                        <Text style={styles.text}>By creating an account, you agree to our{'\n'}<Text style={styles.textBold}>Term & Conditions</Text></Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text>{''}</Text>
                            <Text style={[styles.signupText, styles.textBold]}>SIGN UP</Text>
                            <Image
                                source={require('../assets/icons/logIn.png')}
                                style={styles.email}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.haveAccount}>
                    <Text style={[styles.text, style = { color: 'gray' }]}>Already have an account? <Text style={[styles.textBold, style = { color: 'black' }]}> Sign in</Text></Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        paddingHorizontal: 30
    },
    mainLogoItem: {
        alignSelf: 'center',
        paddingVertical: 40,
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
        marginVertical: 15
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