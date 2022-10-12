import React from 'react'
import { View, StyleSheet, ScrollView } from "react-native"
import { products } from "../data/products"
import { Produit } from './produit'

export function ListProducts(props) {
  const { panier, setPanier, count, setCount } = props
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          products.map(product => {
            return <Produit
              key={product.id}
              count={count}
              panier={panier}
              setCount={setCount}
              setPanier={setPanier}
              product={product} />
          })
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
  scrollView: {
    paddingBottom: 50
  }

})