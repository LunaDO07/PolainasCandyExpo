import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, Dimensions , TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBusqueda from '../../components/navBusqueda';
import { ImageSourcePropType } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Definición de la interfaz para los ítems de categoría
interface CategoryItem {
    id: string;
    name: string;
    image: ImageSourcePropType;
}

const items: CategoryItem[] = [
    { id: '1', name: 'Gomitas', image: require('../../assets/images/gomitas.jpg') },
    { id: '2', name: 'Chicles', image: require('../../assets/images/chicles.jpg') },
    { id: '3', name: 'Chocolates', image: require('../../assets/images/chocolate.jpg') },
    { id: '4', name: 'Paletas', image: require('../../assets/images/paletas.jpg') },
    { id: '5', name: 'Galletas', image: require('../../assets/images/gall2.jpg') },
    { id: '6', name: 'Botana', image: require('../../assets/images/botana2.jpg') },
    { id: '7', name: 'Bombones', image: require('../../assets/images/bombones.jpg') },
    { id: '8', name: 'Tamarindos', image: require('../../assets/images/tamarindo.jpg') },
];

const splitItemsIntoRows = (items: CategoryItem[], itemsPerRow: number) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
        rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
};

const rows = splitItemsIntoRows(items, 4);

interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
}
const products = [
    { id: '1', name: 'Producto 1', price: '$10', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 1' },
    { id: '2', name: 'Producto 2', price: '$15', image: 'https://via.placeholder.com/150',description: 'Descripción del Producto 2' },
    { id: '3', name: 'Producto 3', price: '$10', image: 'https://via.placeholder.com/150',description: 'Descripción del Producto 3' },
    { id: '4', name: 'Producto 4', price: '$15', image: 'https://via.placeholder.com/150',description: 'Descripción del Producto 4' },
    { id: '5', name: 'Producto 5', price: '$10', image: 'https://via.placeholder.com/150',description: 'Descripción del Producto 5' },
    { id: '6', name: 'Producto 6', price: '$15', image: 'https://via.placeholder.com/150',description: 'Descripción del Producto 6' },
    // Agrega más productos aquí
];


const IndexCliente: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

return (
<ScrollView style={styles.container}>

    <NavBusqueda/>
    
{/* Carrusel de imágenes */}
    <ScrollView horizontal pagingEnabled style={styles.carouselContainer}>
        <Image source={require('../../assets/images/carrucel1.webp')} style={styles.carouselImage} resizeMode="cover" />
        <Image source={require('../../assets/images/carrucel2.webp')} style={styles.carouselImage}  resizeMode="cover"/>
        <Image source={require('../../assets/images/carrucel3.jpg')} style={styles.carouselImage}resizeMode="cover"/>
    </ScrollView>

    {/* Sección de categorías */}
    <View style={styles.section}>
                <Text style={styles.sectionTitle}>Categorías de Dulces</Text>
                {rows.map((row, index) => (
                    <View key={index} style={styles.categoriesRow}>
                        {row.map(item => (
                            <View key={item.id} style={styles.categoryItem}>
                                <Image source={item.image} style={styles.categoryImage} />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                ))}
    </View>

    {/* Sección de productos */}
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos</Text>
        <ScrollView>
            <View style={styles.productsContainer}>
                {products.map(product => (
                    <TouchableOpacity 
                        key={product.id} 
                        style={styles.productItem} 
                        onPress={() => handleOpenModal(product)}
                    >
                        <Image source={{ uri: product.image }} style={styles.productImage} />
                        <Text style={styles.productText}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    </View>

    {/* Modal del producto */}
    <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                    <Ionicons name="close" size={30} color="black" />
                </TouchableOpacity>
                {selectedProduct && (
                    <>
                        <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                        <Image source={{ uri: selectedProduct.image }} style={styles.modalImage} />
                        <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
                        <Text style={styles.productDescription}>{selectedProduct.description}</Text>
                        <TouchableOpacity style={styles.addToCartButton}>
                            <Text style={styles.addToCartText}>Añadir al Carrito</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    </Modal>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFF',
},
carouselContainer: {
    height: 230,
    backgroundColor:'rgb(255, 211, 211)',
},
carouselImage: {
    width: screenWidth,
    height: 230,
    borderRadius: 10,
},
section: {
    marginTop: 20,
},
sectionTitle: {
    fontSize: 24,
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
    fontFamily:'Josefbold',

},
categoriesContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
},
categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginLeft:15,
},
column: {
    flex: 1,
},
categoryContainer: {
    flexDirection: 'row',
    marginLeft: 15,
},
categoryItem: {
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 12,
},
categoryImage: {
    width: 45,
    height: 45,
    borderRadius:20,
},
categoryText: {
    fontSize: 12,
    color: '#333',
    fontFamily:'Josefinmedium',
},
productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(255, 255, 255)',

},
productItem: {
    width: 170,
    alignItems: 'center',
    marginLeft:20,
    backgroundColor: 'rgb(255, 186, 186)',
    borderRadius: 10,
    padding: 10,
    marginBottom:45,
},
productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
},
productText: {
    fontSize: 16,
    color: '#333',
},
productPrice: {
    fontSize: 14,
    color: '#888',
},
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
},
closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding:10,
    backgroundColor:'rgba(231, 124, 255, 0.49)',
},
modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
},
modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
},
modalPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
},
addToCartButton: {
    backgroundColor: '#4eacba',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal:60,
},
addToCartText: {
    color: '#FFF',
    fontSize: 16,
},
productDescription: {
    marginVertical: 10,
    fontSize: 14,
    textAlign: 'center',
},
});

export default IndexCliente;
