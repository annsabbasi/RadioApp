import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignIn() {
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
                    <Text style={styles.heading}>Let's Sign You In</Text>
                    <Text style={styles.paragraph}>Welome back, you've been missed!</Text>
                </View>

                <View style={styles.formContainer}>

                    <View style={styles.formItem}>
                        <Text style={styles.emailText}>Username or Email</Text>
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
                    <Text style={[styles.text, style = { color: 'gray' }]}>Don't have an account? <Text style={[styles.textBold, style = { color: 'black' }]}> Sign up</Text></Text>
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
        gap: 60,
        marginTop: 30
    },
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