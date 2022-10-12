import React, { useState } from 'react'
import {
  View,
  Pressable,
  TextInput,
  StyleSheet,
  ImageBackground,
  Text
} from 'react-native'
import bg from "../assets/bg.jpg"
import { alertPopin } from '../utils/functions';


export default function Login(props) {
  const [userLogin, setUserLogin] = useState({})
  const { setIsLoged, user } = props

  const onChangeText = (key, val) => {
    setUserLogin({
      ...user,
      [key]: val
    })
  }
  const LoginFn = () => {
    const { username, password } = userLogin
    if (!username) {
      alertPopin("Username is required !")
      return
    }
    else if (!password) {
      alertPopin("Password is required !")
      return
    }

    else if (username != user.username || password != user.password) {
      alertPopin("Incorrect ID !")
      return
    }
    else {
      alertPopin("Login has been validated !")
      setIsLoged(true)
    }

  }



  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.backgroundImageStyle}>

        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='default'
          onChangeText={val => onChangeText('username', val)}
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
          onPress={LoginFn}
          style={styles.button}>
          <Text style={styles.text}>Login</Text>
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