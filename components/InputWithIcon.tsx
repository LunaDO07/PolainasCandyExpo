import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputWithIconProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Ionicons>['name'];
    placeholder: string;
    isPassword?: boolean;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ iconName, placeholder, isPassword = false, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <Ionicons name={iconName} size={24} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={isPassword && !showPassword}
                {...props}
            />
            {isPassword && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={24}
                        color="gray"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginBottom: 30,
        paddingHorizontal: 10,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        height: 45,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
    },
});

export default InputWithIcon;