import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, View, ScrollView, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, Platform } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

const { height } = Dimensions.get('window')

export default function Create_Salesman() {

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    state = {
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeigt) => {
        this.setChange({ screenHeight: contentHeigt })
    }

    const scrollEnabled = this.state.screenHeight > height
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS == "android" ? "height" : null}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.container}
                    onContentSizeChange={this.onContentSizeChange}
                >
                    <View style={styles.header}>
                        <Image source={logoImg}/>

                        <TouchableOpacity onPress={navigateBack}>
                            <Feather name="arrow-left" size={28} color="#E82041"/>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>Editar Vendedor</Text>
                    <Text style={styles.description}>
                        Atualize os dados de um usuário vendedor.
                    </Text>

                    <View style={styles.form}>

                        <Text style={styles.formProperty}>INFO:</Text>

                        <TextInput 
                            style={styles.input}
                            placeholder="Nome"
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="E-mail"
                        />
                                                
                        <TextInput 
                            style={styles.input}
                            placeholder="CPF"
                            keyboardType="numeric"
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="RG"
                            keyboardType="numeric"
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="Meta de Vendas"
                            keyboardType="numeric"
                        />

                        <Text style={styles.formProperty}>LOCALIZAÇÃO:</Text>

                        <TextInput 
                            style={styles.input}
                            placeholder="Rua"
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="N° da casa"
                            keyboardType="numeric"
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="Bairro"
                        />

                        <View style={styles.inputGroup}>
                            <TextInput 
                                style={styles.inputCity}
                                placeholder="Cidade"
                            />

                            <TextInput 
                                style={styles.inputUF}
                                placeholder="UF"
                            />
                            
                        </View>

                    </View>

                    <TouchableOpacity 
                        style={styles.action}

                    >
                        <Text style={styles.actionText}>Atualizar</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}