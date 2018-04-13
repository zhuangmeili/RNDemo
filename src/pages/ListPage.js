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

type Props = {};
export default class ListPage extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: `列表页`,
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>ListPage</Text>

        {/* 路由参数 */}
        <Button
          title='跳转详情页'
          onPress={()=>this.props.navigation.navigate('Detail',{
            id:1,
            from:'ListPage'
          })}/>

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
