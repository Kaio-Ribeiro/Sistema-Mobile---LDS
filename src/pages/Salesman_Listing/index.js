import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Salesman_Listing() {
  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate('Detail')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>0 vendedores</Text>
        </Text>
      </View>

      <Text style={styles.title}>Listagem de vendedores!</Text>
      <Text style={styles.description}>Veja todos os funcionários cadastrados.</Text>

      <FlatList
        data={[1, 2, 3]}
        style={styles.salesmanList}
        keyExtractor={salesman => String(salesman)}
        renderItem={() => (
          <View style={styles.salesman}>
            <Text style={styles.salesmanProperty}>E-mail:</Text>
            <Text style={styles.salesmanValue}>kaio@gmail.com</Text>

            <Text style={styles.salesmanProperty}>Nome:</Text>
            <Text style={styles.salesmanValue}>Kaio Anderson</Text>

            <Text style={styles.salesmanProperty}>Quantidade de Planos Vendidos:</Text>
            <Text style={styles.salesmanValue}>4</Text>

            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041"/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}