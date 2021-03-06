import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../utils';
import { colors } from '../../../utils/colors';
import { Button, Gap } from '../../Atom';

export default function darkProfile({title, onPress, desc, photo}) {
  return (
    <View>
      <View style={styles.container}>
        <Button type="icon-only" icon="back-light" onPress={onPress} />
        <View style={styles.contant}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.profesi}>{desc}</Text>
        </View>
        <Image source={photo} style={styles.avatar} />
        <Gap width={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contant: {
    flex: 1,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  name: {
    flex: 1,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    },
    profesi: {
        flex: 1,
        textAlign: 'center',
        color: colors.text.dark3,
        fontFamily: fonts.primary.normal,
        fontSize: 14,
      },
});
