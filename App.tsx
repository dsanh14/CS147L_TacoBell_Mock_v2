import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItemCard from './components/MenuItemCard';
import { menuItem } from './data/menuItems';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.nav}>
        <Ionicons name="chevron-back" size={26} color="#241B28" />
        <Text style={styles.brand}>TACO BELL</Text>
        <Ionicons name="heart-outline" size={26} color="#241B28" />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <MenuItemCard item={menuItem} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  nav: {
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  brand: { fontSize: 22, fontWeight: '900', color: '#5B2195' },
  content: { paddingHorizontal: 16, paddingTop: 18, paddingBottom: 28 },
});
