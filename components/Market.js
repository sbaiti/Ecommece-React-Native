import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from "react-native"
import { ListProducts } from './ListProducts'
import { Panier } from './Panier'
import panierLogo from "../assets/panier.jpg"

export function Market() {
  const [showPanier, setShowPanier] = useState(false)
  const [count, setCount] = useState(0)
  const [panier, setPanier] = useState([])
  return (
    <View style={styles.container}>
      <View style={styles.fixedHead}>
        <Text onPress={() => setShowPanier(false)} style={styles.title}>Products</Text>
        <View style={styles.pnaier}>
          <Text style={styles.count}>{count}</Text>
          <TouchableHighlight onPress={() => setShowPanier(true)}>
            <Image
              style={styles.tinyLogo}
              source={panierLogo}
            />
          </TouchableHighlight>
        </View>
      </View>
      {
        showPanier ?
          <Panier
            panier={panier}
          /> :
          <ListProducts
            panier={panier}
            count={count}
            setPanier={setPanier}
            setCount={setCount}
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  container: {
    padding: 12,
    position: 'relative',
  },
  fixedHead: {
    height: 70,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  count: {
    color: 'red',
    position: 'absolute',
    fontSize: 15,
    fontWeight: 'bold',
    top: 12,
    right: 17,
    zIndex: 1
  },
  pnaier: {
    zIndex: 0,
    position: 'relative',
  }
})