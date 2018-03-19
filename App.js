/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Switch,
  CheckBox,
  Image,
  ScrollView,
  Button
} from 'react-native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      paperlessSwitch: false,
      emailNotifyCheck: false,
      firstName: null,
      lastName: null,
      userName: null,
      emailId: null,
    }
  }
  handleFirstname(text) {
    console.log('received value is', text);
    this.setState({
      firstName: text,
    })
  }

  handleLastName(text) {
    console.log('received value is', text);
    this.setState({
      lastName: text,
    })
  }

  handleUsername(text) {
    console.log('received value is', text);
    this.setState({
      userName: text,
    })
  }

  handleEmailid(text) {
    console.log('received value is', text);
    this.setState({
      emailId: text,
    })
  }

  render() {
    console.log('state value now', this.state.emailNotifyCheck);
    const tableHead = ['FirstName', 'LastName', 'UserName', 'EmailId'];
    const tableData = [[this.state.firstName, this.state.lastName, this.state.userName, this.state.emailId]];  
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to BoilerPlate-UI!
          </Text>
          <Image source={require('./src/images/bedtime-icon-off.png')} style={styles.logoImage}></Image>
          <Text style={styles.formHeader}>
            Sample Registration Form
          </Text>
          <View style={styles.registrationArea}>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>First Name </Text>
              <TextInput
                testID = {"firstname"}
                underlineColorAndroid = "transparent"
                style={styles.textBox}
                placeholder={'Enter your first name'}
                maxLength = {40}
                onChangeText={(text)=>this.handleFirstname(text)}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Last Name</Text>
              <TextInput
                testID = {"lastname"}
                underlineColorAndroid = "transparent"
                style={styles.textBox}
                placeholder={'Enter your last name'}
                onChangeText={(text)=>this.handleLastName(text)}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Username</Text>
              <TextInput
                testID = {"username"}
                underlineColorAndroid = "transparent"
                style={styles.textBox} placeholder={'Enter your username'}
                onChangeText={(text)=>this.handleUsername(text)}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Password</Text>
              <TextInput
                testID = {"password"}
                underlineColorAndroid = "transparent"
                style={styles.textBox}
                placeholder={'Enter your password'}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>EmailID</Text>
              <TextInput
                testID = {"emailid"}
                underlineColorAndroid = "transparent"
                style={styles.textBox}
                placeholder={'Enter your email id'}
                onChangeText={(text)=>this.handleEmailid(text)}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Age</Text>
              <Picker selectedValue={"34"} style={{width: 100}} testID = {"age"}>
                <Picker.Item label="30"/>
                <Picker.Item label="31" />
                <Picker.Item label="32" />
                <Picker.Item label="33" />
                <Picker.Item label="34" value="34"/>
                <Picker.Item label="35" />
                <Picker.Item label="36" />
                <Picker.Item label="37" />
              </Picker>
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Paperless bills</Text>
              <Switch
                testID = {"paperless"}
                value = {this.state.paperlessSwitch}
                onValueChange={()=>{
                  this.setState({paperlessSwitch: !this.state.paperlessSwitch})
                }}
              />
            </View>
            <View style={styles.textInput}>
              <Text style={styles.textLabel}>Email notification</Text>
              {(Platform.OS === 'android') ? 
                <CheckBox
                  testID = {"emailNotification"}
                  value = {this.state.emailNotifyCheck}
                  onValueChange={()=>{
                    this.setState({emailNotifyCheck: !this.state.emailNotifyCheck})
                  }}
                /> : 
                <Switch
                  testID = {"emailNotification"}
                  value = {this.state.emailNotifyCheck}
                  onValueChange={()=>{
                    this.setState({emailNotifyCheck: !this.state.emailNotifyCheck})
                  }}
                />
              }
            </View>
            <View style={styles.textInput}>
            <Button color={'#ff0000'} title={'Register'} testID = {"register"} onPress={()=>{this.setState({registered: true,})}} />
            </View>
          </View>
          {this.state.registered ?
          <View>
          <TouchableOpacity 
            style={styles.registerButton}
            testID = {"reregister"}
            onPress={()=>{
            this.setState({registered: false})}}>
            <Text>Re-Register</Text>
          </TouchableOpacity>
          <View testID = {"registeredData"}>
            <Table>
              <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
            </Table>
          </View>
          </View>:null}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginTop: 50,
    fontSize: 30,
  },
  logoImage: {
    width: 50,
    height: 50
  },
  formHeader: {
    margin: 25,
    fontSize: 25,
  },
  registrationArea: {
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#00ffff',
    padding: 5,
    height: 30,
    borderRadius: 50,
    margin: 10,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBox: {
    borderWidth: 1, 
    width: '50%',
  },
  head: {
    width: 300,
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    marginLeft: 5
  },
  row: {
    height: 30
  }
});

