/**
 * 动画
 * @demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated
} from 'react-native';

type Props = {};
export default class AnimationPage extends Component<Props> {
  //导航
  static navigationOptions = ({ navigation }) => ({
    title: `动画`,
  });
  constructor(props){
    super(props);
    this.state={
      fadeOpacity: new Animated.Value(0), //透明度初始值设置为0
      leftPosition:new Animated.Value(0),
      topPosition:new Animated.Value(0),
    }
  }
  componentDidMount(){
    // demo 1 单个动画
    // this._startFadeAnimation();
    // demo2 组合动画
    this._startGroupAnimation();
  }
  componentWillUnmount(){
    // 卸载前，请清除定时器等内容
  }
  _startGroupAnimation(){
    // sequence（顺序执行）、parallel（同时执行）、stagger和delay
    Animated.sequence([
      Animated.timing(this.state.fadeOpacity,{
        toValue:1,
        duration:2000,
      }),
      Animated.parallel([
        Animated.spring(this.state.leftPosition,{
          toValue:200,
          duration:1000,
        }),
        Animated.spring(this.state.topPosition,{
          toValue:200,
          duration:1000,
        }),
      ])

    ]).start();

  }
  // demo 1 单个动画
  _startFadeAnimation(){
    // this.state.fadeOpacity.setValue(1);
    Animated.timing(this.state.fadeOpacity,{
      toValue:1,
      duration:2000,
    }).start(); //开始执行动画
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={{backgroundColor:'#1646b1',color:'#fff',padding:10,position:'relative',  width:200,
          opacity:this.state.fadeOpacity,
          left:this.state.leftPosition,
          top:this.state.topPosition
        }} >Animation 我是Text</Animated.Text>
        <Image source={require('../assets/img/icon1.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  animationTxt:{

  }
});
