import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import {NativeBaseProvider,Button,ScrollView,View,Text,Box,Image,Center} from 'native-base'
import N from "../../navbar/navbar";
import SN from "../../navbar/subN";

export default function Home({navigation}) {
let a = ['Basic (without skill)','Advance (with skill)','Content Writing','Video Creator','Help']

    return (<NativeBaseProvider>
      <View flex={1}  maxHeight="89px"><SN/></View>
      
      <ScrollView flex={1} mt='50px'>
    
{a.map((val,i)=>{
 return <Button m='7' mb='1' key={i} 
 onPress={() => navigation.navigate(val)}>
 <Text m='5' color="green.100">{val}</Text><View></View></Button>
})}
        </ScrollView>
                </NativeBaseProvider>
    )

    
  
}


