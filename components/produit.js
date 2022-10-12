import React from 'react'
import { View, Image, StyleSheet, Text, Pressable } from "react-native"
import { alertPopin } from '../utils/functions'

export function Produit(props) {
  const { panier, setPanier, count, product, setCount, onPanier } = props

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={product.img}
      />
      <Text style={styles.name}>Produit : {product.name}</Text>
      <Text style={styles.description}> Description : {product.description}</Text>
      <Text style={styles.prix}>Prix : {product.price} €</Text>
      {
        !onPanier &&
        <Pressable
          onPress={() => {
            if (panier.filter(pro => pro.id === product.id).length === 0) {
              setPanier([
                ...panier, product
              ])
              setCount(count + 1)
              alertPopin("Le produit est ajouté à la panier !")
            }
            else
              alertPopin("Le produit existe dans le panier !")
          }}
          style={styles.button}>
          <Text style={styles.text}>Ajouter au panier</Text>
        </Pressable>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 300,
    margin: 'auto',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    marginBottom: 20
  },
  name: {
    fontWeight: 'bold',
  },
  description: {

  },
  prix: {
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 3,
    backgroundColor: 'blue',
    height: 50,
  },
  text: {
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.25,
    color: 'white',
  },

})