import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from "../../components/Plant/Card";

const { width, height } = Dimensions.get("window");

const DATA: any[] = [
    { id: 1, name: "Dikto", image: require("../../../assets/images/plant/plant-01.jpg") },
    { id: 2, name: "Luivas", image: require("../../../assets/images/plant/plant-02.jpg") },
    { id: 3, name: "Jarks", image: require("../../../assets/images/plant/plant-03.jpg") },
    { id: 4, name: "Orcyd", image: require("../../../assets/images/plant/plant-04.jpg") },
    { id: 5, name: "Orcyd", image: require("../../../assets/images/plant/plant-05.jpg") },
    { id: 6, name: "Orcyd", image: require("../../../assets/images/plant/plant-06.png") }
];

export const PlantApp: React.FC = ({ navigation }: any) => {

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#FAFAFA"
        }}>
            <View style={{
                flex: 1,
                backgroundColor: "#EFF2F5",
                marginHorizontal: 10,
                paddingBottom: 30
            }}>
                <View style={{
                    backgroundColor: "#FFFFFF",
                    paddingBottom: 20,
                    borderRadius: 40
                }}>
                    <View style={{
                        backgroundColor: "#0D986A",
                        height: 220,
                        margin: 10,
                        borderRadius: 20
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            marginTop: 40,
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                paddingStart: 25,
                                fontSize: 16,
                                color: "#A6D9C8",
                                fontWeight: "700"
                            }}>
                                New Plants
                            </Text>
                            <TouchableOpacity onPress={() => alert("Coming Soon!")}>
                                <Image style={{
                                    width: 30,
                                    height: 30,
                                    marginEnd: 25,
                                    paddingEnd: 25,
                                    tintColor: "#A6D9C8",
                                }} source={require("../../../assets/icons/more_icon.png")} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            style={{ marginHorizontal: 5 }}
                            data={DATA}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <Card key={index} item={item} />}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        marginTop: 10
                    }}>
                        <Text style={{
                            color: "#495675",
                            fontSize: 16,
                            fontWeight: "700",
                            opacity: 0.5
                        }}>Today's Share</Text>
                        <Text style={{
                            color: "#BFC2D8",
                            fontSize: 16
                        }}>See All</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        paddingTop: 25
                    }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("ui-plantDetails")}>
                                <ImageBackground
                                    source={require("../../../assets/images/plant/plant-07.png")}
                                    style={{
                                        width: width * 0.4,
                                        height: 100,
                                        backgroundColor: "#E3E3E1",
                                        borderRadius: 15
                                    }}
                                    imageStyle={{ resizeMode: "cover", borderRadius: 15 }}
                                />
                            </TouchableOpacity>
                            <ImageBackground
                                source={require("../../../assets/images/plant/plant-08.jpg")}
                                style={{
                                    width: width * 0.4,
                                    height: 100,
                                    backgroundColor: "#E3E3E1",
                                    marginTop: 10,
                                    borderRadius: 15
                                }}
                                imageStyle={{ resizeMode: "cover", borderRadius: 15 }}
                            />
                        </View>
                        <View>
                            <ImageBackground
                                source={require("../../../assets/images/plant/plant-09.jpg")}
                                style={{
                                    width: width * 0.45,
                                    height: 210,
                                    backgroundColor: "#E3E3E1",
                                    borderRadius: 20
                                }}
                                imageStyle={{ resizeMode: "cover", borderRadius: 15 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    marginTop: 30,
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "#495675",
                        opacity: 0.5
                    }}>Added Friends</Text>
                    <Text style={{
                        opacity: 0.4,
                        fontSize: 12
                    }}>5 Total</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={require("../../../assets/images/pro.png")}
                                style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 2, borderColor: "green" }}
                            />
                            <Image
                                source={require("../../../assets/images/prof.png")}
                                style={{ width: 40, height: 40, borderRadius: 50, marginLeft: -20, borderWidth: 2, borderColor: "green" }}
                            />
                            <Image
                                source={require("../../../assets/images/durgesh.jpg")}
                                style={{ width: 40, height: 40, borderRadius: 50, marginLeft: -20, borderWidth: 2, borderColor: "green" }}
                            />
                            <Text style={{
                                marginLeft: 5,
                                opacity: 0.5
                            }}>+2 more</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{
                                fontWeight: "700",
                                opacity: 0.5
                            }}>Add New</Text>
                            <TouchableOpacity onPress={() => alert("Coming Soon!")}
                                style={{
                                    backgroundColor: "#E2E8F6",
                                    borderRadius: 15,
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    alignSelf: "flex-end",
                                    marginLeft: 10
                                }}>
                                <Text style={{
                                    fontSize: 32,
                                    textAlign: "center",
                                    alignSelf: "center",
                                    color: "#24A179"
                                }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}