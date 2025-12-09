import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MessagesScreen = () => {
  let firstMessage = "Ovo je prva poruka!";
  let secondMessage = "Ovo je druga poruka!";

  return (
    <View style={styles.container}>
      <Text style={styles.redText}>{firstMessage}</Text>
      <Text style={styles.blueText}>{secondMessage}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  redText: {
    color: "red",
    fontSize: 20,
  },
  blueText: {
    color: "blue",
    fontSize: 17,
  },
});

export default MessagesScreen;



const FruitScreen = () => {
  const fruit1 = "Apple";
  let fruit2 = "Banana";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>First fruit: {fruit1}</Text>
      <Text style={styles.text}>Second fruit: {fruit2}</Text>
    </View>
  );
};

export default FruitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});


const QuoteScreen = () => {
  const quote = "The only limit to our realization of tomorrow is our doubts of today.";
  let author = "Franklin D. Roosevelt";

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{quote}</Text>
      <Text style={styles.authorText}>— {author}</Text>
    </View>
  );
};

export default QuoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",    
  },
  quoteText: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
  },
  authorText: {
    fontSize: 18,
    color: "#555",
  },
});