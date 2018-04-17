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
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import HomePage from './src/pages/HomePage';
import FetchPage from './src/pages/FetchPage';
import ListPage from './src/pages/ListPage';
import DetailPage from './src/pages/DetailPage';
import DataList from './src/pages/DataList';
import DemoPage from './src/pages/DemoPage';
import ScrollPage from './src/pages/ScrollPage';
import TouchPage from './src/pages/TouchPage';
import AnimationPage from './src/pages/AnimationPage';
import IndicatorPage from './src/pages/IndicatorPage';
import DatePage from './src/pages/DatePage';




const AppNavigator=StackNavigator({
  // Home 路由名称 screen 路由对应的screen
  Home:{ screen: HomePage},
  List:{ screen: ListPage},
  Detail:{screen:DetailPage},
  Fetch:{screen:FetchPage},
  DataList:{screen:DataList},
  Demo:{ screen:DemoPage},
  Scroll:{ screen:ScrollPage},
  Touch:{ screen:TouchPage},
  Animation:{ screen:AnimationPage},
  Indicator:{ screen:IndicatorPage},
  Date:{ screen:DatePage},
},{
  // 默认路由
  initialRouteName:'Fetch',
  // 导航配置
  navigationOptions:{
    headerStyle: {
      backgroundColor: '#f60',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const instructions = Platform.select({
  ios: 'ios环境',
  android: '安卓环境',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({

});
