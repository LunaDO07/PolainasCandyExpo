import React from 'react';
import { View, Text, TextInput, Image, ScrollView, Button, StyleSheet, Alert, TouchableOpacity, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputWithIcon from '../../components/InputWithIcon';

function Login (){
    
return (    
<ScrollView style={styles.container}>

    <View style={styles.header}>
        <Text style={styles.titulo}> Inicio de sesion</Text>
        <View style={styles.line} />      
        <View style={styles.logo}>
            <Image source={require('../../assets/images/2.png')} style={styles.img} />
        </View>
    </View>

    <Text style={styles.name}>POLAINA'S CANDYS</Text>

    <View style={styles.form}>
    
        <InputWithIcon
            iconName="mail-outline"
            placeholder="Correo electronico"
            // value={username}
            // onChangeText={setUsername}
        />

        <InputWithIcon
            iconName="lock-closed-outline"
            placeholder="Contraseña"
            // value={password}
            // onChangeText={setPassword}
            secureTextEntry={true}
        />
    </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <View style={styles.innerButton}>
                <Text style={styles.buttonText}>Aceptar</Text>
            </View>
        </TouchableOpacity>
    </View>

    <View style={styles.pie}>
        <Text style={styles.registrotext}> ¿No tienes una cuenta? <Text  style={styles.registrocolor}>Registrate</Text> </Text> 
        
    </View>
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:'#ffffff',
},
titulo:{
textAlign:'center',
paddingTop:20,
fontWeight:'600',
fontSize:25,
color:'#ffffff',
},
header:{
    flex:1,
    height:260,
    backgroundColor:'rgba(255, 90, 90, 0.65)',
    paddingTop:20,
    marginBottom:140,
    // borderBottomLeftRadius: 150,
    // borderBottomRightRadius: 150
},
line: {
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    marginVertical: 18,
    borderColor:'rgba(255, 244, 230, 0.97)',
},
logo:{
    flex:1,
    
    alignItems: 'center',
    borderRadius:300,
},
img:{
    position: 'absolute',
    top: '40%', 
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -30 }], // Ajusta esto según sea necesario para centrar la imagen
    height: 212,
    width: 209,
},
name: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight:'600',
    color:'#464646',
},
form:{
    paddingHorizontal:35,
    paddingTop:40,
    borderColor:'rgba(254, 151, 151, 0.82)',
},

buttonContainer: {
    alignItems: 'center',
    marginTop:20,
    marginBottom: 60,
},
button: {
    width: 170,
    height: 62,
    borderRadius: 20,  // Rounded corners
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // Shadow for Android
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
},
innerButton: {
    width: 170,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(62, 62, 62)',
    borderWidth: 1,
},
buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    
},
pie:{
    flex:0.4,
},
registrotext:{
    textAlign:'center',
    fontSize:15,
    color:'#000000'
    
},
registrocolor:{
    color:'#113696',
    fontWeight:'600',
    textDecorationLine:'underline',
},
});

export default Login;
