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
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'ios 环境',
  android: 'android 环境',
});

type Props = {};
export default class ScrollPage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      name:''
    };
  }
  onInputchange=(val)=>{
    this.setState({
      name:val
    });
  }
  render() {
    let pic={
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.container}>
          <Text>你是我的小苹果</Text>
          <Image source={pic} style={styles.img}/>
          <Text>222</Text>

          <Image source={pic} style={styles.img}/>
          <Text>222</Text>

          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
          <Text>222</Text>
          <Text>222</Text>
          <Text>222</Text>
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
          <Image source={pic} style={styles.img}/>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img:{
    width:100,
    height:100,
  },
  formInput:{
    height:42,
    borderWidth:1,
    borderColor:'#ddd',
    borderStyle:'solid'
  }

});
