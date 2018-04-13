/**
 * HomePage
 * @auther zhuang
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      name:''
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `首页`,
  });
  componentDidMount(){
    this.setState({
      name:'zhuang'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>我是首页的内容---{this.state.name}</Text>
        {/* 页面之间跳转*/}
        <Button
          title='跳转列表页'
          onPress={()=>this.props.navigation.navigate('List') } />


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
