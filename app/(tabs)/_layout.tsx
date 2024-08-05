import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'IndexN',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'journal' : 'journal-outline'} color={color} />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="login"
        options={{
          title: 'login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
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


    </Tabs>

    
  );
}
