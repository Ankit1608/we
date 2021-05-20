import React, {useEffect} from 'react';
import Routes from './Routes';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';

import {createUser} from './src/graphql/mutations';
import {getUser, listUsers} from './src/graphql/queries';

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      // get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (!userInfo) {
        return;
      }

      // check if THE user exist in database
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );

      if (getUserResponse.data.getUser) {
        console.log('User already exists in database');
        return;
      }
      console.log(userInfo);
      // if it doesn't (it's newly registered user)
      // then, create a new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        name: userInfo.attributes.email,
        email: userInfo.attributes.email,
      };

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };

    fetchUser();
  }, []);
  return (
    <>
      <Routes />
    </>
  );
}
export default withAuthenticator(App);
