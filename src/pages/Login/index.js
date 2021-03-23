import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from  '@react-native-community/async-storage';


import logoImg from '../../assets/logo.png'
import api from '../../services/api'
import styles from './styles'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picker, setPicker] = useState('');

    const navigation = useNavigation()

    async function handleLogin() {
        const data = {email, password}


        try {
            const response = await api.post('/sessionAdmin', data)
            console.log(response.data)

            await AsyncStorage.setItem('adminID', JSON.stringify(response.data));
            
            navigation.navigate('Salesman_Listing')

        } catch (err) {
            alert("'Falha no login, tente novamente.")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
            </View>

            <Text style={styles.title}>Faça seu Login</Text>

            <Text style={styles.inputTitle}>E-mail:</Text>

            <TextInput 
                style={styles.input}
                placeholder="E-mail"
                onChangeText={email => setEmail(email)}
                defaultValue={email}
            />

            <Text style={styles.inputTitle}>Senha:</Text>

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                defaultValue={password}
            />

            <Text style={styles.inputTitle}>Logar como:</Text>

            <View style={styles.pickerView}>
                <Picker
                    style={styles.picker}
                    onValueChange={picker => setPicker(picker)}
                    defaultValue={picker}
                >
                    <Picker.Item label="Selecione um usuário" value="none" />
                    <Picker.Item label="Administrador" value="/sessionAdmin" />
                    <Picker.Item label="Vendedor" value="/sessionSalesman" />
                    <Picker.Item label="Cliente" value="client" />
                </Picker>
            </View>

            <TouchableOpacity 
                style={styles.action}
                onPress={handleLogin}
            >
                <Text style={styles.actionText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}