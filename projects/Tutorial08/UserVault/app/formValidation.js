// UserVault App Implementation
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UserVault() {
    const [form, setForm] = useState({
        name: '',
        age: '',
        address: '',
        profilePicture: null,
        familyDetails: [{ name: '', relation: '' }],
        educationalDetails: [{ institution: '', degree: '' }],
    });
    const [submitted, setSubmitted] = useState(false);
     const [error, setError] = useState('');

    // Input Handlers
    const handleInputChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleFamilyChange = (index, field, value) => {
        const updatedFamily = [...form.familyDetails];
        updatedFamily[index][field] = value;
        setForm({ ...form, familyDetails: updatedFamily });
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...form.educationalDetails];
        updatedEducation[index][field] = value;
        setForm({ ...form, educationalDetails: updatedEducation });
    };

    // Add or Remove Family/Education Details
    const addFamilyDetail = () => {
        setForm({ ...form, familyDetails: [...form.familyDetails, { name: '', relation: '' }] });
    };

    const addEducationalDetail = () => {
        setForm({
            ...form,
            educationalDetails: [...form.educationalDetails, { institution: '', degree: '' }],
        });
    };

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setForm({ ...form, profilePicture: result.uri });
        }
    };

    // Form Validation
    const validateForm = () => {
        const { name, age, address, profilePicture, familyDetails, educationalDetails } = form;

        if (!name || /[^a-zA-Z\s]/.test(name)) {
            Alert.alert('Validation Error', 'Name is required and must contain only letters.');
            return false;
        }

        if (!age || !Number.isInteger(Number(age)) || age < 1 || age > 120) {
            Alert.alert('Validation Error', 'Age must be a positive integer between 1 and 120.');
            return false;
        }

        if (!address || address.length < 10) {
            Alert.alert('Validation Error', 'Address is required and must be at least 10 characters long.');
            return false;
        }

        if (!profilePicture) {
            Alert.alert('Validation Error', 'Please upload or select a valid profile picture.');
            return false;
        }

        if (!familyDetails.length || familyDetails.some((f) => !f.name || !f.relation)) {
            Alert.alert('Validation Error', 'Please include at least one family member with a name and relation.');
            return false;
        }

        if (!educationalDetails.length || educationalDetails.some((e) => !e.institution || !e.degree)) {
            Alert.alert('Validation Error', 'Please include at least one educational qualification.');
            return false;
        }

        return true;
    };

    // Handle Form Submission
    const handleSubmit = () => {
        if (validateForm()) {
            setSubmitted(true);
        }
    };

    // Reset Form
    const handleReset = () => {
        setForm({
            name: '',
            age: '',
            address: '',
            profilePicture: null,
            familyDetails: [{ name: '', relation: '' }],
            educationalDetails: [{ institution: '', degree: '' }],
        });
        setSubmitted(false);
    };

    // Render Form or Summary Screen
    return (
        <ScrollView style={styles.container}>
            {!submitted ? (
                <View>
                    <Text style={styles.header}>FormValidation</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={form.name}
                        onChangeText={(value) => handleInputChange('name', value)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        keyboardType="numeric"
                        value={form.age}
                        onChangeText={(value) => handleInputChange('age', value)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={form.address}
                        onChangeText={(value) => handleInputChange('address', value)}
                    />

                    <Button title="Upload Profile Picture" onPress={handleImagePicker} />
                    {form.profilePicture && (
                        <Image source={{ uri: form.profilePicture }} style={styles.image} />
                    )}

                    <Text style={styles.sectionHeader}>Family Details</Text>
                    {form.familyDetails.map((family, index) => (
                        <View key={index}>
                            <TextInput
                                style={styles.input}
                                placeholder="Name"
                                value={family.name}
                                onChangeText={(value) => handleFamilyChange(index, 'name', value)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Relation"
                                value={family.relation}
                                onChangeText={(value) => handleFamilyChange(index, 'relation', value)}
                            />
                        </View>
                    ))}
                    <Button title="Add Family Member" onPress={addFamilyDetail} />

                    <Text style={styles.sectionHeader}>Educational Details</Text>
                    {form.educationalDetails.map((edu, index) => (
                        <View key={index}>
                            <TextInput
                                style={styles.input}
                                placeholder="Institution"
                                value={edu.institution}
                                onChangeText={(value) => handleEducationChange(index, 'institution', value)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Degree"
                                value={edu.degree}
                                onChangeText={(value) => handleEducationChange(index, 'degree', value)}
                            />
                        </View>
                    ))}
                    <Button style={styles.buttonStyle} title="Add Educational Detail" onPress={addEducationalDetail} />
                    <View style={{ marginTop: 20,backgroundColor:'Green' }}>
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                </View>
            ) : (
                <View>
                    <Text style={styles.header}>Submitted Information</Text>
                    <Text>Name: {form.name}</Text>
                    <Text>Age: {form.age}</Text>
                    <Text>Address: {form.address}</Text>
                    {form.profilePicture && (
                        <Image source={{ uri: form.profilePicture }} style={styles.image} />
                    )}

                    <Text style={styles.sectionHeader}>Family Details</Text>
                    {form.familyDetails.map((family, index) => (
                        <Text key={index}>{family.name} - {family.relation}</Text>
                    ))}

                    <Text style={styles.sectionHeader}>Educational Details</Text>
                    {form.educationalDetails.map((edu, index) => (
                        <Text key={index}>{edu.institution} - {edu.degree}</Text>
                    ))}

                    <Button title="Reset" onPress={handleReset} />
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    buttonStyle: {
        backgroundColor: 'yellow',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});




// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import { Button } from 'react-native'

// import React from 'react'
// import React, { useEffect, useState } from 'react'
// import { TextInput } from 'react-native-web';




// const formValidation = () => {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [profile, setProfile] = useState('');
//     const [address, setAddress] = useState('');

//     //   family records
//     const [nameOfPerson1, setNameOfPerson1] = useState('');
//     const [nameOfPerson2, setNameOfPerson2] = useState('');
//     const [relationOfPerson1, setRelationOfPerson1] = useState('');
//     const [relationOfPerson2, setRelationOfPerson2] = useState('');

//     // education
//     const [qualification1, setQualification1] = useState('');
//     const [qualification2, setQualification2] = useState('');
//     const [year1, setYear1] = useState('');
//     const [year2, setYear2] = useState('');

//     const [errors, setErrors] = useState({});  //if you want to store object then use  {}
//     const [formStatus, setFormStatus] = useState(false);

//     useEffect(() => {

//     }, [
//         name,
//         age,
//         profile,
//         address,
//         nameOfPerson1,
//         nameOfPerson2,
//         relationOfPerson1,
//         relationOfPerson2,
//         qualification1,
//         qualification2,
//         year1,
//         year2
//     ]);

//     // arrow function
//     const validation = () => {
//         let errorObj = {};
//         if (!name) {
//             errorObj.name = "Name is required *";
//         }
//         if (!email) {
//             errorObj.email = "Email is required *";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             errorObj.email = "Email is invalid *";
//         }
//         if (!password) {
//             errorObj.password = "Password is required *";
//         } else if (password.length >= 8) {
//             errorObj.password = "Password must be atleast 8 characters *";
//         }

//         setErrors(errorObj);
//         setFormStatus(Object.keys(errorObj.length === 0));
//     }

//     const handeFormSubmission = () => {
//         if (formStatus) {
//             alert('form submission is successfull')
//         } else {
//             alert('Failed to submit the form. fix it!')
//         }
//     }


//     return (
//         <View style={styles.mainView}>
//             <Text style={styles.title1}>Form Validation</Text>
//             <View>
//                 <View style={styles.div1}>
//                     <Text style={styles.title2}>Personal Information</Text>
//                     <View style={styles.personalInfo}>
//                         <View style={styles.inputFieldView}>
//                             <label>Name</label>
//                             <TextInput style={styles.personalInfoInput} onChangeText={setName}></TextInput>
//                         </View>
//                         <View style={styles.inputFieldView}>
//                             <label>Age</label>
//                             <TextInput style={styles.personalInfoInput} onChangeText={setAge}></TextInput>
//                         </View>
//                     </View>
//                     <View style={styles.personalInfo}>
//                         <View style={styles.inputFieldView}>
//                             <label>Address</label>
//                             <TextInput style={styles.personalInfoInput} onChangeText={setAddress}></TextInput>
//                         </View>
//                         <View style={styles.inputFieldView}>
//                             <label>Profile</label>
//                             <TextInput style={styles.personalInfoInput} onChangeText={setProfile}></TextInput>
//                         </View>
//                     </View>

//                 </View>
//                 <View style={styles.div1}>
//                     <Text style={styles.title2}>Family Details</Text>
//                     <View style={styles.subDiv} >
//                         <Text style={styles.textStyle}>Details 01</Text>
//                         <View style={styles.personalInfo}>
//                             <View style={styles.inputFieldView}>
//                                 <label>Name</label>
//                                 <TextInput style={styles.inputStyle} onChangeText={setNameOfPerson1}></TextInput>
//                             </View>
//                             <View style={styles.inputFieldView}>
//                                 <label>Relation</label>
//                                 <TextInput style={styles.inputStyle} onChangeText={setRelationOfPerson1}></TextInput>
//                             </View>
//                         </View>

//                     </View>
//                     <View style={styles.subDiv} >
//                         <Text style={styles.textStyle}>Details 02</Text>
//                         <View style={styles.personalInfo}>
//                             <View style={styles.inputFieldView}>
//                                 <label>Name</label>
//                                 <TextInput style={styles.inputStyle} onChangeText={setNameOfPerson2}></TextInput>
//                             </View>
//                             <View style={styles.inputFieldView}>
//                                 <label>Relation</label>
//                                 <TextInput style={styles.inputStyle} onChangeText={setRelationOfPerson2}></TextInput>
//                             </View>
//                         </View>

//                     </View>

//                 </View>
//                 <View style={styles.div1}>
//                     <Text style={styles.title2}>Educational Details</Text>
//                     <View style={styles.subDiv} >
//                         <Text style={styles.textStyle}>Details 01</Text>
//                         <View style={styles.personalInfo}>
//                             <View style={styles.inputFieldView}>
//                                 <label>Qualification</label>
//                                 <TextInput style={styles.inputStyle}></TextInput>
//                             </View>
//                             <View style={styles.inputFieldView}>
//                                 <label>Year</label>
//                                 <TextInput style={styles.inputStyle}></TextInput>
//                             </View>
//                         </View>

//                     </View>
//                     <View style={styles.subDiv} >
//                         <Text style={styles.textStyle}>Details 02</Text>
//                         <View style={styles.personalInfo}>
//                             <View style={styles.inputFieldView}>
//                                 <label>Qualification</label>
//                                 <TextInput style={styles.inputStyle}></TextInput>
//                             </View>
//                             <View style={styles.inputFieldView}>
//                                 <label>Year</label>
//                                 <TextInput style={styles.inputStyle}></TextInput>
//                             </View>
//                         </View>

//                     </View>

//                 </View>
//             </View>
//         </View>
//     )
// }

// export default formValidation

// const styles = StyleSheet.create({
//     mainView: {
//         width: '50%',
//         height: '100%',
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 3,
//         borderColor: 'orange',
//         margin: 'auto',
//         backgroundColor: '#10375C',
//         color: 'white',
//         borderRadius: 10
//     },
//     inputStyle: {
//         width: '96%',
//         // borderWidth: 1,
//         // borderColor: 'orange',
//         paddingHorizontal: 30,
//         paddingVertical: 3,
//         gap: 2,
//         backgroundColor: '#10375C',
//         borderRadius: 5,
//         color: 'white'
//     },
//     inputFieldView: {
//         width: '50%',
//         marginVertical: 5,
//         marginHorizontal: 5

//     },
//     title1: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'orange'
//     },
//     title2: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#F3C623'
//     },
//     personalInfo: {
//         flex: 1,
//         flexDirection: 'row',
//     },
//     div1: {
//         width: '100%',
//         borderWidth: 1,
//         borderColor: 'orange',
//         paddingHorizontal: 30,
//         paddingVertical: 2,
//         marginVertical: 5,
//         borderRadius: 10,
//         backgroundColor: '#0c2a46'
//     },
//     subDiv: {
//         width: '100%',
//         borderWidth: 1,
//         borderColor: 'orange',
//         paddingHorizontal: 30,
//         paddingVertical: 2,
//         marginVertical: 5,
//         borderRadius: 10
//     },
//     textStyle: {
//         color: '#F3C623'
//     },
//     personalInfoInput: {
//         width: '100%',
//         // borderWidth: 1,
//         // borderColor: 'orange',
//         paddingHorizontal: 30,
//         paddingVertical: 3,
//         gap: 2,
//         backgroundColor: '#10375C',
//         borderRadius: 5,
//         color: 'white',
//     }
// })


