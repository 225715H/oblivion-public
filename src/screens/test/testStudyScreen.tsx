import React from "react";
import { View, Text, TouchableOpacity } from "react-native";



const TestStudyScreen = ( { navigation } : { navigation: any }) => {
    return (
        <View>
            <Text>Test Study Screen</Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            > 
              <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TestStudyScreen;