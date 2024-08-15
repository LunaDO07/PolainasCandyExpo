import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { NavAdmn } from '../../components/NavAdmn';

const Logs = () => {
const logs = [
    { date: '2024-08-06', action: 'Compra realizada', user: 'Usuario1' },
    { date: '2024-08-05', action: 'Registro completado', user: 'Usuario2' },
    { date: '2024-08-04', action: 'Actualización de perfil', user: 'Usuario3' },
    // Agrega más logs según sea necesario
];

return (
    <View style={styles.container}>
    {/* Navbar superior */}
    <NavAdmn/>
    {/* Tabla de Logs */}
    <ScrollView contentContainerStyle={styles.tableContainer}>
    <Text style={styles.tableHeaderNavbarTitle}>Logs de la aplicacion</Text>
        <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderText, styles.tableColumnDate]}>Fecha</Text>
        <Text style={[styles.tableHeaderText, styles.tableColumnAction]}>Acción</Text>
        <Text style={[styles.tableHeaderText, styles.tableColumnUser]}>Usuario</Text>
        </View>
        {logs.map((log, index) => (
        <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableRowText, styles.tableColumnDate]}>{log.date}</Text>
            <Text style={[styles.tableRowText, styles.tableColumnAction]}>{log.action}</Text>
            <Text style={[styles.tableRowText, styles.tableColumnUser]}>{log.user}</Text>
        </View>
        ))}
    </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: StatusBar.currentHeight || 0,
},
tableHeaderNavbarTitle: {
    fontSize: 18,
    color: '#000000',
    fontFamily:'Lailasemi',
    textAlign:'center',
    marginBottom:20,
},
tittle:{
    fontSize:20,
    fontFamily:'Josefbold'
},
tableContainer: {
    padding: 20,
    backgroundColor: '#FFF',
},
tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ffe1bd',
    padding: 10,
    borderRadius: 8,
},
tableHeaderText: {
    fontSize: 15,
    color: '#333',
    fontFamily:'Lailasemi',
    textAlign:'center',
},
tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
},
tableRowText: {
    fontSize: 13,
    color: '#333',
    fontFamily:'Laila',
},
tableColumnDate: {
    flex: 1,
    
},
tableColumnAction: {
    flex: 2,
    marginLeft:15,
},
tableColumnUser: {
    flex: 1,
},
});

export default Logs;