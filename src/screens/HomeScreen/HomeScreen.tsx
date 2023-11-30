import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './styles';

export default function HomeScreen(props: any) {
  const userEmail = props.extraData.email;

  function onLogoutPress() {
    auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {userEmail}</Text>

      <TouchableOpacity style={styles.button} onPress={() => onLogoutPress()}>
        <Text style={styles.buttonTitle}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
