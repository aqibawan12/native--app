import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';

const Example = ({nav}) => {

  return <Center w="100%"  backgroundColor="cyan.10 a0">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
                    Sign in to continue!

        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo"
                    onPress={() => nav.navigate('Home')}

          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }}    
          onPress={() => nav.navigate('Sign')}

          >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default function Login({navigation}) {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example nav={navigation} />
                
            </Center>
          </NativeBaseProvider>
        );
    };
    