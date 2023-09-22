import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}

function InvestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Invest Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Invest" component={InvestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
