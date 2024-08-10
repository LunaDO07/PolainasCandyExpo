import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

// Datos de ejemplo
const data = [
  { id: '1', calle: 'Av. Reforma', numero: '123', colonia: 'Centro', localidad: 'CDMX', municipio: 'Benito Juárez', codigoPostal: '06700' },
  { id: '2', calle: 'Paseo de la Reforma', numero: '456', colonia: 'Juárez', localidad: 'CDMX', municipio: 'Cuauhtémoc', codigoPostal: '06600' },
  { id: '3', calle: 'Calle 5', numero: '789', colonia: 'Santa Fe', localidad: 'CDMX', municipio: 'Miguel Hidalgo', codigoPostal: '05300' },
  { id: '4', calle: 'Avenida Insurgentes', numero: '101', colonia: 'Roma', localidad: 'CDMX', municipio: 'Cuauhtémoc', codigoPostal: '06700' },
  { id: '5', calle: 'Calle 10', numero: '202', colonia: 'Polanco', localidad: 'CDMX', municipio: 'Miguel Hidalgo', codigoPostal: '11560' },
  { id: '6', calle: 'Boulevard Ávila Camacho', numero: '303', colonia: 'Lomas', localidad: 'CDMX', municipio: 'Lomas de Chapultepec', codigoPostal: '11000' },
];

const TablaSucursales: React.FC = () => {
  const handleDelete = (id: string) => {
    console.log('Eliminar registro con ID:', id);
  };

  const handleEdit = (id: string) => {
    console.log('Modificar registro con ID:', id);
  };

  // Renderiza cada fila de la tabla
  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.calle}</Text>
      <Text style={styles.cell}>{item.numero}</Text>
      <Text style={styles.cell}>{item.colonia}</Text>
      <Text style={styles.cell}>{item.localidad}</Text>
      <Text style={styles.cell}>{item.municipio}</Text>
      <Text style={styles.cell}>{item.codigoPostal}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item.id)} style={styles.actionButton}>
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
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Polainas Candys - Sucursales</Text>
      </View>

      {/* Encabezado de la tabla como Navbar */}
      <View style={styles.tableHeaderNavbar}>
        <Text style={styles.tableHeaderNavbarTitle}>Lista de Sucursales</Text>
      </View>

      {/* Tabla de Sucursales */}
      <View style={styles.tableWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.table}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, styles.tableColumnCalle]}>Calle</Text>
              <Text style={[styles.tableHeaderText, styles.tableColumnNumero]}>Número</Text>
              <Text style={[styles.tableHeaderText, styles.tableColumnColonia]}>Colonia</Text>
              <Text style={[styles.tableHeaderText, styles.tableColumnLocalidad]}>Localidad</Text>
              <Text style={[styles.tableHeaderText, styles.tableColumnMunicipio]}>Municipio</Text>
              <Text style={[styles.tableHeaderText, styles.tableColumnCodigoPostal]}>Código Postal</Text>
              <Text style={[styles.tableHeaderText, styles.tableColumnAcciones]}>Acciones</Text>
            </View>
            {/* Lista de registros */}
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: StatusBar.currentHeight || 0,
  },
  navbar: {
    backgroundColor: '#232F3E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  tableHeaderNavbar: {
    backgroundColor: '#232F3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
  },
  tableHeaderNavbarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
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
    backgroundColor: '#E5E5E5',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    width: width * 1.5, 
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
    minWidth: 80, 
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
    fontSize: 12,
    color: '#333',
    minWidth: 80, 
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
});

export default TablaSucursales;