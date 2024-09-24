import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import planetas from './planetas'; // Importa o JSON dos planetas
import Planet from './Planet'; // Importa o componente Planet

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {planetas.map((planeta, index) => (
          <Planet
            key={index}
            nome={planeta.nome}
            descricaoBreve={planeta.descricaoBreve}
            descricao={planeta.descricao}
            quantidadeSatelites={planeta.quantidadeSatelites}
            areaSuperficieKm2={planeta.areaSuperficieKm2}
            velocidadeOrbitalMediaKmS={planeta.velocidadeOrbitalMediaKmS}
            periodoRotacaoDias={planeta.periodoRotacaoDias}
            img={planeta.img}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
});

