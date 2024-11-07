import React from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  return (
      <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}
      >
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Password:</Text>
        <TextInput
            style={{
              width: 250,
              height: 40,
              borderColor: '#ccc',
              borderWidth: 1,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
            secureTextEntry={true}
            placeholder="Enter password"
        />
      </View>
  );
};

export default App;
