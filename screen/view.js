import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { db } from "../firebaseconfig"; 
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const ViewTodo = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todolist"));
      const todoList = [];
      querySnapshot.forEach((doc) => {
        todoList.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todoList);
    } catch (e) {
      console.error("Error fetching todos: ", e);
    }
  };

  useEffect(() => {
    fetchTodos(); 
  }, []);

  const handleMarkAsDone = async (id) => {
    try {
      const todoRef = doc(db, "todolist", id);
      await updateDoc(todoRef, { status: "Done" });
      fetchTodos(); 
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      {}
      <Button
        title="TAMBAH TO-DO"
        onPress={() => navigation.navigate("AddTodo", { refreshTodos: fetchTodos })} color={"#ff3393"} 
      />
      <ScrollView style={styles.list}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.card}>
            <Text style={styles.task}>{todo.task}</Text>
            <Text>Waktu: {todo.time}</Text>
            <Text>Keterangan: {todo.description}</Text>
            <Text>Status: {todo.status}</Text>
            {todo.status === "Doing" && (
              <Button
                title="MARK AS DONE"
                onPress={() => handleMarkAsDone(todo.id)}
                color={"#2721d9"}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff1f8",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop:50,
  },
  list: {
    marginTop: 16,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginBottom: 12,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor:"#ffe8f4"
  },
  task: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ViewTodo;
