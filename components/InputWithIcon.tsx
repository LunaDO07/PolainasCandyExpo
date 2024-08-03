import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface InputWithIconProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Ionicons>['name'];
    placeholder: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ iconName, placeholder, ...props }) => {
    return (
        <View style={styles.inputContainer}>
            <Ionicons name={iconName} size={24} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                {...props}
            />
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
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default InputWithIcon;
