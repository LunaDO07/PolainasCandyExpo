import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const hiddenScreens = ["login","categorias",]; 
  // Al terminar DESCOMENTAR ESTAS LINEA

  // const hiddenScreens = ["login,"index","registro","sucursales","indexCliente",
  // "categorias","cart","datosUser","ticket","tablaSucursales","logs","tablaProductos"]; 

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // Ocultar las pestañas en las pantallas específicas
        tabBarStyle: hiddenScreens.includes(route.name) ? { display: 'none' } : {},
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'NOir',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'journal' : 'journal-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle-sharp' : 'person-circle-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="registro"
        options={{
          title: 'Registro',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-add' : 'person-add-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sucursales"
        options={{
          title: 'Admn',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'storefront' : 'storefront-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="indexCliente"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categorias"
        options={{
          title: 'Categorías',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart-half' : 'heart-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="datosUser"
        options={{
          title: 'Datos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ticket"
        options={{
          title: 'Ticket',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ticket' : 'ticket-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tablaSucursales"
        options={{
          title: 'Tabla Sucursales',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="logs"
        options={{
          title: 'Logs',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'document-text' : 'document-text-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="tablaProductos"
        options={{
          title: 'Productos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'storefront' : 'storefront-outline'} color={color} size={24} />
          ),
        }}
      />

    </Tabs>
  );
}
