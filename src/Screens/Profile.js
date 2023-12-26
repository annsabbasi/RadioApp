import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UserProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.ellipseHome}>
                    <Image
                        source={require('../assets/Ellipse3.png')}
                        style={styles.image} />
                    <View style={{ position: 'absolute', left: -80, width: '10%', top: -10 }}>
                        <Image
                            source={require('../assets/Ellipse3Shade.png')}
                            style={styles.goBack} />
                    </View>
                    <View style={styles.header}>
                        <Image
                            source={require('../assets/icons/goBack.png')}
                            style={styles.goBack} />
                        <Text style={styles.textHead}>Profile</Text>
                        <Text>{''}</Text>
                    </View>


                    <View style={styles.profileData}>
                        <Image
                            source={require('../assets/profile.png')}
                            style={styles.profileImg} />
                    </View>
                    <TouchableOpacity style={styles.camera}>
                        <Image
                            source={require('../assets/icons/camera.png')}
                            style={styles.cameraLogo} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 40, alignItems: 'center', marginTop: 55, gap: 5, }}>
                    {/* <Text style={styles.profileName}>Ronan Ryan</Text>
                    <Text style={styles.profileDesc}>Ronan is the top DJ featuring shows like classic country and blues.</Text> */}

                    <View style={styles.infoCardContainer}>
                        <View style={styles.infoCardItem}>
                            <View style={styles.profileInfo}>
                                <Image
                                    source={require('../assets/icons/user.png')}
                                    style={styles.cameraLogo} />
                                <View>
                                    <Text style={styles.heading}>Name</Text>
                                    <Text style={styles.paragraph}>Mike Husky</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/icons/edit.png')}
                                    style={styles.cameraLogo} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoCardItem}>
                            <View style={styles.profileInfo}>
                                <Image
                                    source={require('../assets/icons/mail.png')}
                                    style={styles.cameraLogo} />
                                <View>
                                    <Text style={styles.heading}>Email</Text>
                                    <Text style={styles.paragraph}>Hello@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoCardItem}>
                            <View style={styles.profileInfo}>
                                <Image
                                    source={require('../assets/icons/lock.png')}
                                    style={styles.cameraLogo} />
                                <View>
                                    <Text style={styles.heading}>Password</Text>
                                    <Text style={styles.paragraph}>**********</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoCardItem}>
                            <View style={styles.profileInfo}>
                                <Image
                                    source={require('../assets/icons/Frame.png')}
                                    style={styles.cameraLogo} />
                                <View>
                                    <Text style={styles.heading}>Country</Text>
                                    <Text style={styles.paragraph}>United States of America</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoCardItem}>
                            <View style={styles.profileInfo}>
                                <Image
                                    source={require('../assets/icons/phone.png')}
                                    style={styles.cameraLogo} />
                                <View>
                                    <Text style={styles.heading}>Phone</Text>
                                    <Text style={styles.paragraph}>+1234567890</Text>
                                </View>
                            </View>
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
        // backgroundColor: 'green',
    },

    ellipseHome: {
        position: 'relative',
        width: '100%',
    },
    image: {
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        top: 0,
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    profileData: {
        // justifyContent: 'space-between',
        // padding: 20,
        // top: '50%',
        // position: 'absolute',
        // paddingTop: 100,
        // alignItems: 'center',
        // borderWidth: 2,
        // zIndex: 3,
        // width: '100%',
        // marginTop: 25,
        // paddingVertical: 20,
        // alignSelf: 'center',

        position: 'absolute',
        bottom: '-15%',
        left: '30%',
        alignItems: 'center',
        zIndex: 3,
        gap: 10,
    },
    // profileImg: {
    //     // width: 160,
    //     // height: 210,
    //     // width: '100px',
    //     // height: '100%',
    //     // borderWidth: 2
    // },
    // profileName: {
    //     fontSize: 24,
    //     fontWeight: '700'
    // },
    // profileDesc: {
    //     fontSize: 16,
    //     // fontWeight: '700',
    //     // zIndex: 3,
    //     textAlign: 'center',
    //     width: '78%',
    //     backgroundColor: 'white',
    //     lineHeight: 25
    // },
    camera: {
        position: 'absolute',
        bottom: '25%',
        zIndex: 3,
        // alignItems: 'center',
        // alignSelf: 'center'
        left: '26%'
    },
    infoCardContainer: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'silver',
        flex: 1,
        borderRadius: 5,
        // paddingVertical: 20,
        padding: 20,
        marginVertical: 30,


        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        // alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
    },
    infoCardItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // gap: 40,
        // borderWidth: 2,
        paddingVertical: 20
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    heading: {
        fontSize: 14,
        fontWeight: '600'
    },
    paragraph: {
        fontSize: 16,
        fontWeight: '700'
    },
});