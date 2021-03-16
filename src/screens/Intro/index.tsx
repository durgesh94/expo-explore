import React from 'react';
import { View, Text } from 'react-native';
import { introStyles } from "./intro.style";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Intro: React.FC = ({ navigation }: any) => {

    return (
        <View style={introStyles.container}>
            <View style={{ padding: 10 }}>
                <Text style={introStyles.heading}>UI DESIGN EXAMPLES</Text>
            </View>
            <TouchableOpacity style={introStyles.btnWrapper}
                onPress={() => navigation.navigate("Home")}>
                <Text style={introStyles.btnText}>Food Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={introStyles.btnWrapper}
                onPress={() => navigation.navigate("Profile")}>
                <Text style={introStyles.btnText}>User Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={introStyles.btnWrapper}
                onPress={() => navigation.navigate("Flat")}>
                <Text style={introStyles.btnText}>Flat Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity style={introStyles.btnWrapper}
                onPress={() => navigation.navigate("Cred-Home")}>
                <Text style={introStyles.btnText}>CRED-HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={introStyles.btnWrapper}
                onPress={() => navigation.navigate("Cred-Money")}>
                <Text style={introStyles.btnText}>CRED-MONEY</Text>
            </TouchableOpacity>
        </View>
    )
}