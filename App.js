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
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

const vWidth = Dimensions.get('window').width;
export default class App extends Component<{}> {
  state={
    size:20,
    count:0,
    counts:0,
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.textStyle}>
              <View style={styles.textStyles}>
              <TouchableNativeFeedback
                  onPress={()=>{
                      this.setState({
                        count: this.state.count + 1,
                        size:this.state.size+10,
                      })
                  }}
                  background={TouchableNativeFeedback.SelectableBackground()}>
                  <View>
                      <Text style={{backgroundColor:'#BDBDBD',}}>
                      气球变大</Text>
                  </View>
              </TouchableNativeFeedback>
              <Text style={styles.text}>变大点击次数：{this.state.count}</Text>
              </View>
              <View style={styles.textStyles}>
              <TouchableNativeFeedback
                  onPress={()=>{
                      this.setState({
                        counts: this.state.counts + 1,
                        size:this.state.size-10,
                      })
                  }}
                  background={TouchableNativeFeedback.SelectableBackground()}>
                  <View>
                      <Text style={{backgroundColor:'green',}}>
                      气球变小</Text>
                  </View>
              </TouchableNativeFeedback>
              <Text style={styles.text}>变小点击次数：{this.state.counts}</Text>
              </View>
              <View style={styles.textStyles}>
              <TouchableNativeFeedback
                  onPress={()=>{
                      this.setState({
                        count: 0,
                        counts: 0,
                        size:10,
                      })
                  }}
                  background={TouchableNativeFeedback.SelectableBackground()}>
                  <View>
                      <Text style={{backgroundColor:'yellow',}}>
                      气球还原次数清零</Text>
                  </View>
              </TouchableNativeFeedback>
              </View>
          </View>
          <View style={styles.imageStyle}>
              <Image style={{width:this.state.size,height:this.state.size,marginLeft:((vWidth/2)-(this.state.size/2)),}}
                  source={require('./qiqiu.png')}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent:'space-between',
  },
  textStyle:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
  },
  textStyles:{
    flexDirection:'column',
    width:60,
    height:100,
  },
  imageStyle:{
    justifyContent:'flex-start',
  },
  text:{
    fontSize:18
  }
});
