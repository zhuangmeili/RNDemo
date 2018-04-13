/**
 * Template
 * @demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

type Props = {};
export default class Template extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: `首页`,
  });
  render() {
    return (
      <View style={styles.container}>
       <Text>我是首页的内容</Text>
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
