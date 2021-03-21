import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detail() {
    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }
    function navigateToUpdate() {
        navigation.navigate('Update_Salesman')
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.salesman}>
                <Text style={[styles.salesmanProperty, { marginTop: 0 }]}>E-mail:</Text>
                <Text style={styles.salesmanValue}>kaio@gmail.com</Text>

                <Text style={styles.salesmanProperty}>Nome:</Text>
                <Text style={styles.salesmanValue}>Kaio Anderson</Text>

                <Text style={styles.salesmanProperty}>CPF:</Text>
                <Text style={styles.salesmanValue}>065.342.245-18</Text>

                <Text style={styles.salesmanProperty}>RG:</Text>
                <Text style={styles.salesmanValue}>06534224518</Text>

                <Text style={styles.salesmanProperty}>Cidade e Estado:</Text>
                <Text style={styles.salesmanValue}>Cedro - CE</Text>

                <Text style={styles.salesmanProperty}>Bairro:</Text>
                <Text style={styles.salesmanValue}>Prado</Text>

                <Text style={styles.salesmanProperty}>Endereço:</Text>
                <Text style={styles.salesmanValue}>Rua Natanael Cortez, 643</Text>

                <Text style={styles.salesmanProperty}>Meta de Vendas:</Text>
                <Text style={styles.salesmanValue}>7</Text>

                <Text style={styles.salesmanProperty}>Quantidade de Planos Vendidos:</Text>
                <Text style={styles.salesmanValue}>4</Text>

            </ScrollView>

            <View style={styles.actionsBox}>
                <Text style={styles.title}>Ações disponíveis!</Text>

                <Text style={styles.description}>Atualize os dados do vendedor ou exclua seu cadastro.</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={navigateToUpdate}>
                        <Text style={styles.actionText}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionText}>Excluir</Text>
                    </TouchableOpacity>
                </View>    
            </View>
        </View>
    )
}