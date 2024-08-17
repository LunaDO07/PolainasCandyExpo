import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { NavAdmn } from '../../components/NavAdmn';
import Ionicons from '@expo/vector-icons/Ionicons';

const LogsScreen = () => {
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
            {/* Lista de Logs */}
            <ScrollView contentContainerStyle={styles.listContainer}>
                <Text style={styles.header}>Logs de la aplicación</Text>
                {logs.map((log, index) => (
                    <View key={index} style={styles.logItem}>
                        <Ionicons name="information-circle" size={20} color="#333" style={styles.icon} />
                        <Text style={styles.logText}>{`[${log.date}] ${log.action} - ${log.user}`}</Text>
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
    header: {
        fontSize: 18,
        color: '#000000',
        fontFamily: 'Lailasemi',
        textAlign: 'center',
        marginVertical: 20,
    },
    listContainer: {
        padding: 20,
        backgroundColor: '#FFF',
    },
    logItem: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    logText: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'Laila',
        flexShrink: 1,
    },
});

export default LogsScreen;