import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import NavSinBusqueda from '../../components/navSinBusqueda';
import NavBusqueda from '../../components/navBusqueda';


interface CartItemType {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

const CartItem: React.FC<{
    item: CartItemType;
    onAdd: () => void;
    onRemove: () => void;
    onDelete: () => void;
}> = ({ item, onAdd, onRemove, onDelete }) => (
<View style={styles.cartItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
    <View style={styles.actionsContainer}>
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={onAdd} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={onRemove} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
                </View>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={24} color="#666" />
            </TouchableOpacity>
        </View>
</View>
);

const Cart: React.FC = () => {
  // Datos de ejemplo, reemplaza con tus datos reales
const cartItems: CartItemType[] = [
    { id: 1, name: 'Picafresas', price: 10.00, image: 'https://loveveg.mx/app/uploads/2021/11/Mesa-de-trabajo-58-711x1024.jpg', quantity: 1 },
    { id: 2, name: 'Aciduladito', price: 20.00, image: 'https://http2.mlstatic.com/D_NQ_NP_787132-MLU73865457966_012024-O.webp', quantity: 2 },
  ];

const handleAdd = (id: number) => {
    console.log(`Agregar más del producto ${id}`);
};

const handleRemove = (id: number) => {
    console.log(`Reducir la cantidad del producto ${id}`);
};

const handleDelete = (id: number) => {
    console.log(`Eliminar producto ${id} del carrito`);
};

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

return (
<View style={styles.container}>
    
    <NavSinBusqueda/>

    <ScrollView contentContainerStyle={styles.cartContainer}>
    {cartItems.map(item => (
        <CartItem
            key={item.id}
            item={item}
            onAdd={() => handleAdd(item.id)}
            onRemove={() => handleRemove(item.id)}
            onDelete={() => handleDelete(item.id)}
        />
    ))}




    </ScrollView>
    <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceder con el Pago</Text>
        </TouchableOpacity>
    </View>


</View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Gris claro
    marginTop:30,
},
cartContainer: {
    marginTop:20,
},
cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10, // Añade padding horizontal para separar el contenido de los bordes
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
},
productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginLeft:10,
},
itemDetails: {
    flex: 1,
    marginLeft: 10,
},
productName: {
    fontSize: 16,
    color: '#333',
},
productPrice: {
    fontSize: 14,
    color: '#666',
},
actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
},
quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
quantityButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 13,
    marginHorizontal: 5,
},
quantityButtonText: {
    fontSize: 20,
    color: '#333',
},
quantityText: {
    fontSize: 16,
    color: '#1c5962',
},
deleteButton: {
    marginRight: 10,
    backgroundColor: '#ffffff', // Gris claro
    padding: 5,
    borderRadius: 5,
},
footer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
},
totalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontFamily:'Josefbold',
},
checkoutButton: {
    backgroundColor: '#ffa526', 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
},
checkoutButtonText: {
    fontSize: 16,
    color: '#000000',
    fontFamily:'Laila',
},
});

export default Cart;