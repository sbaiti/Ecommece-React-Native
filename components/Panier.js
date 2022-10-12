import React from 'react'
import { View, StyleSheet, ScrollView, Text } from "react-native"
import { Produit } from './produit'


export function Panier(props) {
  const { panier } = props

  function prixTotales() {
    let sum = 0
    panier.forEach(element => {
      sum = sum + element.price
    });
    return sum.toFixed(2)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          panier.length === 0 ?
            <Text style={styles.text}>Le panier est vide</Text>
            :
            <View>
              <Text style={styles.text}>Liste des produits</Text>
              {panier.map(product => {
                return <Produit
                  onPanier={true}
                  key={product.id}
                  product={product} />
              })}
              <Text style={styles.text}>Prix Totale : {prixTotales()} €</Text>
            </View>
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    height: "88%"
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
    marginBottom: 20
  },
})