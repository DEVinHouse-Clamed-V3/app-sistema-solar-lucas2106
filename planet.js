import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Planet = ({ nome, descricaoBreve, descricao, quantidadeSatelites, areaSuperficieKm2, velocidadeOrbitalMediaKmS, periodoRotacaoDias, img }) => {
  const handlePress = () => {
    Alert.alert(`Você clicou em ${nome}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.nome}>{nome}</Text>
        <Image source={{ uri: img }} style={styles.imagem} />
        <Text style={styles.descricaoBreve}>{descricaoBreve}</Text>
        <Text style={styles.info}>Descrição: {descricao}</Text>
        <Text style={styles.info}>Satélites: {quantidadeSatelites}</Text>
        <Text style={styles.info}>Área da Superfície: {areaSuperficieKm2} km²</Text>
        <Text style={styles.info}>Velocidade Orbital Média: {velocidadeOrbitalMediaKmS} km/s</Text>
        <Text style={styles.info}>Período de Rotação: {periodoRotacaoDias} dias</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  descricaoBreve: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
  },
});

export default Planet;
