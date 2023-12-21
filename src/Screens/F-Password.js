import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FPassword() {
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
                    <Text style={styles.heading}>Password Recovery</Text>
                    <Text style={styles.paragraph}>Enter your Phone number to recover your password</Text>
                </View>

                <View style={styles.formContainer}>

                    <View style={styles.formItem}>
                        <Text style={styles.emailText}>Email for recovery</Text>
                        <View style={styles.inputMain}>
                            <TextInput style={styles.inputEmail} placeholder='example@gmail.com' />
                            <Image
                                source={require('../assets/icons/check.png')}
                                style={styles.email}
                            />
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text>{''}</Text>
                            <Text style={[styles.signupText, styles.textBold]}>CONTINUE</Text>
                            <Image
                                source={require('../assets/icons/arrowright.png')}
                                style={styles.email}
                            />
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 20,
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
        marginBottom: 30
    },
    inputMain: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomColor: 'silver',
        borderWidth: 1,
        gap: 10,
        paddingVertical: 15,
        paddingHorizontal: 10
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
})