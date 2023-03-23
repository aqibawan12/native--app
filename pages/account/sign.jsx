import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center,Divider , NativeBaseProvider,Text } from "native-base";

const Example = ({nav}) => {
  return <Center w="100%" backgroundColor="cyan.100">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        
        <Heading  color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="600" size="lg" >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
          <Divider mt="2" mx="32px" w="70%"  />
        <FormControl.Label  w="100%"

         > Already have an account<Text
         onPress={() => nav.push('Login')}

         underline   color= "indigo.500"
         > Sign in</Text></FormControl.Label>
                 </VStack>
      </Box>
    </Center>;
};

    export default ({navigation}) => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example nav ={navigation} />
            </Center>
          </NativeBaseProvider>
        );
    };
    