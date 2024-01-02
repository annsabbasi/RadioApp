import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Test3 = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
            // value={password}
            // onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
                {/* You can use an icon or text to indicate show/hide */}
                <Text>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 100
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    },
    toggleButton: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
});

export default Test3;
