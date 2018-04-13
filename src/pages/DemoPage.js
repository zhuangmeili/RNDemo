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
} from 'react-native';

const instructions = Platform.select({
  ios: 'ios 环境',
  android: 'android 环境',
});

type Props = {};
export default class DemoPage extends Component<Props> {
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
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/img/icon2.png')} style={{width:30,height:30}}/>
          {/* demo1 */}
          {/*<Image source={pic} style={{ width:110,height:110}}></Image>
          <Text style={styles.instructions}>
            {instructions}
          </Text>*/}

          {/* demo 2*/}
          {/*<View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#333'}}>
              111
            </View>
            <View style={{flex:2,backgroundColor:'#666'}}>
              222
            </View>
            <View style={{flex:3,backgroundColor:'#999'}}>
              333
            </View>
          </View>*/}
          {/* demo3 column 多行 row 一行排列*/}
          {/* <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <View style={{width:50,height:50,backgroundColor:'#333'}}></View>
            <View style={{width:50,height:50,backgroundColor:'#999'}}></View>
            <View style={{width:50,height:50,backgroundColor:'#666'}}></View>
          </View>*/}
          {/* demo4 处理文本输入*/}
          <View>
            <TextInput
              style={styles.formInput}
              placeholder='请输入name'
              onChangeText={this.onInputchange}
            />
            <Text style={{padding:0,fontSize:20,width:300}}>
              {this.state.name}
            </Text>
          </View>



          {/* demo5*/}
          {/*demo6*/}
          {/*demo7*/}
          {/*demo8*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  formInput:{
    height:42,
    borderWidth:1,
    borderColor:'#ddd',
    borderStyle:'solid'
  }

});
