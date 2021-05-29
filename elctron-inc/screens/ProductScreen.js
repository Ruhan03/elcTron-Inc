import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { Card, Icon, ListItem,SocialIcon } from 'react-native-elements';
import MyHeader from '../components/MyHeader.js';
import firebase from 'firebase';
import db from '../config.js';

export default class ProductScreen extends Component {
  render() {
    return (
       <ScrollView style={{ width: '100%' }}>
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="Products" />
        <Image
          source={require('../assets/product.png')}
          style={{ width: 300, height: 180 }}
        />
        <Text style={styles.paragraph}>E-RAZR</Text>
        <Text style={styles.paragraph1}>
          We introduce our top of the line EV bike the new E-RAZR with a range
          of 220 KM and top speed of 110 KMPH.
        </Text>
        <View>
          <View style={styles.paragraph2}>
            <Text>+91 95158 94768</Text>
          </View>
          <View style={styles.icon}>
            <View style={styles.inputIcon}>
              <SocialIcon style={{ marginLeft: 80 }} type="facebook" />
            </View>
            <View style={styles.inputIcon}>
              <SocialIcon style={{ marginLeft: 110 }} type="twitter" />
            </View>
            <View style={styles.inputIcon}>
              <SocialIcon style={{ marginLeft: 140 }} light type="linkedin" />
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {
    margin: 24,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    icon: { flex: 1, flexDirection: 'row' },
  inputIcon: { width: 25, height: 25 },
  paragraph2: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
