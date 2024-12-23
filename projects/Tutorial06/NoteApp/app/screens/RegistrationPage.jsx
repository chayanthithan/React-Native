import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { UserContext } from '../contexts/UserContext';

export default function RegistrationPage({ navigation }) {
  const { users, setUsers } = useContext(UserContext);
  const [form, setForm] = useState({
    name: '',
    regNo: '',
    indexNo: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    regNo: '',
    indexNo: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (key, value) => setForm({ ...form, [key]: value });

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.regNo) newErrors.regNo = 'Registration number is required';
    if (!form.indexNo) newErrors.indexNo = 'Index number is required';
    if (!form.username) newErrors.username = 'Username is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      setUsers([...users, { ...form }]);
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {['name', 'regNo', 'indexNo', 'username', 'email', 'password', 'confirmPassword'].map((field) => (
        <View key={field}>
          <TextInput
            style={styles.input}
            placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
            secureTextEntry={['password', 'confirmPassword'].includes(field)}
            value={form[field]}
            onChangeText={(text) => handleInputChange(field, text)}
          />
          {errors[field] && <Text style={styles.errorText}>{errors[field]}</Text>}
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
