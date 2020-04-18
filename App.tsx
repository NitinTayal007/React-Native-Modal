/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert
} from 'react-native';

export default class App extends Component {
  // initial state
  state = {
    isVisible: false
  };

  // hide show modal
  displayModal(show){
    this.setState({isVisible: show})
  }

  render() {
    return (
        <View style = {styles.container}>
          <Modal
              animationType = {"slide"}
              transparent={true}
              visible={this.state.isVisible}
              onRequestClose={() => {
                Alert.alert('Modal has now been closed.');
              }}>
              <View style={styles.modalView}>
                <Text style = { styles.text }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas eget tempus augue, a convallis velit.
                </Text>
                <Text style={styles.closeText} onPress={() => {this.displayModal(!this.state.isVisible);}}>
                  Close Modal
                </Text>
              </View>
          </Modal>
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.displayModal(true);
              }}>
            <Text style={styles.buttonText}>Show Modal</Text>
          </TouchableOpacity>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'grey',
    flexDirection:'row'
  },
  button: {
    marginTop: 40,
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  modalView: {
    backgroundColor:'#ffffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 180,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});