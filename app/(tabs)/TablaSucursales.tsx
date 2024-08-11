import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, ScrollView, TouchableOpacity, StatusBar, Modal, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { NavAdmn } from '../../components/NavAdmn';

const { width } = Dimensions.get('window');

const initialData = [
{ id: '1', calle: 'Av... Reforma', numero: '123', colonia: 'Centro', localidad: 'CDMX', municipio: 'Benito Juárez', codigoPostal: '06700' },
{ id: '2', calle: 'Paseo de la Reforma', numero: '456', colonia: 'Juárez', localidad: 'CDMX', municipio: 'Cuauhtémoc', codigoPostal: '06600' },
{ id: '3', calle: 'Calle 5', numero: '789', colonia: 'Santa Fe', localidad: 'CDMX', municipio: 'Miguel Hidalgo', codigoPostal: '05300' },
{ id: '4', calle: 'Avenida Insurgentes', numero: '101', colonia: 'Roma', localidad: 'CDMX', municipio: 'Cuauhtémoc', codigoPostal: '06700' },
{ id: '5', calle: 'Calle 10', numero: '202', colonia: 'Polanco', localidad: 'CDMX', municipio: 'Miguel Hidalgo', codigoPostal: '11560' },
{ id: '6', calle: 'Boulevard Ávila Camacho', numero: '303', colonia: 'Lomas', localidad: 'CDMX', municipio: 'Lomas de Chapultepec', codigoPostal: '11000' },
];

const TablaSucursales: React.FC = () => {
const [data, setData] = useState(initialData);
const [modalVisible, setModalVisible] = useState(false);
const [addModalVisible, setAddModalVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);
const [newItem, setNewItem] = useState({
    calle: '',
    numero: '',
    colonia: '',
    localidad: '',
    municipio: '',
    codigoPostal: '',
});

const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
};

const handleEdit = (item: typeof initialData[0]) => {
    setSelectedItem(item);
    setModalVisible(true);
};

const handleSave = () => {
    const updatedData = data.map(item => item.id === selectedItem.id ? selectedItem : item);
    setData(updatedData);
    setModalVisible(false);
};

const handleAddProduct = () => {
    const newId = (data.length + 1).toString();
    const newData = { ...newItem, id: newId };
    setData([...data, newData]);
    setAddModalVisible(false);
    setNewItem({
    calle: '',
    numero: '',
    colonia: '',
    localidad: '',
    municipio: '',
    codigoPostal: '',
    });
};

const renderItem = ({ item }: { item: typeof initialData[0] }) => (
    <View style={styles.row}>
    <Text style={[styles.cell, styles.tableColumnCalle]}>{item.calle}</Text>
    <Text style={[styles.cell, styles.tableColumnNumero]}>{item.numero}</Text>
    <Text style={[styles.cell, styles.tableColumnColonia]}>{item.colonia}</Text>
    <Text style={[styles.cell, styles.tableColumnLocalidad]}>{item.localidad}</Text>
    <Text style={[styles.cell, styles.tableColumnMunicipio]}>{item.municipio}</Text>
    <Text style={[styles.cell, styles.tableColumnCodigoPostal]}>{item.codigoPostal}</Text>
    <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionButton}>
        <FontAwesome name="edit" size={24} color="#91918F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionButton}>
        <Ionicons name="trash" size={24} color="#5D6363" />
        </TouchableOpacity>
    </View>
    </View>
);

