import React, { useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import NavBusqueda from '../../components/navBusqueda';

function IndexCliente() {
return (
<View style={styles.container}>

<NavBusqueda/>
    <View style={styles.imagenes}>
        {/* aregar carrucel de imagenes*/}
    </View>
    <View style={styles.category}>
        <View style={styles.catedec}/>
        <Text>Holaaaa</Text>
    </View>



</View>
);
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'rgb(255, 255, 255)',
},
imagenes:{
    backgroundColor:'rgb(255, 177, 177)',
    height:220,
},
category:{
    marginTop:20,
    flexDirection:'row',
    backgroundColor:'rgba(196, 196, 196, 0.23)',
},
catedec:{
    backgroundColor:'rgb(27, 154, 146)',
    height:45,
    width:100,
    marginRight:20,
}
})

export default IndexCliente

