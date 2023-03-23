import React from "react";
import {
  NativeBaseProvider,
  Button,
  ScrollView,
  View,
  Text,
  Box,
  Image,
  Center,
  H1,
} from "native-base";

const Video = () => {
  let a = [1, 4, 7];

  return (
    <NativeBaseProvider>
      <View bg="red.400" pt='35px' px='15px' w='370px' display='flex' flexDirection='row' justifyContent="space-between">
        <Text>2</Text>
        <Text>2</Text>
      </View>
      <ScrollView flex={1} mt='50px'>
        {a.map((val, i) => {
          return (
            <Button
              m='7'
              mb='1'
              key={i}
              onPress={() => navigation.navigate(val)}
            >
              <Text m='1px' mb='12px' pl='58px' color='green.100'>
                Task no # {i}
              </Text>
              <View mr='209px'>
                <Text>{val}</Text>
              </View>
            </Button>
          );
        })}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Video;
