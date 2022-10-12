import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Registeration from './components/Registeration';
import Login from './components/Login';
import { Market } from './components/Market';

export default function App() {

  const [isRegistred, setIsRegistred] = useState(false)
  const [isLoged, setIsLoged] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <View style={styles.container}>
      {
        !isRegistred && !isLoged &&
        <Registeration
          setIsRegistred={setIsRegistred}
          setUser={setUser}
        />
      }
      {
        !isLoged && isRegistred &&
        <Login
          user={user}
          setIsLoged={setIsLoged} />
      }
      {
        isLoged && isRegistred &&
        < Market />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
