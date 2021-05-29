import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { Card, SocialIcon } from 'react-native-paper';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class CoreValuesScreen extends Component {
  render() {
    return (
      <ScrollView style={{ width: '100%' }}>
        <MyHeader title="Our Core Values" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.paragraph}>Innovate and Improve:</Text>
          <Text style={styles.paragraph}>
            Innovation is the nucleus of our company. Constantly pursue
            progression and improve, disrupt and innovate. Constantly pursue
            progression and improvement.
          </Text>
          ​<Text style={styles.paragraph}>Quality:</Text>
          <Text style={styles.paragraph}>
            We provide outstanding products and unsurpassed service that,
            together, deliver premium value to our customers.
          </Text>
          <Text style={styles.paragraph}>Teamwork:</Text>
          <Text style={styles.paragraph}>
            We work together, across boundaries, to meet the needs of our
            customers and to help our Company win
          </Text>
          <Text style={styles.paragraph}>Performance:</Text>
          <Text style={styles.paragraph}>
            We value our performance driven culture where we all work together
            to reach new milestones. Know your goals and reach new heights.
          </Text>
          <Text style={styles.paragraph}>Continuously improve:</Text>
          <Text style={styles.paragraph}>
            By viewing the business from a “Glass Half Empty” perspective to
            intensely focus us on how we can operate more effectively.
          </Text>
          <Text style={styles.paragraph}>Flexibility:</Text>
          <Text style={styles.paragraph}>
            We empower our employees in a work environment that is conducive to
            creating the optimal work/life balance
          </Text>
        </View>
        <View style={styles.paragraph1}>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: { flex: 1, flexDirection: 'row' },
  inputIcon: { width: 25, height: 25 },
  paragraph1: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
