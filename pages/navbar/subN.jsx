import React from 'react';
import {styleSheet} from 'react-native'
import {NativeBaseProvider,ScrollView,View,Text,Center } from 'native-base'

// import { Container } from './styles';

const Sub = () => {
  return(
    <NativeBaseProvider>
  <Center safeAreaTop bg="cyan.500" pt="42px" pb='12px' mb='5px' pr='22' >
<Text fontSize="xl">My App</Text>
  </Center>



    </NativeBaseProvider>
  )
}

export default Sub;