/**
 * Template
 * @demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

type Props = {};
export default class ListPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        ListPage
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
  }
});
