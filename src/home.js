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
  FlatList,
  ScrollView,
  ActivityIndicator
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { List, ListItem, SearchBar,  } from "react-native-elements";
const KEYS_TO_FILTERS = ['first_name', 'last_name'];
export default class Home extends Component<{}> {
    state={
        list:'',
        searchTerm: '',
        flag:false
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
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
                flag:true,
             list:res.data
            });
          })
          .catch(error => {
            
          });
      };

    renderHeader = () => {
        return <SearchBar placeholder="All People" lightTheme containerStyle={{backgroundColor:'white'}} 
        onChangeText={(term) => { this.searchUpdated(term) }}  
        inputStyle={{backgroundColor:'white', fontSize:20}} noIcon/>;
      };
    render(){
        if(this.state.flag){
            var x=this.state.list
            const filteredList = x.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
            console.log("filteredList",filteredList)
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
                        data={filteredList}
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
    else{
        return (
            <View style={{flex: 1}}>
                <ActivityIndicator size="large" color='#50e3a9' />
            </View>
        )
    }
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