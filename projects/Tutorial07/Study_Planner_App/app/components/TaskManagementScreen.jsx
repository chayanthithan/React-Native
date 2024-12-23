// const TaskManagementScreen = () => {
//   const context = useContext(TaskContext);

//   if (!context) {
//     console.error('TaskContext is undefined. Ensure TaskProvider wraps the component tree.');
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Error: TaskContext is not available.</Text>
//       </View>
//     );
//   }

//   const { tasks, addTask, completeTask } = context;

//   useEffect(() => {
//     async function fetchData() {
//       const data = await someAsyncOperation();
//       console.log(data); // Use fetched data as needed
//     }

//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Task Management</Text>
//       {tasks.map((task, index) => (
//         <View key={index} style={styles.taskItem}>
//           <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
//             {task.name}
//           </Text>
//           {!task.completed && (
//             <Button title="Complete" onPress={() => completeTask(index)} />
//           )}
//         </View>
//       ))}
//       <Button title="Add Task" onPress={() => addTask(`Task ${tasks.length + 1}`)} />
//     </View>
//   );
// };
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Add a new task
  const addTask = () => {
    if (!taskName.trim()) {
      Alert.alert('Error', 'Task name cannot be empty!');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      description: taskDescription || '',
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName('');
    setTaskDescription('');
  };

  // Open edit modal
  const openEditModal = (task) => {
    setCurrentTask(task);
    setTaskName(task.name);
    setTaskDescription(task.description);
    setIsModalVisible(true);
  };

  // Save edited task
  const saveEditedTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === currentTask.id
          ? { ...task, name: taskName, description: taskDescription }
          : task
      )
    );
    setIsModalVisible(false);
    setTaskName('');
    setTaskDescription('');
    setCurrentTask(null);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item }) => (
    <View style={[styles.task, item.completed && styles.completedTask]}>
      <View style={styles.taskInfo}>
        <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
          <Text style={styles.taskName}>
            {item.completed ? `✔️ ${item.name}` : item.name}
          </Text>
        </TouchableOpacity>
        {item.description ? (
          <Text style={styles.taskDescription}>{item.description}</Text>
        ) : null}
      </View>
      <View style={styles.taskActions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => openEditModal(item)}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() =>
            Alert.alert('Delete Task', 'Are you sure?', [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Delete', onPress: () => deleteTask(item.id) },
            ])
          }
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Task Input Form */}
      <View style={styles.inputForm}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TextInput
          style={styles.input}
          placeholder="Task Description (optional)"
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>No tasks added yet!</Text>
        }
      />

      {/* Edit Task Modal */}
      {isModalVisible && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Task</Text>
              <TextInput
                style={styles.input}
                placeholder="Task Name"
                value={taskName}
                onChangeText={setTaskName}
              />
              <TextInput
                style={styles.input}
                placeholder="Task Description (optional)"
                value={taskDescription}
                onChangeText={setTaskDescription}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={saveEditedTask}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default TaskManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputForm: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#00adf5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  completedTask: {
    backgroundColor: '#d4f7dc',
  },
  taskInfo: {
    flex: 1,
  },
  taskName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskDescription: {
    fontSize: 14,
    color: '#555',
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 10,
  },
  editButtonText: {
    color: '#007bff',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    padding: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
  emptyListText: {
    textAlign: 'center',
    color: '#999',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#00adf5',
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
  },
});
