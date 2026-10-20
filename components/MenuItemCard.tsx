import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { MenuItem } from '../data/menuItems';

type Props = { item: MenuItem };

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
      {/* TODO 1: Restaurant header. Make a horizontal row with:
          logo; vertically stacked restaurant name and cuisine/distance;
          right-facing chevron icon. */}

      {/* TODO 2: Main food image with rounded corners. */}

      {/* TODO 3: Food title and description, using item fields. */}

      {/* TODO 4: Information row with three equal-width groups:
          calories, formatted price, protein. Each group has an icon,
          a value, and a small label. */}

      {/* TODO 5: Bottom row with two Pressable buttons:
          'Customize' (outlined) and 'Add to Order' (purple).
          They do NOT need to respond to taps. */}

      <Text style={styles.placeholder}>Replace this placeholder with your card!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 12,
    // TODO: Add more card styles if needed.
  },
  placeholder: { textAlign: 'center', padding: 24, color: '#777777' },
  // TODO: Create your own StyleSheet entries here.
});
