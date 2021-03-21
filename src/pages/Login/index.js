import React from 'react'
import {Picker} from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Login() {
    const navigation = useNavigation()

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
            />

            <Text style={styles.inputTitle}>Senha:</Text>

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
            />

            <Text style={styles.inputTitle}>Logar como:</Text>

            <View style={styles.pickerView}>
                <Picker
                    style={styles.picker}
                >
                    <Picker.Item label="Administrador" value="admin" />
                    <Picker.Item label="Vendedor" value="salesman" />
                    <Picker.Item label="Cliente" value="client" />
                </Picker>
            </View>

            <TouchableOpacity 
                style={styles.action}
            >
                <Text style={styles.actionText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}