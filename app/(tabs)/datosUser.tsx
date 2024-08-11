import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, ScrollView, Dimensions, StatusBar, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavBusqueda from '../../components/navBusqueda';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

const ConfirmacionScreen = () => {
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [selectedMunicipio, setSelectedMunicipio] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleGenderChange = (itemValue: string) => {
        setSelectedGender(itemValue);
    };

    const handleMunicipioChange = (itemValue: string) => {
        setSelectedMunicipio(itemValue);
    };

    const handleNumberChange = (text: string) => {
        // Permitir solo números
        setNumber(text.replace(/[^0-9]/g, ''));
    };

    const handlePostalCodeChange = (text: string) => {
        // Permitir solo números
        setPostalCode(text.replace(/[^0-9]/g, ''));
    };

    const router = useRouter();
    const handleSubmit = () => {
        if (!number || !postalCode) {
            setShowModal(true);
        } else {
            router.push('/ticket'); 
            Alert.alert('Formulario enviado', 'Los datos se han enviado correctamente.');
        }
    };

    const municipios = [
        { label: 'Seleccionar municipio', value: '' },
        { label: 'Municipio 1', value: 'municipio1' },
        { label: 'Municipio 2', value: 'municipio2' },
        { label: 'Municipio 3', value: 'municipio3' }
        // Agrega más municipios según sea necesario
    ];

    return (
        <View style={styles.container}>
            <NavBusqueda />

            {/* Contenido del formulario */}
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Text style={styles.message}>Completa tu información para continuar</Text>
                <View style={styles.separator} />

                {/* Campos del formulario */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Sexo:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedGender}
                            onValueChange={handleGenderChange}
                            style={styles.picker}
                        >
                            <Picker.Item label="Seleccionar género" value="" />
                            <Picker.Item label="Masculino" value="masculino" />
                            <Picker.Item label="Femenino" value="femenino" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Calle:</Text>
                    <TextInput style={styles.input} placeholder="Ingrese su calle" />
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Número:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Número de casa"
                            keyboardType="numeric"
                            value={number}
                            onChangeText={handleNumberChange}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Código Postal:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Código postal"
                            keyboardType="numeric"
                            value={postalCode}
                            onChangeText={handlePostalCodeChange}
                        />
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Colonia:</Text>
                    <TextInput style={styles.input} placeholder="Ingrese su colonia" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Localidad:</Text>
                    <TextInput style={styles.input} placeholder="Ingrese su localidad" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Municipio:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedMunicipio}
                            onValueChange={handleMunicipioChange}
                            style={styles.picker}
                        >
                            {municipios.map((municipio) => (
                                <Picker.Item key={municipio.value} label={municipio.label} value={municipio.value} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
                    <Text style={styles.submitButtonText}>Enviar</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal de advertencia */}
            <Modal
                transparent={true}
                visible={showModal}
                animationType="slide"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Ionicons name="alert-circle-outline" size={40} color="#000000" />
                        <Text style={styles.modalText}>Hay campos vacíos, revisa tu información para continuar.</Text>
                        <Pressable
                            style={styles.modalButton}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        paddingTop: StatusBar.currentHeight || 0, // Añade padding superior para evitar la barra de estado
    },
    formContainer: {
        padding: 20,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'Josefbold',
        color: '#333',
    },
    separator: {
        height: 3,
        backgroundColor: '#d7d7d7',
        marginVertical: 10,
    },
    inputGroup: {
        marginBottom: 15,
        marginHorizontal: 15,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
        fontFamily: 'Josefinmedium',
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 14,
        // fontFamily: 'Laila',
    },
    pickerContainer: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCC',
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#333',
    },
    submitButton: {
        backgroundColor: '#ffa526',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Lailasemi',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.68)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    modalButton: {
        marginTop: 15,
        padding: 10,
        paddingHorizontal: 40,
        backgroundColor: '#000000',
        borderRadius: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ConfirmacionScreen;
