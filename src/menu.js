import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity ,
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
export default class Menu extends Component<{}> {
    home(){
        this.props.navigation.navigate('Home')
    }
    setting(){
        this.props.navigation.navigate('Setting')
    }
    render(){
        
        return(
           <View style={styles.container}>
           <View style={styles.header}>
                <View style={{left:20}}>
                    <Icon name="md-close" size={25} color="#000"/>
                </View>
                <View style={{left:20 ,top:20}}>
                    <Icon name="ios-create-outline" size={40} color="#000"/>
                </View>
                <View style={{left:-20}}>
                    <Icon name="ios-settings" size={25} color="#000" onPress={()=>this.setting()}/>
                </View>
           </View>
            
                <View style={styles.main}>
                        <TouchableOpacity><Text style={styles.buttonText} onPress={()=>this.home()}>Home</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.buttonText}>Profile</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.buttonText}>Compose</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.buttonText}>Gallery</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.buttonText}>Capture</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.buttonText}>Stats</Text></TouchableOpacity>
                        </View>
                   <View style={styles.footer}>
                    <TouchableOpacity style={styles.logoutButton}><Text style={styles.logoutText}>Logout</Text></TouchableOpacity>
                   </View>
                   
                </View>
           
           
        )
    }
}
const styles = StyleSheet.create({
    
    container: {
        flex: 2,
    },
    header:{
        top:30,
        flex:0.5,
        backgroundColor:'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between'
        

    },
    main:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent',
    },
    footer:{
        flex:0.5,
        backgroundColor:'transparent',
    },
    buttonText:{
        backgroundColor:'transparent',
        fontSize:20,
        padding:15,
        fontWeight:'bold'

    },
    logoutText:{

    },
    logoutButton:{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#F4A460',
            padding:20,
            width:width-100,
            marginLeft:50

    }
})