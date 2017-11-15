import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'; 
import Toast from 'react-native-simple-toast';
import KeyboardSpacer from 'react-native-keyboard-spacer';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
export default class Login extends Component<{}> {
    state={
        email:'',
        password:''
    }
    register(){
        this.props.navigation.navigate('Register')
    }
    home(){
        axios.post('https://reqres.in/api/login?email='+this.state.email+'password='+this.state.password)
        .then( (response)=> {
             if(response.status=='200'){
                this.props.navigation.navigate('Menu')
            } 
          })
          .catch((error)=> {
            Toast.showWithGravity("Sign in Failed! Wrong password or username",Toast.LONG,Toast.TOP)
          });
    }
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.mainview}>
                <View style={styles.welcome}><Text style={styles.welcomeText}>WELCOME</Text></View>
               
                <View style={styles.textboxView}>
                    <TextInput placeholder='Email' style={styles.emailtextInput}
                    onChangeText={(email) => this.setState({email})} value={this.state.email}></TextInput>
                    <TextInput placeholder='Password' style={styles.passwordtextInput} secureTextEntry
                    onChangeText={(password) => this.setState({password})} value={this.state.password}></TextInput>   
                    <Text style={{flex:0.2, alignSelf:'flex-end', color:'gray', paddingRight:15,paddingTop:10}}>Forgot Password?</Text>
                </View>
                <View style={styles.signinView}>
                    <TouchableHighlight style={styles.signinButton} onPress={()=>this.home()}>
                        <Text style={{color:'white'}}>Sign In</Text>
                    </TouchableHighlight>
                </View> 
            </View>
            <View style={styles.footerView}>
            <Text style={{color:'gray'}}>Don't have an account?</Text>
            <TouchableOpacity style={styles.newAccButton} onPress={()=>this.register()}>
                <Text style={{color:'orange'}}>Create new account</Text>
            </TouchableOpacity>
            
            </View>
            <KeyboardSpacer/>
        </View>
      
      )
    }
}
const styles = StyleSheet.create({
 
    container: {
      flex: 4,
    },
    header: {
        flex:1, 
        backgroundColor:'transparent'
    },
    mainview: {
        flex:2, 
        backgroundColor:'transparent', 
        justifyContent:'center'
    },
    welcome: {
        flex:0.5,
        alignItems:'center'
    },
    welcomeText: {
        fontSize:30,
        color:'gray'
    },
    textboxView:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'

    },
    signinView:{
        flex:0.5,
    },
    signinButton:{
        backgroundColor:'#008B8B',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:30,
        marginRight:30,
        marginTop:25,
        borderWidth:2,
        borderRadius:50,
        borderColor:'green',
        padding:15
        
    },
    newAccButton:{
        backgroundColor:'transparent',
    },
    passwordtextInput:{
        borderColor:'gray', 
        borderWidth:0.5,
        borderTopWidth:0,
        width:width-40,
        padding:5, 
        flex:0.3
    },
    emailtextInput:{
        borderRadius:3, 
        borderColor:'gray', 
        borderWidth:0.5,
        width:width-40,
        padding:5, 
        flex:0.3   
    },
    footerView:{
        flex:1, 
        backgroundColor:'transparent', 
        justifyContent:'center',  
        alignItems:'center', 
        top:30
    },
  });
  
