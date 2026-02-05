import React from "react";
import { Text, styles, View, FlatList } from "react-native";

// JSX - Next Generation JavaScript

//const Excer cisesScreen = () => {
  // Deklaracija varijable koristeći let
  //let message = "Hi there!";

  //dodijela

  //return <Text>{message}</Text>;
// };

//const styles = StyleSheet.create({
//  bigText: {
//    fontSize: 24,
//  },
//});
//export default Excer cisesScreen;
//

//import React from 'react';
//import { View, Text, StyleSheet } from 'react-native';




const hobbies = [
  { id: "1", name: "Football" },
  { id: "2", name: "Gaming" },
  { id: "3", name: "Drawing" },
  { id: "4", name: "Reading" },
  { id: "5", name: "Music" },
  { id: "6", name: "Photography" },
  { id: "7", name: "Traveling" },
  { id: "8", name: "Writing" }
];

const ListScreen = () => {
  const firstName = "John";
  const surname = "Doe";
  let birthday = "15 March 2002";
  const course = "Computer Science";


  const fullName = `${firstName} ${surname}`;

 
  return (
    <View>
      <Text style={styles.title}>Student Information</Text>

      <Text style={styles.text}>Full Name: {fullName}</Text>
      <Text style={styles.text}>Birthday: {birthday}</Text>
      <Text style={styles.text}>Course: {course}</Text>
      <Text>List of Hobbies</Text>

      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name}
            </Text>
          );
        }}
      />
    </View>
  );
};
  
export default ListScreen;