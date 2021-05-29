import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SocialIcon} from 'react-native-elements'
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class AboutScreen extends Component {
  render() {
    return (
      <ScrollView style={{ width: '100%' }}>
        <MyHeader title="More About Us" navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.paragraph}>Here for You</Text>
    <Text style={styles.paragraph}>
elTron-Inc was founded by three technology addicts, who believes in the potential of technology in EV to completely change the current phase of transportation and its mobility. We aim to be an affordable and accessible electric form of mobility for everyone.
</Text>
​
<Text style={styles.paragraph}>
We understand that mankind has only just begun to understand the future of potential  opportunities that electric technology in EV represents. We are a brand aiming to produce high performance electric vehicles and looking to be a constant technology and component supplier.
</Text>
​
<Text style={styles.paragraph}>
We aim to transform the transportation industry by improving the lives of every EV owner and leaving the world a better place. We also know that the earth has enough renewable resources and Indian EV technology with its OEM plans and its efficiency in thriving the EV world.
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
    icon: { flex: 1, flexDirection: 'row', },
  inputIcon: { width: 25, height: 25, },
   paragraph1: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
