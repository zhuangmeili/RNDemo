/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  SectionList
} from 'react-native';

type Props = {};
export default class FetchPage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      name:'hahah',
      keyList:[]
    };
  }
  componentWillMount(){

  }
  componentDidMount() {
    this.getViewData();
  }
  getViewData=()=>{
    let url='http://10.168.99.77/zml/userpoints/tasklist';
    fetch(url).then(res=>res.json()).then(res=>{
      if(res.returncode === 200){
        this.setState({
          taskList:res.result
        })
      }
    }).catch(error=>{
      console.warn('error');
    })
  }
  _renderItem=({item})=>{
    return  <Text style={styles.listItem} >{item.taskName}</Text>
  };
  _keyExtractor=(item,index)=>{
    let key= item.id? 'id='+item.id : 'index='+index;
    return key;
  };
  render() {
    return (
      <View>
        {/* 写法二 */}
        <Text>{}</Text>
        <FlatList
          data={this.state.taskList}
          keyExtractor={this._keyExtractor}
          renderItem={ this._renderItem }/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img:{
    width:100,
    height:100,
  },
  listItem:{
    fontSize:16,
    lineHeight:40,
    textAlign:'center',
  },

});
