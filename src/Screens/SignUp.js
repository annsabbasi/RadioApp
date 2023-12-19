import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
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
                <View>
                    <Text style={styles.heading}>Getting Started</Text>
                    <Text style={styles.paragraph}>Create an account to continue!</Text>
                </View>

                <View>
                    <View>
                        <Text>Email</Text>
                        <View>
                            <Text>Logo</Text>
                            <TextInput style={styles.inputEmail} placeholder='Email' />
                        </View>
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
        paddingHorizontal: 40
        // paddingVertical: 20
        // alignItems: 'center',
        // justifyContent: 'center'
        // border: '12px solid red',
        // backgroundColor: 'red'
    },
    mainLogoItem: {
        alignSelf: 'center',
        paddingVertical: 40,
        // borderBlockColor : 'red',
        // borderWidth: 2,
        // borderColor: 'red',
    },
    heading: {
        fontWeight: '700',
        fontSize: 24,
        // fontFamily: 'poppins',
        paddingVertical: 6
    },
})