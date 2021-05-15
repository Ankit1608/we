import React from 'react';
import Home from './Pages/home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Add from './Pages/Add';
import Profile from './Pages/Profile';
import Explore from './Pages/explore';
import DestinationSearchScreen from './Pages/destination';
import Timeline from './Pages/timeline';
import ContType from './Pages/contType';
import SelectLocation from './Pages/selecctLocation';
import Upload from './Pages/upload';
import SavedPosts from './Pages/savedPosts';
import ProfileSettings from './Pages/settings';
import Map from './Pages/map';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const Homestack = () => (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: true,
        }}
        name="Explore"
        component={Explore}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: true,
        }}
        name="Map"
        component={Map}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: true,
        }}
        name="Destination Search"
        component={DestinationSearchScreen}
      />
    </Stack.Navigator>
  );
  const Timelinestack = () => (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Time Line"
        component={Timeline}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Content Type"
        component={ContType}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Select Location"
        component={SelectLocation}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Upload"
        component={Upload}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: true,
        }}
        name="Map"
        component={Map}
      />
    </Stack.Navigator>
  );
  const ProfileStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Saved Posts"
        component={SavedPosts}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: false,
        }}
        name="Profile Settings"
        component={ProfileSettings}
      />
      <Stack.Screen
        screenOptions={{
          headerShown: true,
        }}
        name="Map"
        component={Map}
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          component={Homestack}
          options={{
            title: 'Search',
            tabBarIcon: ({size, focused, color}) => {
              return <Fontisto name="search" size={25} />;
            },
          }}
        />
        <Tab.Screen
          name="Timeline"
          component={Timelinestack}
          options={{
            title: 'Timeline',
            tabBarIcon: ({size, focused, color}) => {
              return <FaIcon name="user" size={25} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            title: 'Profile',
            tabBarIcon: ({size, focused, color}) => {
              return <MaIcon name="filter-variant" size={25} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
