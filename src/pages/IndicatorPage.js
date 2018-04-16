/**
 * Template
 * @demo
 *
 * 参数
 *  color：'white | black'  //菊花图的颜色
 *
 *
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Button,

} from 'react-native';

type Props = {};
export default class IndicatorPage extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: `指示器`,
  });
  constructor(props){
    super(props);
    // 初始状态
    this.state={
      isAnimate:true,
    }
  }
  componentDidMount(){
    this._setToggleTimeout();
  }
  componentWillUnmount(){
    this.timer=null;
    console.warn(this.timer.toString());
  }

  _setToggleTimeout(){
    this.timer=setTimeout(()=>{
      this.setState({
        isAnimate: !this.state.isAnimate
      });
      this._setToggleTimeout();
    },2000)

  }
  _onPressButton(){
    console.warn('tap the button');
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.isAnimate}
          style={[styles.centering,styles.gray, {height:40}]}
          color='black'
          size='large'
        ></ActivityIndicator>

        <ActivityIndicator
          animating={this.state.isAnimate}
          style={[styles.centering,{backgroundColor:'#fff'}]}
        ></ActivityIndicator>

        <ActivityIndicator
          animating={this.state.isAnimate}
          style={[styles.centering,{backgroundColor:'#ddd',transform:[{scale:1.5}]}]}
          color='#f60'
        ></ActivityIndicator>

        <Text>{this.state.isAnimate.toString()}</Text>

        {/* demo 2 button*/}
        <Button
          onPress={this._onPressButton}
          title='按钮'
          color='#333'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centering:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  gray:{
    backgroundColor:'#ccc'
  }
});
