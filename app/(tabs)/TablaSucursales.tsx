import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, StatusBar, Modal, TextInput, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { NavAdmn } from '../../components/NavAdmn';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');

const initialData = [
    { id: '1', nombre: 'Sucursal 1', telefono: '1234567890', tipo: 'Tienda', calle: 'Av... Reforma', numero: '123', colonia: 'Centro', localidad: 'CDMX', municipio: 'Benito Juárez', codigoPostal: '06700' },
    { id: '2', nombre: 'Sucursal 2', telefono: '0987654321', tipo: 'Oficina', calle: 'Paseo de la Reforma', numero: '456', colonia: 'Juárez', localidad: 'CDMX', municipio: 'Cuauhtémoc', codigoPostal: '06600' },
    // Otros datos...
];

const TablaSucursales: React.FC = () => {
    const [data, setData] = useState(initialData);
    const [modalVisible, setModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [newItem, setNewItem] = useState({
        nombre: '',
        telefono: '',
        tipo: '',
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
            nombre: '',
            telefono: '',
            tipo: '',
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
            <Text style={[styles.cell, styles.tableColumnNombre]}>{item.nombre}</Text>
            <Text style={[styles.cell, styles.tableColumnTelefono]}>{item.telefono}</Text>
            <Text style={[styles.cell, styles.tableColumnTipo]}>{item.tipo}</Text>
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
    <NavAdmn />

    <View style={styles.tableHeaderNavbar}>
        <Text style={styles.tableHeaderNavbarTitle}>Lista de Sucursales</Text>
    </View>

    <View style={styles.addButtonWrapper}>
        <TouchableOpacity onPress={() => setAddModalVisible(true)} style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={24} color="#FFF" />
            <Text style={styles.addButtonText}>Agregar Sucursal</Text>
        </TouchableOpacity>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.tableWrapper}>
            <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderText, styles.tableColumnNombre]}>Nombre</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnTelefono]}>Teléfono</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnTipo]}>Tipo</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnCalle]}>Calle</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnNumero]}>Número</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnColonia]}>Colonia</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnLocalidad]}>Localidad</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnMunicipio]}>Municipio</Text>
                <Text style={[styles.tableHeaderText, styles.tableColumnCodigoPostal]}>C.P</Text>
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
                placeholder="Nombre"
                value={selectedItem?.nombre}
                onChangeText={(text) => setSelectedItem({ ...selectedItem, nombre: text })}
            />
            <TextInput
                style={styles.modalInput}
                placeholder="Teléfono"
                value={selectedItem?.telefono}
                keyboardType="phone-pad"
                onChangeText={(text) => setSelectedItem({ ...selectedItem, telefono: text })}
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedItem?.tipo}
                    onValueChange={(itemValue) => setSelectedItem({ ...selectedItem, tipo: itemValue })}
                > 
                    <Picker.Item label="Tipo" value="" />
                    <Picker.Item label="Matiz" value="Matiz" />
                    <Picker.Item label="Sucursal" value="Sucursal" />
                </Picker>
            </View>
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
                maxLength={10}
                onChangeText={(text) => setSelectedItem({ ...selectedItem, numero: text.slice(0, 10) })}
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
                value={selectedItem?.codigoPostal}
                keyboardType="numeric"
                maxLength={4} // Restringe la longitud máxima del campo a 4 caracteres
                onChangeText={(text) => setSelectedItem({ ...selectedItem, codigoPostal: text.slice(0, 4) })}
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
            <Text style={styles.modalTitle}>Agregar Sucursal</Text>
            <TextInput
                style={styles.modalInput}
                placeholder="Nombre"
                value={newItem.nombre}
                onChangeText={(text) => setNewItem({ ...newItem, nombre: text })}
            />
            <TextInput
                style={styles.modalInput}
                placeholder="Teléfono"
                value={newItem.telefono}
                keyboardType="phone-pad"
                onChangeText={(text) => setNewItem({ ...newItem, telefono: text })}
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={newItem.tipo}
                    onValueChange={(itemValue) => setNewItem({ ...newItem, tipo: itemValue })}
                > 
                    <Picker.Item label="Tipo" value="" />
                    <Picker.Item label="Matiz" value="Matiz" />
                    <Picker.Item label="Sucursal" value="Sucursal" />
                </Picker>
            </View>
            <TextInput
                style={styles.modalInput}
                placeholder="Calle"
                value={newItem.calle}
                onChangeText={(text) => setNewItem({ ...newItem, calle: text })}
            />
            <TextInput
                style={styles.modalInput}
                placeholder="Número"
                value={newItem.numero}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) => setSelectedItem({ ...selectedItem, numero: text ? parseFloat(text).toString() : '' })}
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
                value={newItem.codigoPostal}
                keyboardType="numeric"
                maxLength={4}
                onChangeText={(text) => setNewItem({ ...newItem, codigoPostal: text })}
            />
            <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleAddProduct} style={[styles.modalButton, styles.saveButton]}>
                    <Text style={styles.buttonText}>Guardar</Text>
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
        backgroundColor: '#F4F4F4',
        paddingTop: StatusBar.currentHeight || 0,
    },
    tableWrapper: {
        marginTop: 20,
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
    },
    tableHeader: {
        flexDirection: 'row',
    backgroundColor: '#b9b9b9',
    paddingVertical: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    },
    tableHeaderText: {
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        flex: 1,
        minWidth: 80,
        fontFamily:'Lailabold',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        backgroundColor: '#FFF',
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
    tableColumnNombre: {
        flex:1,
    },
    tableColumnTelefono: {
        flex:1,
    },
    tableColumnTipo: {
        flex:1,
    },
    tableColumnCalle: {
        flex:3,
    },
    tableColumnNumero: {
        flex:1,
    },
    tableColumnColonia: {
        flex:3,
    },
    tableColumnLocalidad: {
        flex:2,
    },
    tableColumnMunicipio: {
        flex:1,
    },
    tableColumnCodigoPostal: {
        flex:1,
    },
    tableColumnAcciones: {
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actions: {
        flexDirection: 'row',
    },
    actionButton: {
        marginHorizontal: 10,
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
        paddingHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#1d9494', 
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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
        justifyContent: 'space-around',
        marginTop: 20,
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
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
scrollView: {
    flex: 1,
},
pickerContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    overflow: 'hidden',
},
});

export default TablaSucursales;
