import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity  } from 'react-native';

const ButtonScreen = () => {
    let brojac = 0;
  return (
    <View>
      <Text style={styles.textStyle}>ButtonScreen</Text>
      <Button
      title="Press Me"
      color="purple"
      onPress={()=>console.log('Button Pressed!', brojac++)}
        />
        <TouchableOpacity
        style={styles.touchableButton}
        onPress={() => console.log('TouchableOpacity klliknut ', brojac++)} 
    >
        <Text style={styles.btnText}>Clikabilni text element</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10
  },
  touchableButton:{
    backgroundColorL:"purple",
    marginVertical:15,
    borderRadius:10,
    marginHorizontal:20,
    paddingVertical:20,
  },
    btnText:{
        color:'white',
        textAlign:'center',
        fontSize:25,
    }
});

export default ButtonScreen;