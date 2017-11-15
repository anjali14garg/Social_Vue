import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity ,
  Image,
  FlatList
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem, SearchBar,  } from "react-native-elements";
export default class Home extends Component<{}> {
    state={
        list:''
    }
    componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        
        const url = `https://reqres.in/api/users?page=2`;   
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
             list:res.data
            });
          })
          .catch(error => {
            
          });
      };

    renderHeader = () => {
        return <SearchBar placeholder="All People" lightTheme containerStyle={{backgroundColor:'white'}}  
        inputStyle={{backgroundColor:'white', fontSize:20}} noIcon/>;
      };
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
            <View  style={{top:5,right:120}}>
                <Icon name="md-arrow-dropleft-circle" size={25} color="white" onPress={()=>this.props.navigation.navigate('Menu')}/>
            </View>
            
                <Text style={{ color:'white', fontSize:30}}>Home</Text>
            </View>
           
            <View style={styles.main}>
                <View style={{backgroundColor:'#F4A460', flex:1.75, padding:30}}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => 
                    <ListItem
                        Avatar
                        title={`${item.first_name} ${item.last_name}`}
                        
                        avatar={{ uri: item.avatar }}
                        containerStyle={{ borderBottomWidth: 0, padding:20, backgroundColor:'lightgray' }}
                        />}
                    ListHeaderComponent={this.renderHeader}
                    keyExtractor={item => item.id}
                />
                </View>
            </View>
            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:2
    },
    header:{
        alignItems:'center',
        flex:0.25,
        backgroundColor:'black',
        justifyContent:'center',
        flexDirection:'row',

    },
    main:{
        flex:1.75
    }
})