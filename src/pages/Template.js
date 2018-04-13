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
export default class Template extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       template
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
