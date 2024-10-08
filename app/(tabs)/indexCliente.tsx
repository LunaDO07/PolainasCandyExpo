import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, Alert, Dimensions , TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBusqueda from '../../components/navBusqueda';
import { ImageSourcePropType } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
    { id: '3', name: 'Chocolate', image: require('../../assets/images/chocolate.jpg') },
    { id: '4', name: 'Paletas', image: require('../../assets/images/paletas.jpg') },
    { id: '5', name: 'Galletas', image: require('../../assets/images/gall2.jpg') },
    { id: '6', name: 'Botana', image: require('../../assets/images/botana2.jpg') },
    { id: '7', name: 'Bombon', image: require('../../assets/images/bombones.jpg') },
    { id: '8', name: 'Tamarindo', image: require('../../assets/images/tamarindo.jpg') },
];

const splitItemsIntoRows = (items: CategoryItem[], itemsPerRow: number) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
        rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
};

const rows = splitItemsIntoRows(items, 4);

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    };



const IndexCliente: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const products: Product[] = [
        { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 1' },
        { id: 2, name: 'Producto 2', price: '$15.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 2' },
        { id: 3, name: 'Producto 3', price: '$12.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 3' },
        { id: 4, name: 'Producto 4', price: '$18.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 4' },
        // Agrega más productos aquí
    ];
    
    
    const handleProductPress = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    
    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = () => {
        // Cierra el modal
        closeModal();
        // Muestra un mensaje de éxito
        Alert.alert('Producto añadido', ' El Producto se añadio al carrito de compras');
    };

return (
    <View style={styles.container}>
        <NavBusqueda/>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
    
{/* Carrusel de imágenes */}
    <ScrollView horizontal pagingEnabled style={styles.carouselContainer}>
        <Image source={require('../../assets/images/carrucel1.webp')} style={styles.carouselImage} resizeMode="cover" />
        <Image source={require('../../assets/images/carrucel2.webp')} style={styles.carouselImage}  resizeMode="cover"/>
        <Image source={require('../../assets/images/carrucel3.jpg')} style={styles.carouselImage}resizeMode="cover"/>
    </ScrollView>


    {/* Sección de categorías */}
    <View style={styles.section}>
        
    <View style={{flexDirection:'row'}}>
        <View style={styles.marker} /> 
        <Text style={styles.sectionTitle}>Categorías de Dulces</Text>
    </View>
            
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
    <Text style={styles.sectionTitle2}>Productos</Text>
    <View style={styles.productRow}>
        {products.map((product: Product) => (
            <TouchableOpacity key={product.id} style={styles.productCard} onPress={() => handleProductPress(product)}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
        ))}
        </View>

    {/* Modal para mostrar detalles del producto */}
    <Modal visible={!!selectedProduct} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            {/* Botón de cierre con ícono */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
            {selectedProduct && (
            <>
                <Text style={styles.productName}>{selectedProduct.name}</Text>
                <Image source={{ uri: selectedProduct.image }} style={styles.modalProductImage} />
                <Text style={styles.productDescription}>{selectedProduct.description}</Text>
                <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                <TouchableOpacity style={styles.addButton}  onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>Añadir al carrito</Text>
                    <FontAwesome name="shopping-cart" size={30} color="#FFF" />
                </TouchableOpacity>
            </>
            )}
        </View>
        </View>
    </Modal>
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
},
scrollContainer: {
    paddingTop: 70, // Espacio para el NavBusqueda
},
carouselContainer: {
    marginTop:30,
    height: 190,
    backgroundColor:'rgb(255, 211, 211)',
},
carouselImage: {
    width: screenWidth,
    height: 220,
    borderRadius: 10,
},
section: {
    marginTop: 10,
    marginBottom:5,
},
sectionTitle: {
    fontSize: 24,
    marginBottom: 25,
    color: '#333',
    textAlign: 'center',
    fontFamily:'Josefbold',
    backgroundColor:'rgb(255, 255, 255)',
    paddingRight:70,
    paddingLeft:15,
    borderColor:'rgb(113, 113, 113)',
},
marker: {
    width: 50,
    height: 35,
    backgroundColor: '#1caca8',
    position: 'relative',
    marginVertical:9,
},
sectionTitle2: {
    fontSize: 24,
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
    fontFamily:'Josefbold',
    backgroundColor:'rgba(221, 189, 222, 0.69)',
    borderBottomWidth:9,
    borderColor:'rgba(214, 128, 215, 0.5)',
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
    fontSize: 13,
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
productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
},
productCard: {
    width: '40%',
    marginVertical: 16,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,    
    backgroundColor: '#ffffff',
    borderColor: 'gray',
},
productImage: {
    width: 100,
    height: 90,
    borderRadius: 8,
},
productName: {
    fontSize: 15,
    marginVertical: 5,
    fontFamily:'Josefinmedium',
},
productPrice: {
    fontSize: 17,
    color: '#106680',
    fontFamily:'Josefbold',
},
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    position: 'relative',
},
closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding:10,
    backgroundColor:'rgba(231, 124, 255, 0.49)',
},
modalProductImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
},
productDescription: {
    marginVertical: 10,
    fontSize: 14,
    fontFamily:'Josefinreg',
    textAlign: 'center',
},
addButton: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#4eacba',
    padding: 10,
    paddingHorizontal:30,
},
addButtonText: {
    fontSize:16,
    color: '#fff',
    fontFamily:'Josefinreg',
    marginRight:20,
},
});

export default IndexCliente;
