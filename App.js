
import React from 'react';
import Routes from './Routes';
import { withAuthenticator } from 'aws-amplify-react-native';
function App() {
  return (
    <>
<Routes/>
    </>
  );
}
export default withAuthenticator(App)