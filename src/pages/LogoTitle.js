/**
 * 自定义 导航 标题组件
 * @zhuang
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

type Props = {};
export default class LogoTitle extends Component<Props> {

  render() {
    return (
      <Image
        source={{uri:'https://img2.autoimg.cn/hscdfs//g25/M09/4A/2F/0x0_0_autohomecar__wKgHIFp9TwWAb55nAAAYAOJiRCQ444.png'}}
        style={styles.headerImg}/>


    );
  }
}

const styles = StyleSheet.create({
  headerImg:{
    width:20,
    height:20,
  }
});
