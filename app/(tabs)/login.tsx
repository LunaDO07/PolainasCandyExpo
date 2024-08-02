import React from 'react';
import { View, Text, TextInput, Image, ScrollView, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

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
    
        <TextInput
            style={styles.input}
            placeholder="Correo electronico"
           
            // value={username}
            // onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            // value={password}
            // onChangeText={setPassword}
        />
    </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
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
input: {
    height: 50,
    borderColor: 'gray',
    backgroundColor:'#ffffff',
    borderRadius:25,
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 5,
    elevation: 6,
},
buttonContainer: {
    alignItems: 'center',
    marginTop:20,
    marginBottom: 60,
},
button: {
    backgroundColor: '#060606',
    padding: 10, 
    borderRadius: 25,
    width: 200, 
    elevation: 10,
},
buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign:'center',
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
