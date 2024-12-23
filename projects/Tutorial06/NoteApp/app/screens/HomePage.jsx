// screens/HomePage.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { NotesContext } from '../contexts/NotesContext';

export default function HomePage({ navigation }) {
  const { users } = useContext(UserContext); // Get logged-in user data
  const { notes } = useContext(NotesContext); // Get notes data

  const renderNoteItem = ({ item }) => (
    <View style={styles.noteItem}>
      <TouchableOpacity onPress={() => navigation.navigate('ViewNote', { note: item })}>
        <Text style={styles.noteTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {users.name}!</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNote')}
      >
        <Text style={styles.addButtonText}>Add New Note</Text>
      </TouchableOpacity>

      <Text style={styles.notesHeading}>Your Notes:</Text>
      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  addButton: {
    backgroundColor: '#00adf5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  notesHeading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  noteItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noteTitle: { fontSize: 18 },
});
