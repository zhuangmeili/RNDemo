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
  SectionList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

type Props = {};
export default class FetchPage extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: `点评列表页`,
  });
  constructor(props){
    super(props);
    this.state={
      taskList:[],
      isPageLoad:true,
      isRefresh:false, // 下拉刷新

      // 分页相关
      isLoading:false,
      pageNum:1,
      pageSize:7,
      pageTotal:1,
      pageFootState:0,  //控制footer 0 隐藏 1、加载完成 2、正在加载中
      pageFootText:['','没有更多数据了','正在加载中']
    };
  }
  componentWillMount(){

  }
  componentDidMount() {
    this.getViewData();
  }
  getViewData=()=>{
    let url='http://10.168.99.77/zml/userpoints/tasklist';
    let {pageNum, pageSize, taskList,isRefreshing }=this.state;
    fetch(url,{
      pageNum:pageNum,
      pageSize:pageSize
    }).then(res=>res.json()).then(res=>{
      if(res.returncode === 200){
        let {list,pageTotal}= res.result;
        if(pageNum === 1){
          this.setState({
            taskList:list,
            pageTotal:pageTotal
          });
        }else{
          this.setState({
            taskList:taskList.concat(list)
          })
        }
      }
    }).catch(error=>{
      console.warn('error');
    }).finally(()=>{
      isRefreshing && this.setState({isRefreshing: false})
    })
  };
  // id 生成器
  _keyExtractor=(item,index)=>{
    let key= 'id='+item.id +'，index='+index;
    return key;
  };
  // item 生成器
  _renderItem=({item})=>{
    return  <Text style={styles.listItem} >{item.taskName}</Text>
  };
  //下拉刷新
  _onRefresh=()=>{
    this.setState({
      isRefreshing: true,
      pageNum:1, //初始化当前page
    },()=>{
      this.getViewData();
    });

  };
  // loadMore
  _onEndReached=()=>{
    let {pageNum, pageTotal, pageFootState}=this.state;
    if( pageFootState !== 0 ){
      return ;
    }
    if(pageNum>=pageTotal){
      this.setState({
        pageFootState:1, //已经加载完成
      });
      return ;
    } else {
      this.setState({
        pageNum: pageNum+1,
        pageFootState:2, //loading
      },()=>{
        this.getViewData();
      })
    }

  };
  // 分页正在加载中
  _ListFooterComponent=()=>{
    let { pageFootState,pageFootText }=this.state;
    return (
      <View style={styles.footer}>
        { pageFootState===2? <ActivityIndicator /> :''}
        <Text>{pageFootText[pageFootState]}</Text>
      </View>
    )
  };
  render() {
    return (
      <View>
        {/* 下拉刷新  属性： refreshControl */}
        <FlatList
          data={this.state.taskList}
          keyExtractor={this._keyExtractor}
          renderItem={ this._renderItem }
          ListFooterComponent={this._ListFooterComponent}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefresh}
              onRefresh={this._onRefresh }
              tintColor="#333"
              title="Loading..."
              titleColor="#f60"
              colors={['#f00', '#0f0', '#00f']}
              progressBackgroundColor="#ff0"
            ></RefreshControl>
          }/>
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
  listItem:{
    fontSize:16,
    lineHeight:100,
    backgroundColor:'#fff',
    marginBottom:10,
    textAlign:'center',
  },
  footer:{
    flexDirection:'row',
    height:24,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },

});
