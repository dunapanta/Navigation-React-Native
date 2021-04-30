import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const TopTabAlbums = () => {
  const {authState, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Chat Screen</Text>
      {authState.isLoggedIn && <Button title="logout" onPress={logout} />}
    </View>
  );
};
