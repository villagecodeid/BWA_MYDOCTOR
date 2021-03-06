import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils';
import {Fire} from '../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          // user login
          navigation.replace('MainApp');
        } else {
          // user logout
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>MyDoctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
