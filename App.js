import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <View style={styles.sideBarTop}>
          Login to your app
        </View>
        <TextInput placeholder="Login" style={styles.inputs}></TextInput>
        <TextInput placeholder="Senha" style={styles.inputs}></TextInput>
        <Button           
          color='rgb(71,82,94)'
          title={"LOGIN COMO VENDEDOR"}
          onPress={() => {
            //Chama componente
          }}
        />
        <Button           
          color='rgb(71,82,94)'
          title={"LOGIN COMO ADMINISTRADOR"}
          onPress={() => {
            //Chama componente
          }}
        />
        <Button           
          color='rgb(132,146,166)'
          title={"LOGIN COMO CLIENTE"}
          onPress={() => {
            //Chama componente
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'rgb(255,255,255)',
    justifyContent: 'center',
	  alignItems: 'center',
  },
  sideBarTop: {    
    width: '100%',
    backgroundColor: 'rgb(192,204,218)',
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: "arial",
    fontWeight: 600,
    color: "#fff"
  },
  inputs: {      
    width: '90%',
    fontSize: 13,
    fontFamily:'arial',
    marginTop: 30,
    paddingTop: 5,
    paddingBottom: 5,
    border: 'solid',
    borderRadius: 5,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',    
    borderBottomColor: "rgb(240,243,246)",
    fontWeight: 'bold',
    color: 'rgb(71,82,94)'
   },   
})

export default SectionListBasics;