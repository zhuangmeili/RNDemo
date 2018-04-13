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
        {/* 页面之间跳转*/}
        <Button
          title='跳ListPage'
          onPress={()=>this.props.navigation.navigate('List') } />
        <Button
          title='跳Fetch'
          onPress={()=>this.props.navigation.navigate('Fetch') } />
        <Button
          title='跳DataList'
          onPress={()=>this.props.navigation.navigate('DataList') } />
        <Button
          title='跳DemoPage'
          onPress={()=>this.props.navigation.navigate('Demo') } />
        <Button
          title='跳ScrollPage'
          onPress={()=>this.props.navigation.navigate('Scroll') } />
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
