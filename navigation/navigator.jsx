import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import VPN from '../screens/VPN';

const Stack = createNativeStackNavigator();

export default function navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          // options={{ title: 'Welcome' }}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="VPN" component={VPN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
