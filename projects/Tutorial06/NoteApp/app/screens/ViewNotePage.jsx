// screens/ViewNotePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ViewNotePage({ route }) {
  const { note } = route.params;  // Get selected note passed through navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  content: { fontSize: 18 },
});
