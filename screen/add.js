import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { db } from "../firebaseconfig"; 
import { collection, addDoc } from "firebase/firestore";

const AddTodo = ({ navigation }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    if (!task.trim() || !time.trim() || !description.trim()) {
      alert("Semua kolom harus diisi!");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "todolist"), {
        task,
        time,
        description,
        status: "Doing", 
      });
      console.log("Document written with ID: ", docRef.id);
      setTask("");
      setTime("");
      setDescription("");
      navigation.goBack(); 
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah To-Do</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Kegiatan"
        value={task}
        onChangeText={setTask}
      />
      <TextInput
        style={styles.input}
        placeholder="Waktu"
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Keterangan"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="TAMBAH" onPress={handleAddTodo} color={"#ff3393"}/>
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
  input: {
    borderWidth: 1,
    borderColor: "#ff3393",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff1f8",
  },
});

export default AddTodo;