return (
    <View style={styles.container}>
    {/* Navbar superior */}
        <NavAdmn/>

    <View style={styles.tableHeaderNavbar}>
        <Text style={styles.tableHeaderNavbarTitle}>Lista de Sucursales</Text>
    </View>

    <View style={styles.addButtonWrapper}>
        <TouchableOpacity onPress={() => setAddModalVisible(true)} style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
        <Text style={styles.addButtonText}>Agregar Sucursal</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.tableWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.table}>
            <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.tableColumnCalle]}>Calle</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnNumero]}>Número</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnColonia]}>Colonia</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnLocalidad]}>Localidad</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnMunicipio]}>Municipio</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnCodigoPostal]}>Código Postal</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnAcciones]}>Acciones</Text>
            </View>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
        </ScrollView>
    </View>

    {/* Modal para editar */}
    <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Sucursal</Text>
            <TextInput
            style={styles.modalInput}
            placeholder="Calle"
            value={selectedItem?.calle}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, calle: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Número"
            value={selectedItem?.numero}
            keyboardType="numeric" 
            onChangeText={(text) => setSelectedItem({ ...selectedItem, numero: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Colonia"
            value={selectedItem?.colonia}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, colonia: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Localidad"
            value={selectedItem?.localidad}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, localidad: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Municipio"
            value={selectedItem?.municipio}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, municipio: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Código Postal"
            keyboardType="numeric" 
            value={selectedItem?.codigoPostal}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, codigoPostal: text })}
            />
            <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleSave} style={[styles.modalButton, styles.saveButton]}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.modalButton, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </Modal>

    {/* Modal para agregar */}
    <Modal
        visible={addModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setAddModalVisible(false)}
    >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar Nueva Sucursal</Text>
            <TextInput
            style={styles.modalInput}
            placeholder="Calle"
            value={newItem.calle}
            onChangeText={(text) => setNewItem({ ...newItem, calle: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Número"
            keyboardType="numeric" 
            value={newItem.numero}
            onChangeText={(text) => setNewItem({ ...newItem, numero: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Colonia"
            value={newItem.colonia}
            onChangeText={(text) => setNewItem({ ...newItem, colonia: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Localidad"
            value={newItem.localidad}
            onChangeText={(text) => setNewItem({ ...newItem, localidad: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Municipio"
            value={newItem.municipio}
            onChangeText={(text) => setNewItem({ ...newItem, municipio: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Código Postal"
            keyboardType="numeric" 
            value={newItem.codigoPostal}
            onChangeText={(text) => setNewItem({ ...newItem, codigoPostal: text })}
            />
            <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleAddProduct} style={[styles.modalButton, styles.saveButton]}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAddModalVisible(false)} style={[styles.modalButton, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </Modal>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: '#F4F4F4',
},
tableHeaderNavbar: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingVertical: 10,
    paddingHorizontal: 20,
},

tableHeaderNavbarTitle: {
    fontSize: 16,
    color: '#000000',
    fontFamily:'Lailasemi',
    textAlign:'center',
},
addButtonWrapper: {
    padding: 10,
    alignItems: 'center',
},
addButton: {
    backgroundColor: '#15879e', 
    padding: 13,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
},

addButtonText: {
    color: '#FFF',
    marginLeft: 10,
    fontFamily:'Josefbold',
    fontSize:15,
},
tableWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
},
table: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: width * 1.5,
},
tableHeader: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    width: width * 1.5,
    backgroundColor: 'rgba(62, 193, 202, 0.84)',
    
},
tableHeaderText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    flex: 1,
    minWidth: 80,
    fontFamily:'Lailabold',
},
tableColumnCalle: {
    flex: 4,
},
tableColumnNumero: {
    flex: 3,
},
tableColumnColonia: {
    flex: 4,
},
tableColumnLocalidad: {
    flex: 4,
},
tableColumnMunicipio: {
    flex: 6,
},
tableColumnCodigoPostal: {
    flex: 4,
},
tableColumnAcciones: {
    flex: 4,
},
row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFF',
    width: width * 1.5,
    
},
cell: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 11,
    color: '#333',
    minWidth: 80,
    fontFamily:'Laila',
},
actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
},
actionButton: {
    padding: 8,
},
modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)', // Prueba con un fondo más claro
},
modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
},
modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily:'Lailabold'
},
modalInput: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily:'Laila'
},
modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius:20,
},
saveButton: {
    backgroundColor: '#15879e', // Mismo color que el botón de agregar
},
cancelButton: {
    backgroundColor: '#454545',
},
buttonText: {
    color:'rgb(255, 255, 255)',
    fontFamily:'Josefbold',
    fontSize:15,
},
});

export default TablaSucursales;