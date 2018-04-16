/**
 * 触摸事件
 * @demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Touchable
} from 'react-native';

type Props = {};
export default class TouchPage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      name:'zhuang'
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `触摸事件`,
  });
  _onPressButton(){
    console.warn(this.state.name+' tapped the button!');
  }
  _onLongPressButton(){
    console.warn('onLongPress button');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Text>Button</Text>
        </TouchableHighlight>

        <TouchableOpacity onLongPress={this._onLongPressButton.bind(this)}>
          <Text>Button opacity onLongPress</Text>
        </TouchableOpacity>

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
