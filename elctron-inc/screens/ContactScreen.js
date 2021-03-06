import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class ContactScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      docId: '',
    };
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('users')
      .where('email_id', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };

  updateUserDetails = () => {
    db.collection('users').doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
    });

    Alert.alert('Profile Updated Successfully');
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
     <ScrollView>
        <MyHeader title="Contact Us" navigation={this.props.navigation} />
    
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={'Name'}
              maxLength={20}
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
              value={this.state.firstName}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={'Email'}
              maxLength={20}
              onChangeText={(text) => {
                this.setState({
                  lastName: text,
                });
              }}
              value={this.state.lastName}
            />
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={'Subject'}
              onChangeText={(text) => {
                this.setState({
                  contact: text,
                });
              }}
              value={this.state.contact}
            />
            <Text style={styles.label}>Type Your Meassage Here</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={'Type Your Meassage Here'}
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  address: text,
                });
              }}
              value={this.state.address}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.updateUserDetails();
              }}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
 
          </View>
        </View>
        
        <View style={styles.paragraph}>
        <Text>+91 95158 94768</Text>
        </View>
                     <View style={styles.icon}>
       < View style={styles.inputIcon}>
      <SocialIcon style={{ marginLeft:80  }} type="facebook" />
      </ View>
      < View style={styles.inputIcon}>
      <SocialIcon style={{ marginLeft: 110 }} type="twitter" />
      </View>
      < View style={styles.inputIcon}>
      <SocialIcon style={{ marginLeft:140 }} light type="linkedin" />
      </View>
    </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6fc0b8',
  },
   paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    flex: 0.88,
    justifyContent: 'center',
  },
  label: {
    fontSize: RFValue(18),
    color: '#717D7E',
    fontWeight: 'bold',
    padding: RFValue(10),
    marginLeft: RFValue(20),
  },
  formTextInput: {
    width: '90%',
    height: RFValue(50),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    marginBottom: RFValue(20),
    marginLeft: RFValue(20),
  },
  button: {
    width: '75%',
    height: RFValue(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(50),
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(20),
  },
  buttonView: {
    flex: 0.22,
    alignItems: 'center',
    marginTop: RFValue(100),
  },
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: 'bold',
    color: '#fff',
  },
   icon: { flex: 1, flexDirection: 'row', },
  inputIcon: { width: 25, height: 25, },
});
