import React, { useState } from 'react'
import {
  View,
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground
} from 'react-native'
import bg from "../assets/bg.jpg"
import { alertPopin } from '../utils/functions';


export default function Registeratioon(props) {
  const [user, setUserRegistration] = useState({})
  const { setUser, setIsRegistred } = props

  const onChangeText = (key, val) => {
    setUserRegistration({
      ...user,
      [key]: val
    })
  }
  const signUp = () => {
    const { username, password, email } = user
    if (!username) {
      alertPopin("Username is required !")
      return
    }
    if (!email) {
      alertPopin("Email is required !")
      return
    }
    if (!password) {
      alertPopin("Password is required !")
      return
    }
    alertPopin("L'inscription a été validé !")
    setUser(user)
    setIsRegistred(true)

  }



  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.backgroundImageStyle}>

        <Text style={styles.title}>Registeration</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='default'
          onChangeText={val => onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='default'
          onChangeText={val => onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='default'
          onChangeText={val => onChangeText('password', val)}
        />
        <Pressable
          title='Sign Up'
          onPress={signUp}
          style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </Pressable>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    height: 50,
    margin: 10,
    padding: 12,
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 3
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
  container: {

  },
  backgroundImageStyle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
})