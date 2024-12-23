// screens/AddNotePage.js
import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { NotesContext } from '../contexts/NotesContext';
import { UserContext } from '../contexts/UserContext';
import uuid from 'react-native-uuid';

export default function AddNotePage({ navigation }) {
  const { notes, setNotes } = useContext(NotesContext);
  const { users } = useContext(UserContext); // Get logged-in user data
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    if (title && content) {
      const newNote = {
        id: uuid.v4(),  // Generate a unique ID for the note
        title,
        content,
        userId: users.id, // Associate note with the logged-in user
      };
      setNotes([...notes, newNote]);
      navigation.goBack(); // Go back to the home page after saving
    } else {
      Alert.alert('Error', 'Please fill in both title and content.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Note</Text>

      <TextInput
        style={styles.input}
        placeholder="Note Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Note Content"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    minHeight: 50,
  },
  saveButton: {
    backgroundColor: '#00adf5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: { color: '#fff', fontWeight: 'bold' },
});
