import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ShowsContact() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.showContactMain}>
                    <View style={styles.mainLogoItem}>
                        <Image
                            source={require('../assets/BKLR.png')}
                            style={styles.mainlogo}
                        />
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
                                    style={styles.email}
                                />
                                <TextInput style={styles.inputEmail} placeholder='examplename' />
                            </View>
                        </View>

                        <View style={styles.formItem}>
                            <Text style={styles.emailText}>Message</Text>
                            <View style={styles.inputTextarea}>
                                {/* <Image
                                    source={require('../assets/icons/lock.png')}
                                    style={styles.email}
                                /> */}
                                {/* <TextInput style={styles.inputEmail} placeholder='********' /> */}
                                <TextInput
                                    style={styles.textarea}
                                    multiline
                                    numberOfLines={8}
                                    placeholder="Type your message here."
                                />
                            </View>
                        </View>

                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn}>
                                <Text>{''}</Text>
                                <Text style={[styles.signupText, styles.textBold]}>SUBMIT</Text>
                                <Image
                                    source={require('../assets/icons/logIn.png')}
                                    style={styles.email}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.haveAccount}>
                        {/* <Text style={[styles.text, style = { color: 'gray' }]}>Don't have an account? <Text style={[styles.textBold, style = { color: 'black' }]}> Sign up</Text></Text> */}
                        <Text style={styles.headTextVia}>Or Contact us via.</Text>
                        <View style={styles.contactVia}>
                            <Image
                                source={require('../assets/icons/mail.png')}
                                style={styles.email}
                            />
                            <Text style={styles.infoTextVia}>Balina@gmail.com</Text>
                        </View>
                        <View style={styles.contactVia}>
                            <Image
                                source={require('../assets/icons/mail.png')}
                                style={styles.email}
                            />
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
        // padding: 10,
        flex: 1,
        // width: '95%',
        marginTop: 20
    },
    showContactMain: {
        // width: '90%',
        // alignSelf: 'center',
        paddingHorizontal: 30,
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
        gap: 40,
        marginTop: 30
    },
    emailText: {
        fontSize: 16,
        color: "gray",
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10
    },
    textarea: {
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        fontSize: 14,
        // minHeight: 100,
        // backgroundColor: 'red',
        backgroundColor: '#E8E8E8',
        // alignItems: 'flex-start',
        // alignSelf: 'flex-start',
        // justifyContent: 'flex-start',
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
    inputEmail: {
        flex: 1
    },
    textBold: {
        fontWeight: '700',
    },
    btnContainer: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 30
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
        // alignSelf: 'center',
        marginVertical: 60,
        gap: 10
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
})