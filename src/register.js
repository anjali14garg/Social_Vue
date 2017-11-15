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
var Dimensions = require('Dimensions');
import axios from 'axios'; 
var {width, height} = Dimensions.get('window');
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Register extends Component<{}> {
    state={
        email:'',
        password:''
    }
    login(){
        axios.post('https://reqres.in/api/register?email='+this.state.email+'password='+this.state.password)
        .then( (response)=> {

             if(response.status=='200'){
                this.props.navigation.navigate('Login')
            } 
          })
          .catch((error)=> {
            alert('error')
          });
        
    }
render(){
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{left:30,top:20, flex:0.4}}>
                    <Icon name="ios-close" size={40} color="#000" onPress={()=>this.login()}/>
                </View>
                <View style={styles.textView}>
                <Text style={{fontSize:20,textAlign:'center', color:'gray'}}>
                    CREATE NEW 
                </Text>
                <Text style={{fontSize:20,textAlign:'center', color:'gray'}}>
                    ACCOUNT
                </Text>
                </View>
            </View>
            <View style={styles.main} >
                <View style={{flex:0.2,flexDirection:'row', width:width-40,justifyContent:'center'}}>
                    <TextInput placeholder='First Name' style={{borderColor:'gray', borderWidth:0.5,width:width-208, paddingLeft:20}}></TextInput>
                    <TextInput placeholder='Last Name'style={{borderColor:'gray', borderWidth:0.5,borderLeftWidth:0,width:width-208, paddingLeft:20}} ></TextInput>
                </View>
                
                <TextInput placeholder='User Name'style={styles.passwordtextInput}></TextInput> 
                <TextInput placeholder='Email'style={styles.passwordtextInput} onChangeText={(email) => this.setState({email})} value={this.state.email}></TextInput>
                <TextInput placeholder='Password'style={styles.passwordtextInput} secureTextEntry onChangeText={(password) => this.setState({password})} value={this.state.password}></TextInput>   
                <Text style={{ textAlign:'center', color:'gray',paddingTop:20}}>By tapping "Sign Up" you agree</Text>
                <Text style={{ textAlign:'center', color:'gray'}}>to the<Text style={{color:'orange'}}> term & conditions</Text></Text>

            </View>
            <View style={styles.footer}>
            <TouchableHighlight style={styles.signinButton} onPress={()=>this.login()}>
                <Text style={{color:'white', fontWeight:'bold'}}>CREATE NEW ACCOUNT</Text>
            </TouchableHighlight>
            </View>
        
        
            <KeyboardSpacer/>
        
        </View>
    )
}

}
const styles = StyleSheet.create({
    container:{
        flex:3,
        
    },
    header:{
        flex:1,
        backgroundColor:'transparent',
        

    },
    textView:{
        flex:0.6,
        justifyContent:'center', 
        alignItems:'center',
    },
    main:{
        justifyContent:'center', 
        alignItems:'center',
        flex:1.5,
        backgroundColor:'transparent',
    },
    footer:{
        flex:0.5,
        backgroundColor:'transparent',
    },
    passwordtextInput:{
        borderColor:'gray', 
        borderWidth:0.5,
        borderTopWidth:0,
        width:width-40,
        paddingLeft:20,
        flex:0.2
    },
    emailtextInput:{
        borderRadius:3, 
        borderColor:'gray', 
        borderWidth:0.5,
        width:width-40,
        
        flex:0.2  
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
})