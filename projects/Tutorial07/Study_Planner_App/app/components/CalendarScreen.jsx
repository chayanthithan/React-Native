// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Calendar, Agenda } from 'react-native-calendars';

// const CalendarScreen = () => {
//   const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'agenda'
//   const [markedDates, setMarkedDates] = useState({});
//   const [agendaItems, setAgendaItems] = useState({});

//   // Simulate fetching events from a backend
//   useEffect(() => {
//     const fetchedEvents = {
//       '2024-12-10': { dots: [{ color: 'blue' }] },
//       '2024-12-15': { dots: [{ color: 'red' }] },
//       '2024-12-20': { dots: [{ color: 'green' }] },
//     };
//     setMarkedDates(fetchedEvents);

//     const fetchedAgendaItems = {
//       '2024-12-10': [{ name: 'Math Class at 10 AM' }],
//       '2024-12-15': [{ name: 'Science Exam at 2 PM' }],
//       '2024-12-20': [{ name: 'School Trip at 8 AM' }],
//     };
//     setAgendaItems(fetchedAgendaItems);
//   }, []);

//   const renderAgendaItem = (item) => (
//     <View style={styles.agendaItem}>
//       <Text>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Toggle Buttons for Views */}
//       <View style={styles.toggleButtons}>
//         <TouchableOpacity
//           style={[styles.toggleButton, viewMode === 'calendar' && styles.activeButton]}
//           onPress={() => setViewMode('calendar')}
//         >
//           <Text style={styles.toggleButtonText}>Calendar View</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.toggleButton, viewMode === 'agenda' && styles.activeButton]}
//           onPress={() => setViewMode('agenda')}
//         >
//           <Text style={styles.toggleButtonText}>Agenda View</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Conditional Rendering */}
//       {viewMode === 'calendar' ? (
//         <Calendar
//           markedDates={markedDates}
//           onDayPress={(day) => console.log('Selected Day:', day)}
//           theme={{
//             todayTextColor: '#00adf5',
//             arrowColor: 'orange',
//           }}
//         />
//       ) : (
//         <Agenda
//           items={agendaItems}
//           renderItem={renderAgendaItem}
//           renderEmptyDate={() => (
//             <View style={styles.emptyDate}>
//               <Text>No events for this day.</Text>
//             </View>
//           )}
//           />
//         )}
//     </View>
//   );
// };
// export default CalendarScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   toggleButtons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 10,
//   },
//   toggleButton: {
//     padding: 10,
//     margin: 5,
//     borderWidth: 1,
//     borderColor: '#00adf5',
//     borderRadius: 5,
//     color: '#00adf5',
//   },
//   activeButton: {
//     backgroundColor: '#00adf5',
    
//   },
//   toggleButtonText: {
    
//   },
//   agendaItem: {
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   emptyDate: {
//     padding: 10,
//     alignItems: 'center',
//   },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

const CalendarScreen = () => {
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'agenda'
  const [markedDates, setMarkedDates] = useState({});
  const [agendaItems, setAgendaItems] = useState({});
  const [newEventDate, setNewEventDate] = useState(''); // Format: YYYY-MM-DD
  const [newEventName, setNewEventName] = useState('');

  // Add a new event
  const addEvent = () => {
    if (!newEventDate || !newEventName) {
      Alert.alert('Error', 'Please fill in both date and event name');
      return;
    }

    // Add to markedDates
    setMarkedDates((prev) => ({
      ...prev,
      [newEventDate]: { dots: [{ color: 'blue' }] }, // You can customize the color
    }));

    // Add to agendaItems
    setAgendaItems((prev) => ({
      ...prev,
      [newEventDate]: [
        ...(prev[newEventDate] || []), // Preserve existing events for the date
        { name: newEventName },
      ],
    }));

    // Clear inputs
    setNewEventDate('');
    setNewEventName('');
    Alert.alert('Success', 'Event added successfully!');
  };

  const renderAgendaItem = (item) => (
    <View style={styles.agendaItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Add Event Form */}
      <View style={styles.addEventForm}>
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={newEventDate}
          onChangeText={setNewEventDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          value={newEventName}
          onChangeText={setNewEventName}
        />
        <Button title="Add Event" onPress={addEvent} />
      </View>

      {/* Toggle Buttons for Views */}
      <View style={styles.toggleButtons}>
        <TouchableOpacity
          style={[styles.toggleButton, viewMode === 'calendar' && styles.activeButton]}
          onPress={() => setViewMode('calendar')}
        >
          <Text style={styles.toggleButtonText}>Calendar View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, viewMode === 'agenda' && styles.activeButton]}
          onPress={() => setViewMode('agenda')}
        >
          <Text style={styles.toggleButtonText}>Agenda View</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Rendering */}
      {viewMode === 'calendar' ? (
        <Calendar
          markedDates={markedDates}
          onDayPress={(day) => console.log('Selected Day:', day)}
          theme={{
            todayTextColor: '#00adf5',
            arrowColor: 'orange',
          }}
        />
      ) : (
        <Agenda
          items={agendaItems}
          renderItem={renderAgendaItem}
          renderEmptyDate={() => (
            <View style={styles.emptyDate}>
              <Text>No events for this day.</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addEventForm: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  toggleButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00adf5',
    borderRadius: 5,
    color: 'black',
  },
  activeButton: {
    backgroundColor: '#00adf5',
  },
  toggleButtonText: {
  },
  agendaItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  emptyDate: {
    padding: 10,
    alignItems: 'center',
  },
});

