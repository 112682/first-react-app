import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(USERS_URL)
      .then(response => response.json())
      .then(data => setUsers(data.slice(0, 10)))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  email: {
    color: "#555",
  },
});

export default UsersScreen;
