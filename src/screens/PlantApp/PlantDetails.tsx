import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ImageBackground, Image, Dimensions, StatusBar } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Box } from '../../components/Plant/Box';
import { Requirment } from '../../components/Plant/Requirment';
// import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const DATA = [
    { id: 1, type: "Sun", fill: 15, value: "15°c", image: require("../../../assets/icons/plant/sun.png") },
    { id: 2, type: "Water", fill: 30, value: "250 ML Daily", image: require("../../../assets/icons/plant/water.png") },
    { id: 3, type: "Room Temp", fill: 22, value: "25°c", image: require("../../../assets/icons/plant/room-temp.png") },
    { id: 4, type: "Soul", fill: 25, value: "3 Kg", image: require("../../../assets/icons/plant/soul.png") },
    { id: 5, type: "Fertilizer", fill: 35, value: "150 Mg", image: require("../../../assets/icons/plant/fertilizer.png") },
]

export const PlantDetails: React.FC = ({ navigation }: any) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FAFAFA"
        }}>

            <ImageBackground
                source={require("../../../assets/images/plant/plant-bg.jpg")}
                style={{
                    width: width,
                    height: 200,
                }}
            >
                <View style={{
                    flex: 1,
                    paddingTop: StatusBar.currentHeight,
                    paddingHorizontal: 30,
                }}>
                    {/* <AntDesign name="back" size={24} color="#FFFFFF" /> */}
                    <View style={{
                        // flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require("../../../assets/icons/back_arrow_icon.png")}
                                style={{ width: 20, height: 20, tintColor: "#FFFFFF" }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert("Coming Soon!")}>
                            <Image
                                source={require("../../../assets/icons/more_icon.png")}
                                style={{ width: 20, height: 20, tintColor: "#FFFFFF" }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        color: "#FFFFFF",
                        marginTop: 10,
                        fontSize: 24,
                        fontWeight: "700"
                    }}>Glory</Text>
                    <Text style={{
                        color: "#FFFFFF",
                        fontSize: 24
                    }}>Mantas</Text>
                </View>
            </ImageBackground>
            <View style={{
                flex: 1,
                backgroundColor: "#EFF2F5",
                marginTop: -40,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
            }}>
                <Text style={{
                    paddingTop: 30,
                    paddingHorizontal: 30,
                    color: "#3C4A6B",
                    fontWeight: "700"
                }}>Requirments</Text>
                <View>
                    <FlatList
                        style={{ marginTop: 30 }}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        data={DATA}
                        keyExtractor={(item) => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Box image={item.image} fill={item.fill} />}
                    />

                    <FlatList
                        style={{ marginTop: 50 }}
                        contentContainerStyle={{ paddingHorizontal: 30 }}
                        data={DATA}
                        keyExtractor={(item) => `${item.id}`}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Requirment image={item.image} type={item.type} value={item.value} />}
                    />
                </View>
                <View style={{
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                    width: "100%",
                    height: 100,
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: "50%",
                        backgroundColor: "#0D986A",
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                        <Text style={{
                            color: "#FFFFFF",
                            lineHeight: 20,
                            fontSize: 16,
                            fontWeight: "500"
                        }}>{"Take\nAction"}</Text>
                        <TouchableOpacity onPress={() => alert("Coming Soon!")}>
                            <Image
                                source={require("../../../assets/icons/plant/right-arrow.png")}
                                style={{ width: 20, height: 15, tintColor: "#FFFFFF" }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        width: "50%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        paddingHorizontal: 30,
                    }}>
                        <Text style={{
                            color: "#B3B6CB",
                            lineHeight: 20,
                            fontSize: 16,
                            fontWeight: "500",
                            paddingEnd: 20
                        }}>Almost 2 week of growing time</Text>
                        <Image
                            source={require("../../../assets/icons/plant/down-arrow.png")}
                            style={{ width: 20, height: 30, tintColor: "#B3B6CB", resizeMode: "contain" }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}