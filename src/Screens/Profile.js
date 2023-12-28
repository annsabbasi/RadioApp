import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const infoData = [
    { icon: require('../assets/icons/user.png'), heading: 'Name', value: 'Mike Husky', editable: true },
    { icon: require('../assets/icons/mail.png'), heading: 'Email', value: 'Hello@gmail.com' },
    { icon: require('../assets/icons/lock.png'), heading: 'Password', value: '**********' },
    { icon: require('../assets/icons/Frame.png'), heading: 'Country', value: 'United States of America' },
    { icon: require('../assets/icons/phone.png'), heading: 'Phone', value: '+1234567890' },
];

export default function UserProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
            <ScrollView>
                <View style={[styles.ellipseHome, styles.relative]}>
                    <Image source={require('../assets/Ellipse3.png')} style={styles.image} />
                    <View style={[styles.absolute, { left: -80, width: '10%', top: -10 }]}>
                        <Image source={require('../assets/Ellipse3Shade.png')} />
                    </View>
                    <View style={styles.header}>
                        <TouchableOpacity style={{ zIndex: 3 }}>
                            <Image source={require('../assets/icons/goBack.png')} style={styles.goBack} />
                        </TouchableOpacity>
                        <Text style={styles.textHead}>Profile</Text>
                        <Text>{''}</Text>
                    </View>

                    <View style={[styles.absolute, { bottom: '-15%', left: '30%' }]}>
                        <Image source={require('../assets/profile.png')} style={styles.profileImg} />
                    </View>
                    <TouchableOpacity style={[styles.absolute, { bottom: '25%', left: '26%' }]}>
                        <Image source={require('../assets/icons/camera.png')} style={styles.cameraLogo} />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoCardContainer}>
                    {infoData.map((info, index) => (
                        <View key={index} style={styles.infoCardItem}>
                            <View style={styles.profileInfo}>
                                <Image source={info.icon} style={styles.primaryIcon} />
                                <View>
                                    <Text style={styles.heading}>{info.heading}</Text>
                                    <Text style={styles.paragraph}>{info.value}</Text>
                                </View>
                            </View>
                            {info.editable && (
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/edit.png')} style={styles.primaryIcon} />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ellipseHome: {
        width: '100%',
    },
    relative: {
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
        zIndex: 3,
        gap: 10,
    },
    image: {
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        position: 'absolute',
        top: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    textHead: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
    },
    infoCardContainer: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'silver',
        alignSelf: 'center',
        flex: 1,
        borderRadius: 10,
        padding: 20,
        marginVertical: 30,
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        marginTop: 90
    },
    infoCardItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    primaryIcon: { width: 20, height: 20 },
    heading: {
        fontSize: 14,
        fontWeight: '600',
    },
    paragraph: {
        fontSize: 16,
        fontWeight: '700',
    },
    goBack: { width: 35, height: 35 },
});