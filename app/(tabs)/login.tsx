import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import InputWithIcon from '../../components/InputWithIcon';
import CustomAlert from '../../components/Alert'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState(<></>);

    const handleLogin = () => {
        if (!email || !password) {
            let missingFields = [];
            if (!email) missingFields.push("el correo electrónico");
            if (!password) missingFields.push("la contraseña");

    const formattedMessage = (
        <Text style={styles.alertMessage}>
            Ingresa {missingFields.map((field, index) => (
                <Text key={field} style={{ fontWeight: 600 }}>
                    {field}{index < missingFields.length - 1 ? ' y ' : ''}
                </Text>
            ))} para continuar
        </Text>
    );

            setAlertMessage(formattedMessage);
            setAlertVisible(true);
        } else {
            // Proceder con la lógica de inicio de sesión
            Alert.alert('Inicio de sesión', 'Lógica de inicio de sesión aquí');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Inicio de Sesión</Text>
                <View style={styles.line} />
                <View style={styles.logo}>
                    <Image source={require('../../assets/images/2.png')} style={styles.img} />
                </View>
            </View>

            <Text style={styles.name}>POLAINA'S CANDYS</Text>
            <View style={styles.form}>
                <InputWithIcon
                    iconName="mail-outline"
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <InputWithIcon
                    iconName="lock-closed-outline"
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    isPassword={true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <View style={styles.innerButton}>
                        <Text style={styles.buttonText}>Aceptar</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.registrotext}>¿No tienes cuenta?<Text style={styles.registrocolor}>Regístrate</Text></Text>

            <CustomAlert
                visible={alertVisible}
                message={alertMessage}
                onClose={() => setAlertVisible(false)}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    titulo: {
        textAlign: 'center',
        paddingTop: 35,
        fontWeight: '600',
        fontSize: 30,
        color: '#ffffff',
        fontFamily: 'Josefbold',
    },
    header: {
        flex: 1,
        height: 260,
        backgroundColor: 'rgba(255, 90, 90, 0.65)',
        paddingTop: 20,
        marginBottom: 140,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 4,
        marginVertical: 18,
        borderColor: 'rgba(255, 244, 230, 0.97)',
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 300,
    },
    img: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -30 }],
        height: 212,
        width: 209,
    },
    name: {
        fontSize: 22,
        textAlign: 'center',
        color: '#5A5A5A',
        fontFamily: 'Lailasemi',
    },
    form: {
        paddingHorizontal: 37,
        paddingTop: 40,
        borderColor: 'rgba(254, 151, 151, 0.82)',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 30,
    },
    button: {
        width: 170,
        height: 53,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 6,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 7,
    },
    innerButton: {
        width: 170,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#292929',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(62, 62, 62)',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Josefinmedium',
    },
    registrotext: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000000',
        fontFamily: 'Josefinmedium',
    },
    registrocolor: {
        color: '#113696',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    alertMessage: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 28,
        color: 'rgb(39, 39, 39)',
    },
});

export default Login;
