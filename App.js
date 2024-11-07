import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [selectedUserType, setSelectedUserType] = useState('Admin'); // State for user type
    const [userName, setUserName] = useState(''); // State for user name
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Show a personalized toast message based on user type and user name
        ToastAndroid.show(`Welcome ${selectedUserType} ${userName}`, ToastAndroid.SHORT);
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

            {/* User Name Label and TextInput */}
            <Text style={{ fontSize: 18, marginBottom: 10 }}>User Name:</Text>
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
                placeholder="Enter user name"
                value={userName}
                onChangeText={(text) => setUserName(text)}
            />

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

            {/* Log In TouchableOpacity */}
            <TouchableOpacity onPress={handleLogin} style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}>
                <Text style={{ color: '#fff', fontSize: 18 }}>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default App;
