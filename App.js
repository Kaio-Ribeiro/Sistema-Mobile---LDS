import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'rgb(255,255,255)',    
	  alignItems: 'center',    
  },
  sideBarTop: {    
    width: '100%',
    backgroundColor: 'rgb(192,204,218)',
    paddingVertical:15,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 14,
    fontFamily: "arial",
    fontWeight: 'bold',
    color: "#fff",
  },
  inputs: {      
    width: '90%',
    fontSize: 15,
    fontFamily:'arial',
    marginVertical: 25,
    paddingVertical:5,
    border: 'solid',
    borderRadius: 5,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',    
    borderBottomColor: "rgb(240,243,246)",
    fontWeight: 'bold',
    color: 'rgb(71,82,94)',
   },   
   btn: {
     width: "90%", 
     margin: 10,
   },
})

const login = () => {
    const handlePress = () => false
    return (
      <View style={styles.container}>
        <View style={styles.sideBarTop}>
          <Text style={{color: '#fff',fontSize: 16}}>Login to your app</Text>
        </View>
        <TextInput placeholder="Login" style={styles.inputs}></TextInput>
        <TextInput placeholder="Senha" style={styles.inputs}></TextInput>
        <View style={styles.btn}>
          <Button           
            color='rgb(71,82,94)'
            title={"LOGIN"}
            onPress={() => {
              //Chama componente
            }}
          />
        </View>
      </View>
    );
}

const dashboard = () => {
    return (
      <View style={styles.container}>
        <View style={styles.sideBarTop}>
          Login to your app
        </View>
        <View style={styles.btn}>
          <Button           
            color='rgb(71,82,94)'
            title={"LOGIN COMO VENDEDOR"}
            onPress={() => {
              //Chama componente
            }}
          />
        </View>
      </View>
    ) 
}

export default login;
