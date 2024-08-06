import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Pressable, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const registro = () => {
const [selectedGender, setSelectedGender] = useState('');
const [birthDate, setBirthDate] = useState('');
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [age, setAge] = useState('');
const [username, setUsername] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showAlert, setShowAlert] = useState(false);

const validateFields = () => {
    const requiredFields = [name, surname, age, username, selectedGender, phone, birthDate, email, password];
    if (requiredFields.some(field => !field)) {
        setShowAlert(true);
        return false;
    }
    // Validar formato de la fecha
    if (birthDate && !/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
        setShowAlert(true);
        return false;
    }
    return true;
};

const handleSubmit = () => {
    if (validateFields()) {
      // lógica para enviar el formulario
    
    console.log("Formulario enviado");
    }
};

const handleDateSelection = () => {
    console.log("Seleccionar fecha");
};

return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
            <Image
                source={{ uri: 'https://media3.giphy.com/media/fYxGOc3PHwLmvXcHCU/giphy.gif?cid=6c09b952kb94toej6cjhz1ufjwc9v4pme7m4o1f42s7k0njl&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' }} 
                style={styles.gif}
            />
            <Text style={styles.header}>Registro</Text>
        </View>

        <Text style={styles.label}>Ingresa tu nombre completo</Text>
        <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#A6A6A6"
            value={name}
            onChangeText={setName}
        />

        <Text style={styles.label}>Ingresa tus apellidos</Text>
        <TextInput
            style={styles.input}
            placeholder="Apellidos"
            placeholderTextColor="#A6A6A6"
            value={surname}
            onChangeText={setSurname}
        />

        <Text style={styles.label}>Ingresa tu edad</Text>
        <TextInput
            style={styles.input}
            placeholder="Edad"
            placeholderTextColor="#A6A6A6"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
        />

        <Text style={styles.label}>Ingresa tu usuario</Text>
        <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#A6A6A6"
            value={username}
            onChangeText={setUsername}
        />

        <Text style={styles.label}>Ingresa tu género</Text>
        <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedGender}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedGender(itemValue)}
            dropdownIconColor="#A6A6A6">

            <Picker.Item label="Género" value="" color="#A6A6A6" />
            <Picker.Item label="Masculino" value="male" />
            <Picker.Item label="Femenino" value="female" />
            {/* checar */}
            <Picker.Item label="Otro" value="other" />
            
        </Picker>
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
                style={styles.input}
                placeholder="Número"
                placeholderTextColor="#A6A6A6"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
        </View>

        <View style={styles.column}>
            <Text style={styles.label}>Nacimiento</Text>
            <View style={styles.dateInputContainer}>
            <TextInput
                style={styles.dateInput}
                placeholder="dd/mm/aaaa"
                placeholderTextColor="#A6A6A6"
                value={birthDate}
                onChangeText={setBirthDate}
            />
            <TouchableOpacity onPress={handleDateSelection} style={styles.dateIconContainer}>
            <Ionicons name="calendar-clear-outline" size={24} color="A6A6A6" />
                </TouchableOpacity>
            </View>
        </View>
        </View>

        <Text style={styles.label}>Correo</Text>
        <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#A6A6A6"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#A6A6A6"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <Text style={styles.link}>
            <Text style={styles.linkText}>¿Ya tienes cuenta? </Text>
            <Text style={styles.linkHighlight}>Inicia sesión</Text>
            </Text>
        </TouchableOpacity>
                {/*     
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>
                    <Text style={styles.linkText}>¿Ya tienes cuenta? </Text>
                    <Text style={styles.linkHighlight}>Inicia sesión</Text>
                </Text>
                </TouchableOpacity> */}

        <Text style={styles.footerText}>Polaina's Candys</Text>

        {/* Modal de Alerta */}
        <Modal
            transparent={true}
            visible={showAlert}
            animationType="slide"
            onRequestClose={() => setShowAlert(false)}
        >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Ionicons name="alert-circle" size={40} color="red" />
                <Text style={styles.modalText}>Hay campos vacios, revisa tu informacion para continuar.</Text>
                <Pressable
                style={styles.modalButton}
                onPress={() => setShowAlert(false)}
                >
                <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
            </View>
            </View>
        </Modal>
        </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
scrollContainer: {
    flexGrow: 1,

    paddingTop: StatusBar.currentHeight, 
    // Añadir espacio para la barra de estado
},
pageContainer: {
    flex: 1,
    backgroundColor:'rgb(246, 246, 246)',
    margin: 10,
    padding: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#8c8c8c',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
},
headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    
},
header: {
    fontSize: 32,
    color: '#000000',
    textAlign: 'center',
    fontFamily:'Josefbold',
    
},
gif: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
},
label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Josefinmedium',
},
input: {
    borderWidth: 1,
    borderColor: 'rgba(255, 90, 90, 0.85)',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    color: '#474747',
    height: 47,
    justifyContent: 'center',
    fontFamily: 'Laila',
},
pickerContainer: {
    borderWidth: 1,
    borderColor: '#E25656',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    overflow: 'hidden',
    height: 47,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    paddingLeft: 2,
    
},
picker: {
    color: '#333',
    fontSize: 15,
},
row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
},
column: {
    flex: 1,
    marginRight: 10,
},
dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E25656',
    padding: 7,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    height: 47,
    justifyContent: 'space-between',
},
dateInput: {
    flex: 1,
    color: '#333',
    fontFamily: 'Laila',
    fontSize:12.5,
},
dateIconContainer: {
    marginLeft: 5,
},
button: {
    backgroundColor: 'rgba(255, 90, 90, 0.65)',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
},
buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
},
link: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
},
linkText: {
    color: '#333',
    fontFamily: 'Josefinmedium',
},
linkHighlight: {
    color: '#1764AB',
    textDecorationLine: 'underline',
    fontFamily: 'Josefinmedium',
},
footerText: {
    marginTop: 40,
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(81, 81, 81, 0.86)',
    fontFamily: 'Laila',
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
    paddingHorizontal:40,
    backgroundColor: '#E25656',
    borderRadius: 10,
},
modalButtonText: {
    color: '#fff',
    fontSize: 16,
},
});

export default registro;