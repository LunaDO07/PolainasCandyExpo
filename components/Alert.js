import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomAlert = ({ visible, message, onClose }) => {
return (
    <Modal transparent={true} animationType="fade" visible={visible} onRequestClose={onClose}>

        <View style={styles.overlay}>
            <View style={styles.alertBox}>
            <View style={styles.header}>
                <Ionicons name="alert-circle-outline" size={40} color="rgb(40, 40, 40)" />
                <Text style={styles.headerText}>Datos Incompletos</Text>
            </View>

            <View style={styles.alertMessageContainer}>
                {message}
            </View>
            <TouchableOpacity onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            </View>
        </View>
    </Modal>
    );    
};

const styles = StyleSheet.create({
overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.689)',
},
alertBox: {
    width: 350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
},
header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // borderWidth: 1,
    borderBottomWidth:1,
    borderColor: 'rgba(70, 70, 70, 0.61)',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
},
headerText: {
    fontSize: 20,
    marginLeft: 10,
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
},
alertMessageContainer: {
    marginBottom: 20,
    // backgroundColor:'rgb(239, 54, 54)',
},
alertMessage: {
    fontSize: 16,
    textAlign: 'center',
   
},
button: {
    backgroundColor: '#ffa8a8a0',
    // backgroundColor:'#E25656',
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderColor: 'rgb(255, 126, 126)',
    borderWidth: 1,
},
buttonText: {
    color: '#000000',
    fontSize: 16,
},
});

export default CustomAlert;
