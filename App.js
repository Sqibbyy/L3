import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [selectedUserType, setSelectedUserType] = useState('Admin');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Display alert with welcome message
        Alert.alert("Welcome!");
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
            }}
        >
            {/* User Type Picker */}
            <Text style={{ fontSize: 18, marginBottom: 10 }}>User Type:</Text>
            <Picker
                selectedValue={selectedUserType}
                onValueChange={(itemValue) => setSelectedUserType(itemValue)}
                style={{ width: 250, height: 50, marginBottom: 20 }}
            >
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Guest" value="Guest" />
            </Picker>

            {/* Password Label and TextInput */}
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Password:</Text>
            <TextInput
                style={{
                    width: 250,
                    height: 40,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    marginBottom: 20,
                }}
                secureTextEntry={true}
                placeholder="Enter password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            {/* Log In Button */}
            <Button title="LOG IN" onPress={handleLogin} />
        </View>
    );
};

export default App;
