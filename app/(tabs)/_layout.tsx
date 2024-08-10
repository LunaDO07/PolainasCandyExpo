import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {  Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Banner',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'journal' : 'journal-outline'} color={color} />
          ),
        }}
      />

    <Tabs.Screen
      name="login"
      options={{
        title: 'login',
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
        title: 'Admin',
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
        title: 'Categorias',
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
        title: 'datos',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} />
        ),
      }}
    />

<Tabs.Screen
      name="ticket"
      options={{
        title: 'ticket',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'ticket' : 'ticket-outline'} color={color} />
        ),
      }}
    />
  

    <Tabs.Screen
        name="tablaSucursales"
        options={{
          title: 'tablaSucursales',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'location-sharp' : 'location-outline'} color={color} size={24} />
          ),
        }}
      />

    <Tabs.Screen
        name="logs"
        options={{
          title: 'logs',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'document-text' : 'document-text-outline'} color={color} size={24} />
          ),
        }}
      />
    
      
      {/* Nuevo ícono para la tabla de productos */}
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
