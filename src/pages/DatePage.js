/**
 * Template
 * @demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  CheckBox,
  DatePickerIOS,
  DatePickerAndroid,
} from 'react-native';

type Props = {};
export default class DatePage extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: `日期`,
  });
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      // 结果为8，东八区
      timeZoneOffsetInHours:(-1)*(new Date()).getTimezoneOffset()/60
    }
  }
  _onDateChange(){
    console.warn('date change');
  }
  render() {
    return (
      <View style={styles.container}>
        {/* demo 3 DatePickerIOS */}
        <DatePickerIOS
          date={this.state.date}
          mode="time"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this._onDateChange}
          minuteInterval={10}
        />
        <Text>{this.state.date.toString()}</Text>
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
