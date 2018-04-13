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
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native';

const instructions = Platform.select({
  ios: 'ios 环境',
  android: 'android 环境',
});

type Props = {};
export default class DataList extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      name:''
    };
  }
  onInputchange=(val)=>{
    this.setState({
      name:val
    });
  };
  _renderItem=({item})=>{
    return  <Text style={styles.listItem} >{item.name}</Text>
  };
  _keyExtractor=(item,index)=>{
    return 'id='+item.id;
  };
  render() {
    let pic={
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let listData=[
      {id:1001,name:'item1'},
      {id:1002,name:'item2'},
      {id:1003,name:'item3'},
      {id:1004,name:'item4'},
      {id:1005,name:'item5'},
      {id:1006,name:'item6'}
    ];
    let sectionData=[
      {title:'D',data:['Devin']},
      {title:'E',data:['Even','Emma','Element','Engage']},
    ];
    // 适合展示长列表的组件 FlatList（优先渲染屏幕上可见的元素） SectionList
    return (
      <View>
        {/*  写法一 */}
        <FlatList
          data={listData}
          keyExtractor={this._keyExtractor}
          renderItem={({item})=> <Text>{item.name}</Text>}/>

        {/* 写法二 */}
        <FlatList
          data={listData}
          keyExtractor={this._keyExtractor}
          renderItem={ this._renderItem }/>


        {/* 分组标签----- */}
        <SectionList
          sections={sectionData}
          renderItem={({item})=><Text style={styles.sectionItem}>{item}</Text>}
          renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}/>
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
  formInput:{
    height:42,
    borderWidth:1,
    borderColor:'#ddd',
    borderStyle:'solid'
  },
  listItem:{
    fontSize:20,
    lineHeight:40,
    textAlign:'center'
  },
  sectionHeader:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000',
  },
  sectionItem:{
    paddingLeft:10,
    fontSize:12,
    color:'#888'
  }

});
