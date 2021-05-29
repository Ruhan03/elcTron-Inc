import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native';
import { ListItem, Icon, SocialIcon } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

import db from '../config';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/product.png'),
        require('../assets/engine.png'),
        require('../assets/tech.png'),
      ],
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MyHeader title={'Home'} navigation={this.props.navigation} />
          <SliderBox
            images={this.state.images}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
          />
        </View>
        <View style={styles.paragraph}>
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
    flex: 1,
  },
  icon: { flex: 1, flexDirection: 'row' },
  inputIcon: { width: 25, height: 25 },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
