/**
 * Template
 * @demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
// 自定义 导航
import LogoTitle from '../pages/LogoTitle'
type Props = {};
export default class DetailPage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  // 路由标题 配置 static navigationOptions
  // 方法一 object
  // static navigationOptions={
  //   title:'详情页-对象'
  // };
  // 方法二 function
  static navigationOptions =({navigation})=> {
    const { params }=navigation.state;
    return {
      title:`详情id=${params.id}`,
      headerTitle:<LogoTitle/>, //标题组件
      //header button
      headerRight:(
        <Button title='Info' onPress={()=>alert('This is button')}/>
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };
  componentWillMount(){
    this.props.navigation.setParams({
      addCount:this._addCount
    })
  }
  render() {
    // 获得路由参数
    const {params }=this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text>Detail page</Text>

        {/* 详情页导航到详情页 push a new routes to history */}
        <Button
          title='导航到详情页 ... again'
          onPress={()=>this.props.navigation.navigate('Detail') }/>

        {/* 回退 goBack()*/}
        <Button title='返回上一级' onPress={()=>this.props.navigation.goBack()}/>
        <Text>获得的路由参数如下： {JSON.stringify(params)}</Text>

        {/* 更新 navigationOptions with setParams*/}
        <Button
          title='更新 title'
          onPress={()=>this.props.navigation.setParams({ update:'update'}) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
