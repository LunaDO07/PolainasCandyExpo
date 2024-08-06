import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavSinBusqueda from '../../components/navSinBusqueda';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

const ConfirmacionScreen = () => {
const [selectedGender, setSelectedGender] = useState<string>('');
const [selectedMunicipio, setSelectedMunicipio] = useState<string>('');

const handleGenderChange = (itemValue: string) => {
    setSelectedGender(itemValue);
};

const handleMunicipioChange = (itemValue: string) => {
    setSelectedMunicipio(itemValue);
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
      <NavSinBusqueda/>

      {/* Contenido del formulario */}
    <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.message}>Estamos preparando todo para realizar tu compra</Text>
        <View style={styles.separator} />
        <Text style={styles.subtitle}>Complete los siguientes datos para llevar a cabo su compra</Text>

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
                <Picker.Item label="Otro" value="otro" />
                </Picker>
        </View>
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Calle:</Text>
            <TextInput style={styles.input} placeholder="Ingrese su calle" />
        </View>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Número:</Text>
            <TextInput style={styles.input} placeholder="Ingrese su número" />
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
            <View style={styles.inputGroup}>
            <Text style={styles.label}>Código Postal:</Text>
            <TextInput style={styles.input} placeholder="Ingrese su código postal" />
            </View>

        <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
        </ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: StatusBar.currentHeight || 0, // Añade padding superior para evitar la barra de estado
},
navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
},
menuButton: {
    marginRight: 10,
},
navbarTitle: {
    fontSize: 22,
    textAlign:'center',
    fontWeight: 'bold',
    color: '#FFF',
    flex: 1,
},
searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    margin: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CCC',
},
searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 5,
    color: '#333',
    flex: 1,
},
searchIcon: {
    marginLeft: 10,
},
formContainer: {
    padding: 20,

    paddingHorizontal:40,
},
message: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 10,
    color: '#333',
},
separator: {
    height: 3,
    backgroundColor: '#E5E5E5',
    marginVertical: 10,
},
subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
},
inputGroup: {
    marginBottom: 15,
},
label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
},
input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
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
    backgroundColor: '#232F3E',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
},
submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
},
});

export default ConfirmacionScreen;