import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function ShowsContact() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent /> */}
            <ScrollView>
                <View style={styles.showContactMain}>
                    <View style={styles.mainLogoItem}>
                        <TouchableOpacity style={{ zIndex: 3 }}>
                            <Image source={require('../assets/icons/back.png')} style={styles.goBack} />
                        </TouchableOpacity>
                        <Image
                            source={require('../assets/BKLR.png')}
                            style={styles.mainlogo} />
                        <Text>{''}</Text>
                    </View>
                    <View style={styles.headText}>
                        <Text style={styles.heading}>Contact Us</Text>
                        <Text style={styles.paragraph}>Have any question, let us know.</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.formItem}>
                            <Text style={styles.emailText}>Email</Text>
                            <View style={styles.inputMain}>
                                <Image
                                    source={require('../assets/icons/mail.png')}
                                    style={styles.email} />
                                <TextInput style={styles.inputEmail} placeholder='examplename' />
                            </View>
                        </View>

                        <View style={styles.formItem}>
                            <Text style={styles.emailText}>Message</Text>
                            <View style={styles.inputTextarea}>
                                <TextInput
                                    style={styles.textarea}
                                    multiline
                                    numberOfLines={8}
                                    placeholder="Type your message here." />
                            </View>
                        </View>

                        <View style={styles.btnContainer}>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#F0D042', '#77A21D']}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    style={styles.btn} >
                                    <Text>{''}</Text>
                                    <Text style={[styles.signupText, styles.textBold]}>SUBMIT</Text>
                                    <Image
                                        source={require('../assets/icons/logIn.png')}
                                        style={styles.email} />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.haveAccount}>
                        <Text style={styles.headTextVia}>Or Contact us via.</Text>
                        <View style={styles.contactVia}>
                            <Image
                                source={require('../assets/icons/mail.png')}
                                style={styles.email} />
                            <Text style={styles.infoTextVia}>Balina@gmail.com</Text>
                        </View>
                        <View style={styles.contactVia}>
                            <Image
                                source={require('../assets/icons/mail.png')}
                                style={styles.email} />
                            <Text style={styles.infoTextVia}>124-230-5523</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
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
    emailText: {
        fontSize: 16,
        color: "gray",
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10
    },
    textarea: {
        borderRadius: 8,
        padding: 15,
        fontSize: 14,
        backgroundColor: '#E8E8E8',
        textAlignVertical: "top"
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
    btnContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 30,
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 20
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
        // backgroundColor: 'rgba(119, 162, 29, 1)'
    },
    haveAccount: {
        marginVertical: 60,
        gap: 10,
        paddingHorizontal: 20,
    },
    headTextVia: {
        fontWeight: '600',
        fontSize: 16,
    },
    infoTextVia: {
        fontWeight: '700',
        fontSize: 24,
    },
    contactVia: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },
    goBack: { width: 35, height: 35 },
    showContactMain: { paddingHorizontal: 10, marginTop: 40 },
    mainLogoItem: { flexDirection: 'row', alignSelf: 'center', marginVertical: 40, marginBottom: 60, justifyContent: 'space-between', width: '100%', alignItems: 'center' },
    headText: { marginVertical: 10, paddingHorizontal: 20, },
    formContainer: { gap: 40, marginTop: 30, paddingHorizontal: 20, },
    email: { width: 20, height: 20 },
    inputEmail: { flex: 1 },
    textBold: { fontWeight: '700', },
    signupText: { color: 'white', },
})